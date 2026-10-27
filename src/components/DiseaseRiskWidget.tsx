import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, Info, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { Language, DiseaseRisk } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface DiseaseRiskWidgetProps {
  language: Language;
  diseaseRisks: DiseaseRisk[];
}

export const DiseaseRiskWidget: React.FC<DiseaseRiskWidgetProps> = ({
  language,
  diseaseRisks,
}) => {
  const t = TRANSLATIONS[language];
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedId(expandedId === idx ? null : idx);
  };

  const getRiskBadge = (level: 'Low' | 'Moderate' | 'High') => {
    switch (level) {
      case 'High':
        return <span className="badge badge-red">{t.diseaseRisk.highRisk}</span>;
      case 'Moderate':
        return <span className="badge badge-amber">{t.diseaseRisk.moderateRisk}</span>;
      case 'Low':
      default:
        return <span className="badge badge-green">{t.diseaseRisk.lowRisk}</span>;
    }
  };

  return (
    <div className="card" style={{ marginTop: '20px' }}>
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon-box" style={{ background: '#ffebee', color: '#d32f2f' }}>
            <AlertTriangle size={20} />
          </div>
          <div>
            <h3 className="card-title">{t.diseaseRisk.title}</h3>
            <p className="card-subtitle">{t.diseaseRisk.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Safety Policy Disclaimer */}
      <div
        style={{
          background: '#fff9c4',
          border: '1px solid #fff176',
          borderRadius: 'var(--radius-md)',
          padding: '12px 14px',
          marginBottom: '16px',
          display: 'flex',
          gap: '10px',
          fontSize: '0.82rem',
          color: '#5d4037',
          lineHeight: '1.4',
        }}
      >
        <Info size={18} style={{ flexShrink: 0, marginTop: '2px', color: '#f57f17' }} />
        <span>{t.diseaseRisk.disclaimer}</span>
      </div>

      {/* Disease Risk Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {diseaseRisks.map((item, idx) => {
          const isExpanded = expandedId === idx;
          const scorePercent = item.riskScore;
          const barColor = item.riskLevel === 'High' ? '#e53935' : item.riskLevel === 'Moderate' ? '#f57c00' : '#43a047';

          return (
            <div
              key={idx}
              style={{
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: '#ffffff',
              }}
            >
              {/* Header Row */}
              <div
                onClick={() => toggleExpand(idx)}
                style={{
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  background: isExpanded ? 'var(--bg-subtle)' : '#ffffff',
                  transition: 'background 0.15s ease',
                }}
              >
                <div style={{ flex: 1, paddingRight: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-main)' }}>
                      {item.name[language] || item.name.en}
                    </span>
                    {getRiskBadge(item.riskLevel)}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
                    {item.pathogen}
                  </span>

                  {/* Micro Progress Bar */}
                  <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ flex: 1, height: '6px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${scorePercent}%`,
                          backgroundColor: barColor,
                          borderRadius: '4px',
                          transition: 'width 0.3s ease',
                        }}
                      />
                    </div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                      {scorePercent}%
                    </span>
                  </div>
                </div>

                <div style={{ color: 'var(--text-light)', padding: '4px' }}>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              {/* Collapsible Details */}
              {isExpanded && (
                <div style={{ padding: '16px', borderTop: '1px solid var(--border-color)', background: '#fafafa', fontSize: '0.86rem' }}>
                  {/* Triggers */}
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ fontWeight: 700, color: '#374151', marginBottom: '4px' }}>
                      🌦️ {t.diseaseRisk.triggers}
                    </div>
                    <div style={{ color: '#4b5563', paddingLeft: '8px', borderLeft: '3px solid #60a5fa' }}>
                      {item.triggers[language] || item.triggers.en}
                    </div>
                  </div>

                  {/* Symptoms */}
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ fontWeight: 700, color: '#374151', marginBottom: '4px' }}>
                      🔍 {t.diseaseRisk.symptoms}
                    </div>
                    <div style={{ color: '#4b5563', paddingLeft: '8px', borderLeft: '3px solid #fbbf24' }}>
                      {item.symptoms[language] || item.symptoms.en}
                    </div>
                  </div>

                  {/* Preventative Cultural Practices */}
                  <div>
                    <div style={{ fontWeight: 700, color: '#374151', marginBottom: '6px' }}>
                      🛡️ {t.diseaseRisk.preventative}
                    </div>
                    <ul style={{ paddingLeft: '20px', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {(item.preventativeMeasures[language] || item.preventativeMeasures.en).map((measure, mIdx) => (
                        <li key={mIdx}>{measure}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
