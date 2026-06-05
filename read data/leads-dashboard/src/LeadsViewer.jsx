import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#e2e8f0'
  },
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: '#0f172a',
    borderBottom: '3px solid #3b82f6',
    zIndex: 50,
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
  },
  navContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logo: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px'
  },
  navTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff'
  },
  navSubtitle: {
    fontSize: '12px',
    color: '#94a3b8'
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  refreshBtn: {
    padding: '10px 16px',
    background: '#3b82f6',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  main: {
    paddingTop: '80px',
    paddingBottom: '40px',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '80px 24px 40px 24px'
  },
  header: {
    marginBottom: '32px'
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '8px'
  },
  subtitle: {
    fontSize: '16px',
    color: '#94a3b8'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    marginBottom: '32px'
  },
  card: {
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '8px',
    padding: '24px',
    transition: 'all 0.3s'
  },
  cardLabel: {
    fontSize: '12px',
    color: '#94a3b8',
    fontWeight: '600',
    marginBottom: '8px',
    textTransform: 'uppercase'
  },
  cardValue: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '8px'
  },
  cardSubtext: {
    fontSize: '12px',
    color: '#64748b'
  },
  progressBar: {
    width: '100%',
    height: '6px',
    background: '#334155',
    borderRadius: '9999px',
    overflow: 'hidden',
    marginTop: '8px'
  },
  progressFill: {
    height: '100%',
    transition: 'all 0.5s'
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  },
  chartCard: {
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '8px',
    padding: '24px'
  },
  chartTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '16px'
  },
  filterSection: {
    marginBottom: '24px',
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  },
  filterBtn: {
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.3s'
  },
  tableContainer: {
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHead: {
    background: '#0f172a',
    borderBottom: '1px solid #334155'
  },
  tableHeaderCell: {
    padding: '16px',
    fontSize: '12px',
    color: '#94a3b8',
    fontWeight: '600',
    textAlign: 'left',
    textTransform: 'uppercase'
  },
  tableBodyRow: {
    borderBottom: '1px solid #334155',
    transition: 'background 0.3s'
  },
  tableCell: {
    padding: '16px',
    fontSize: '14px',
    color: '#e2e8f0'
  },
  badge: {
    padding: '4px 12px',
    borderRadius: '9999px',
    fontSize: '11px',
    fontWeight: '600',
    display: 'inline-block'
  },
  footer: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: '13px',
    marginTop: '32px'
  }
};

