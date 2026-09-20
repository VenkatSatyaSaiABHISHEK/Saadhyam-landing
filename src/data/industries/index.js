import { realEstateData } from './realEstate';
import { hospitalsData } from './hospitals';
import { educationData } from './education';
import { manufacturingData } from './manufacturing';
import { constructionData } from './construction';
import { financeData } from './finance';
import { retailData } from './retail';
import { healthcareData } from './healthcare';
import { hospitalityData } from './hospitality';
import { logisticsData } from './logistics';
import { automotiveData } from './automotive';
import { legalData } from './legal';
import { ecommerceData } from './ecommerce';
import { startupsData } from './startups';
import { professionalServicesData } from './professionalServices';
import { travelData } from './travel';
import { restaurantsData } from './restaurants';
import { gymsData } from './gyms';
import { eventsData } from './events';
import { insuranceData } from './insurance';

export const industries = {
  'real-estate': realEstateData,
  'hospitals': hospitalsData,
  'education': educationData,
  'manufacturing': manufacturingData,
  'construction': constructionData,
  'finance': financeData,
  'retail': retailData,
  'healthcare': healthcareData,
  'hospitality': hospitalityData,
  'logistics': logisticsData,
  'automotive': automotiveData,
  'legal': legalData,
  'ecommerce': ecommerceData,
  'startups': startupsData,
  'professional-services': professionalServicesData,
  'travel': travelData,
  'restaurants': restaurantsData,
  'gyms': gymsData,
  'events': eventsData,
  'insurance': insuranceData
};

// Aliases mapping for common variations
const slugAliases = {
  'realestate': 'real-estate',
  'real_estate': 'real-estate',
  'hospital': 'hospitals',
  'school': 'education',
  'schools': 'education',
  'university': 'education',
  'universities': 'education',
  'banking': 'finance',
  'clinic': 'healthcare',
  'clinics': 'healthcare',
  'hotel': 'hospitality',
  'hotels': 'hospitality',
  'e-commerce': 'ecommerce',
  'd2c': 'ecommerce',
  'startup': 'startups',
  'consulting': 'professional-services',
  'agency': 'professional-services',
  'agencies': 'professional-services',
  'restaurant': 'restaurants',
  'fitness': 'gyms',
  'gym': 'gyms',
  'event': 'events',
  'conference': 'events',
  'conferences': 'events'
};

export function getIndustryBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim().replace(/^\//, '').replace(/^industries\//, '');
  if (industries[cleanSlug]) {
    return industries[cleanSlug];
  }
  const mapped = slugAliases[cleanSlug];
  if (mapped && industries[mapped]) {
    return industries[mapped];
  }
  return null;
}

export function getAllIndustries() {
  return Object.values(industries);
}

export function getIndustryCategories() {
  const categories = {};
  Object.values(industries).forEach((ind) => {
    const cat = ind.category || 'Other';
    if (!categories[cat]) {
      categories[cat] = [];
    }
    categories[cat].push(ind);
  });
  return categories;
}

export function isIndustryRoute(pathname, hash = '') {
  const check = (str) => {
    if (!str) return false;
    const clean = str.toLowerCase().trim().replace(/^\//, '').replace(/^#\/?/, '').replace(/^industries\//, '');
    return !!(industries[clean] || slugAliases[clean]);
  };
  return check(pathname) || check(hash);
}

export function resolveIndustryFromRoute(pathname, hash = '') {
  const cleanPath = (pathname || '').toLowerCase().trim().replace(/^\//, '').replace(/^industries\//, '');
  const cleanHash = (hash || '').toLowerCase().trim().replace(/^#\/?/, '').replace(/^industries\//, '');
  return getIndustryBySlug(cleanPath) || getIndustryBySlug(cleanHash);
}
