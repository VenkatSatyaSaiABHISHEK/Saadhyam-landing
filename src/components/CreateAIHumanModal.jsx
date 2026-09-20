import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Zap, Sparkles, User, Briefcase, Mail, Phone, Building, Layers } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function CreateAIHumanModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    aiHumanRole: 'AI Sales Executive',
    goals: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.businessType) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, 'leads'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        businessType: formData.businessType,
        aiHumanRole: formData.aiHumanRole,
        goals: formData.goals || `Deploy ${formData.aiHumanRole} for autonomous workflows`,
        source: 'Saadhyam AI Humans Platform',
        timestamp: serverTimestamp()
      });

      console.log('Lead document written with ID: ', docRef.id);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        if (onSuccess) onSuccess();
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error adding lead document: ', error);
      alert(`Failed to submit: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="modal-content"
          style={{ maxWidth: '540px' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <X size={22} color="#a1a1aa" />
          </button>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '40px 0' }}
            >
              <CheckCircle2 size={64} color="#10b981" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '26px', marginBottom: '10px', color: '#ffffff' }}>
                Your AI Human Request is Received! 🎉
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.6 }}>
                Our workforce engineering team is preparing your custom digital employee sandbox. You will receive an onboarding link within 24 hours.
              </p>
            </motion.div>
          ) : (
            <>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div className="badge-tag" style={{ marginBottom: '12px' }}>
                  <Sparkles size={12} />
                  <span>PROVISION DIGITAL EMPLOYEE</span>
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  Create Your AI Human
                </h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px' }}>
                  Define your first AI employee. Connect tools, configure workflows, and start executing work automatically.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#d4d4d8', marginBottom: '6px', fontWeight: 600 }}>
                    Target AI Human Role
                  </label>
                  <select
                    className="input-field"
                    style={{ background: 'rgba(20, 20, 25, 0.9)', color: '#ffffff', cursor: 'pointer' }}
                    value={formData.aiHumanRole}
                    onChange={(e) => setFormData({ ...formData, aiHumanRole: e.target.value })}
                  >
                    <option value="AI Sales Executive">AI Sales Executive (Inbound/Outbound)</option>
                    <option value="AI Customer Support">AI Customer Support (Zendesk/Intercom)</option>
                    <option value="AI Operations Manager">AI Operations Manager (ERP/Supply Chain)</option>
                    <option value="AI Research Analyst">AI Research Analyst (Competitor/Markets)</option>
                    <option value="AI Finance Assistant">AI Finance Assistant (Invoices/Audit)</option>
                    <option value="AI HR Assistant">AI HR Assistant (Screening/Onboarding)</option>
                    <option value="Custom Role">Custom Enterprise Role</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#d4d4d8', marginBottom: '6px', fontWeight: 600 }}>
                      Your Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="input-field"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#d4d4d8', marginBottom: '6px', fontWeight: 600 }}>
                      Company / Organization *
                    </label>
                    <input
                      required
                      type="text"
                      className="input-field"
                      placeholder="e.g. Acme Corp"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#d4d4d8', marginBottom: '6px', fontWeight: 600 }}>
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      className="input-field"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#d4d4d8', marginBottom: '6px', fontWeight: 600 }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      className="input-field"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#d4d4d8', marginBottom: '6px', fontWeight: 600 }}>
                    Workflows & Systems to Automate
                  </label>
                  <textarea
                    rows={3}
                    className="input-field"
                    placeholder="Describe your current tools (Salesforce, Zendesk, Postgres) and the workflows you want this AI Human to execute..."
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '8px',
                    padding: '16px',
                    fontSize: '16px',
                    borderRadius: '12px'
                  }}
                >
                  {isSubmitting ? (
                    <span>Provisioning Employee Request...</span>
                  ) : (
                    <>
                      <span>Deploy Your AI Human</span>
                      <Zap size={18} />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