const LeadsViewer = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [filter, setFilter] = useState('all');

  const firebaseConfig = {
    apiKey: "AIzaSyCq07wa3J6VSO0o8krxWmRBC5WBeE-yTVA",
    authDomain: "firestudio-mobile.firebaseapp.com",
    projectId: "firestudio-mobile",
    storageBucket: "firestudio-mobile.firebasestorage.app",
    messagingSenderId: "128047437449",
    appId: "1:128047437449:web:eae4932728664a54d15858"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'No Date';
    try {
      if (timestamp.seconds !== undefined) {
        const date = new Date(timestamp.seconds * 1000);
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      }
      if (typeof timestamp === 'string') return timestamp;
      if (timestamp instanceof Date) {
        return timestamp.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      }
      return 'No Date';
    } catch (error) {
      return 'No Date';
    }
  };

  const getColorByType = (type) => {
    const colors = {
      'HOME': '#3b82f6',
      'OFFICE': '#10b981',
      'RETAIL': '#f59e0b',
      'BUSINESS': '#8b5cf6',
      'OTHER': '#6b7280',
      'Unknown': '#9ca3af'
    };
    return colors[type] || colors['Unknown'];
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "leads"));
      let data = [];
      
      querySnapshot.forEach((doc) => {
        const leadData = {
          id: doc.id,
          ...doc.data()
        };
        
        leadData.name = leadData.name || 'N/A';
        leadData.email = leadData.email || 'No Email';
        leadData.phone = leadData.phone || 'No Phone';
        leadData.businessType = leadData.businessType || 'Unknown';
        leadData.goals = leadData.goals || 'No Goals';
        
        data.push(leadData);
      });

      setLeads(data);
      calculateStats(data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
    setLoading(false);
  };

  const calculateStats = (data) => {
    if (data.length === 0) return;

    const businessTypeCount = {};
    data.forEach(lead => {
      const type = lead.businessType || 'Unknown';
      businessTypeCount[type] = (businessTypeCount[type] || 0) + 1;
    });

    const validEmails = data.filter(lead => lead.email && lead.email !== 'No Email' && lead.email.includes('@')).length;
    const validPhones = data.filter(lead => lead.phone && lead.phone !== 'No Phone' && lead.phone.length > 5).length;

    const statsData = {
      total: data.length,
      validEmails,
      validPhones,
      dataQuality: Math.round(((validEmails + validPhones) / (data.length * 2)) * 100),
      businessTypes: Object.entries(businessTypeCount).map(([type, count]) => ({
        name: type,
        value: count,
        color: getColorByType(type)
      }))
    };

    setStats(statsData);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = filter === 'all' 
    ? leads 
    : leads.filter(lead => lead.businessType === filter);

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.navLeft}>
            <div style={styles.logo}>📊</div>
            <div>
              <div style={styles.navTitle}>LeadForce Analytics</div>
              <div style={styles.navSubtitle}>Firebase Data Dashboard</div>
            </div>
          </div>
          <div style={styles.navRight}>
            <button style={styles.refreshBtn} onClick={fetchLeads}>
              <span>🔄</span> Refresh
            </button>
            <div style={{width: '1px', height: '24px', background: '#475569'}}></div>
            <span style={{color: '#cbd5e1', fontSize: '14px'}}>
              {loading ? '⏳ Loading...' : `✓ ${leads.length} Leads`}
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.heading}>Leads Management Dashboard</h2>
          <p style={styles.subtitle}>Real-time analytics and data validation from Firebase Firestore</p>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div style={styles.statsGrid}>
            <div style={{...styles.card, borderColor: '#3b82f6'}}>
              <div style={styles.cardLabel}>📊 Total Leads</div>
              <div style={{...styles.cardValue, color: '#fff'}}>{stats.total}</div>
              <div style={styles.cardSubtext}>All records in database</div>
            </div>

            <div style={{...styles.card, borderColor: '#10b981'}}>
              <div style={styles.cardLabel}>✉️ Valid Emails</div>
              <div style={{...styles.cardValue, color: '#4ade80'}}>{stats.validEmails}</div>
              <div style={styles.cardSubtext}>{Math.round((stats.validEmails / stats.total) * 100)}% coverage</div>
            </div>

            <div style={{...styles.card, borderColor: '#f59e0b'}}>
              <div style={styles.cardLabel}>📱 Valid Phones</div>
              <div style={{...styles.cardValue, color: '#facc15'}}>{stats.validPhones}</div>
              <div style={styles.cardSubtext}>{Math.round((stats.validPhones / stats.total) * 100)}% coverage</div>
            </div>

            <div style={{...styles.card, borderColor: '#a855f7'}}>
              <div style={styles.cardLabel}>⭐ Data Quality</div>
              <div style={{...styles.cardValue, color: '#d8b4fe'}}>{stats.dataQuality}%</div>
              <div style={styles.progressBar}>
                <div 
                  style={{...styles.progressFill, width: `${stats.dataQuality}%`, background: '#a855f7'}}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Charts */}
        {stats && (
          <div style={styles.chartsGrid}>
            <div style={styles.chartCard}>
              <h3 style={styles.chartTitle}>📈 Business Type Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={stats.businessTypes}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, value}) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {stats.businessTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div style={styles.chartCard}>
              <h3 style={styles.chartTitle}>✅ Data Validation Summary</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                    <span style={{fontSize: '13px', color: '#cbd5e1'}}>Email Coverage</span>
                    <span style={{color: '#4ade80', fontWeight: '600'}}>{Math.round((stats.validEmails / stats.total) * 100)}%</span>
                  </div>
                  <div style={styles.progressBar}>
                    <div style={{...styles.progressFill, width: `${(stats.validEmails / stats.total) * 100}%`, background: '#10b981'}}></div>
                  </div>
                </div>
                
                <div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                    <span style={{fontSize: '13px', color: '#cbd5e1'}}>Phone Coverage</span>
                    <span style={{color: '#facc15', fontWeight: '600'}}>{Math.round((stats.validPhones / stats.total) * 100)}%</span>
                  </div>
                  <div style={styles.progressBar}>
                    <div style={{...styles.progressFill, width: `${(stats.validPhones / stats.total) * 100}%`, background: '#f59e0b'}}></div>
                  </div>
                </div>

                <div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                    <span style={{fontSize: '13px', color: '#cbd5e1'}}>Overall Quality</span>
                    <span style={{color: '#d8b4fe', fontWeight: '600'}}>{stats.dataQuality}%</span>
                  </div>
                  <div style={styles.progressBar}>
                    <div style={{...styles.progressFill, width: `${stats.dataQuality}%`, background: '#a855f7'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div style={styles.filterSection}>
          <button
            onClick={() => setFilter('all')}
            style={{
              ...styles.filterBtn,
              background: filter === 'all' ? '#3b82f6' : '#334155',
              color: '#fff'
            }}
          >
            All Leads ({leads.length})
          </button>
          {stats && stats.businessTypes.map(type => (
            <button
              key={type.name}
              onClick={() => setFilter(type.name)}
              style={{
                ...styles.filterBtn,
                background: filter === type.name ? type.color : '#334155',
                color: '#fff'
              }}
            >
              {type.name} ({type.value})
            </button>
          ))}
        </div>

        {/* Table */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead style={styles.tableHead}>
              <tr>
                <th style={styles.tableHeaderCell}>Name</th>
                <th style={styles.tableHeaderCell}>Email</th>
                <th style={styles.tableHeaderCell}>Phone</th>
                <th style={styles.tableHeaderCell}>Business Type</th>
                <th style={styles.tableHeaderCell}>Date</th>
                <th style={styles.tableHeaderCell}>Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr style={styles.tableBodyRow}>
                  <td colSpan="6" style={{...styles.tableCell, textAlign: 'center', padding: '32px'}}>
                    Loading data...
                  </td>
                </tr>
              ) : filteredLeads.length === 0 ? (
                <tr style={styles.tableBodyRow}>
                  <td colSpan="6" style={{...styles.tableCell, textAlign: 'center', padding: '32px'}}>
                    No leads found
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} style={{...styles.tableBodyRow, cursor: 'pointer'}} onMouseEnter={(e) => e.currentTarget.style.background = '#334155'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                    <td style={styles.tableCell}>{lead.name}</td>
                    <td style={styles.tableCell}>
                      {lead.email === 'No Email' ? (
                        <span style={{color: '#ef4444'}}>❌ {lead.email}</span>
                      ) : (
                        <span style={{color: '#4ade80'}}>✓ {lead.email}</span>
                      )}
                    </td>
                    <td style={styles.tableCell}>
                      {lead.phone === 'No Phone' ? (
                        <span style={{color: '#ef4444'}}>❌ {lead.phone}</span>
                      ) : (
                        <span style={{color: '#4ade80'}}>✓ {lead.phone}</span>
                      )}
                    </td>
                    <td style={styles.tableCell}>
                      <span 
                        style={{
                          ...styles.badge,
                          background: getColorByType(lead.businessType) + '33',
                          color: getColorByType(lead.businessType)
                        }}
                      >
                        {lead.businessType}
                      </span>
                    </td>
                    <td style={styles.tableCell}>{formatTimestamp(lead.timestamp)}</td>
                    <td style={styles.tableCell}>
                      <span style={{
                        ...styles.badge,
                        background: (lead.email !== 'No Email' && lead.phone !== 'No Phone') ? '#10b98133' : '#f5950b33',
                        color: (lead.email !== 'No Email' && lead.phone !== 'No Phone') ? '#4ade80' : '#facc15'
                      }}>
                        {lead.email !== 'No Email' && lead.phone !== 'No Phone' ? '✓ Complete' : '⚠️ Incomplete'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p>Last updated: {new Date().toLocaleString()}</p>
          <p>Read-only view • Data from Firebase Firestore</p>
        </div>
      </div>
    </div>
  );
};

export default LeadsViewer;
