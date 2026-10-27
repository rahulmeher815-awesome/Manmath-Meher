import React, { useState } from 'react';
import { Lightbulb, Droplets, ShieldCheck, Sun, CloudRain, Sprout, Apple, ShoppingBag, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Language, Recommendation } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface RecommendationsCardProps {
  language: Language;
  recommendations: Recommendation[];
}

export const RecommendationsCard: React.FC<RecommendationsCardProps> = ({
  language,
  recommendations,
}) => {
  const t = TRANSLATIONS[language];
  const [expandedRationale, setExpandedRationale] = useState<Record<string, boolean>>({});

  const toggleRationale = (id: string) => {
    setExpandedRationale((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets':
        return <Droplets size={20} />;
      case 'CloudRain':
        return <CloudRain size={20} />;
      case 'Sun':
        return <Sun size={20} />;
      case 'Sprout':
        return <Sprout size={20} />;
      case 'Apple':
        return <Apple size={20} />;
      case 'ShoppingBag':
        return <ShoppingBag size={20} />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck size={20} />;
    }
  };

  return (
    <div className="card" style={{ marginTop: '20px' }}>
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon-box">
            <Lightbulb size={20} />
          </div>
          <div>
            <h3 className="card-title">{t.recommendations.title}</h3>
            <p className="card-subtitle">{t.recommendations.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Safety & Compliance Notice */}
      <div
        style={{
          background: 'var(--bg-subtle)',
          borderLeft: '4px solid var(--primary)',
          padding: '12px 14px',
          borderRadius: '4px',
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          marginBottom: '16px',
          lineHeight: '1.4',
        }}
      >
        <strong>{t.recommendations.expertNotice}:</strong> {t.recommendations.safetyCaution}
      </div>

      {/* Recommendations List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {recommendations.map((rec) => {
          const isRationaleOpen = expandedRationale[rec.id];
          const badgeClass =
            rec.urgency === 'high'
              ? 'badge-red'
              : rec.urgency === 'medium'
              ? 'badge-amber'
              : 'badge-blue';

          const urgencyLabel =
            rec.urgency === 'high'
              ? language === 'en'
                ? 'High Priority'
                : language === 'hi'
                ? 'अति आवश्यक'
                : 'ଜରୁରୀ'
              : rec.urgency === 'medium'
              ? language === 'en'
                ? 'Important'
                : language === 'hi'
                ? 'महत्वपूर्ण'
                : 'ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ'
              : language === 'en'
              ? 'Guidance'
              : language === 'hi'
              ? 'सामान्य सलाह'
              : 'ସାଧାରଣ';

          return (
            <div
              key={rec.id}
              style={{
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                background: '#ffffff',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    background: rec.urgency === 'high' ? '#ffebee' : 'var(--primary-subtle)',
                    color: rec.urgency === 'high' ? '#d32f2f' : 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  {renderIcon(rec.icon)}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {rec.title[language] || rec.title.en}
                    </h4>
                    <span className={`badge ${badgeClass}`}>{urgencyLabel}</span>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '10px' }}>
                    {rec.description[language] || rec.description.en}
                  </p>

                  {/* Safety disclaimer if present */}
                  {rec.safetyDisclaimer && (
                    <div
                      style={{
                        fontSize: '0.8rem',
                        color: '#b71c1c',
                        background: '#ffebee',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        marginBottom: '8px',
                      }}
                    >
                      ⚠️ {rec.safetyDisclaimer[language] || rec.safetyDisclaimer.en}
                    </div>
                  )}

                  {/* Why this appears collapsible button */}
                  <button
                    onClick={() => toggleRationale(rec.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--primary)',
                      background: 'none',
                      border: 'none',
                      padding: '4px 0',
                      cursor: 'pointer',
                    }}
                  >
                    <HelpCircle size={14} />
                    <span>{t.recommendations.whyThisAppears}</span>
                    {isRationaleOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {isRationaleOpen && (
                    <div
                      style={{
                        marginTop: '8px',
                        padding: '10px 12px',
                        background: '#f8fafc',
                        borderLeft: '3px solid #3b82f6',
                        borderRadius: '0 6px 6px 0',
                        fontSize: '0.82rem',
                        color: '#334155',
                        lineHeight: '1.45',
                      }}
                    >
                      {rec.rationale[language] || rec.rationale.en}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
