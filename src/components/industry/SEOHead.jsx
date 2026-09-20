import React, { useEffect } from 'react';

export default function SEOHead({ industry }) {
  useEffect(() => {
    if (!industry) return;

    // Document Title
    const originalTitle = document.title;
    const pageTitle = industry.seo?.title || `AI Workforce for ${industry.name} | Saadhyam AI`;
    document.title = pageTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    const originalDesc = metaDesc.getAttribute('content');
    const newDesc = industry.seo?.description || industry.subheadline;
    metaDesc.setAttribute('content', newDesc);

    // Update Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const originalCanonical = canonicalLink.getAttribute('href');
    const canonicalUrl = `https://www.saadhyam.com/industries/${industry.slug}`;
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    const setMetaProp = (prop, val) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', val);
    };

    setMetaProp('og:title', pageTitle);
    setMetaProp('og:description', newDesc);
    setMetaProp('og:url', canonicalUrl);

    // Insert JSON-LD Schema
    const scriptId = 'industry-jsonld-schema';
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': `Saadhyam AI for ${industry.name}`,
      'applicationCategory': 'BusinessApplication',
      'operatingSystem': 'Cloud, Web, Mobile',
      'description': newDesc,
      'url': canonicalUrl,
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
        'name': 'Start Free Trial'
      },
      'provider': {
        '@type': 'Organization',
        'name': 'Saadhyam AI by Mentneo',
        'url': 'https://www.saadhyam.com'
      }
    };
    scriptEl.textContent = JSON.stringify(schemaData);

    return () => {
      document.title = originalTitle;
      if (originalDesc) metaDesc.setAttribute('content', originalDesc);
      if (originalCanonical) canonicalLink.setAttribute('href', originalCanonical);
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
    };
  }, [industry]);

  return null;
}
