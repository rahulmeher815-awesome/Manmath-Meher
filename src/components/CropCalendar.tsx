import React, { useState } from 'react';
import { Calendar, Sprout, Footprints, Leaf, Flower2, Apple, ShoppingBag, CheckCircle2, ChevronRight, AlertCircle, Clock } from 'lucide-react';
import { Language, FarmProfile } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { TOMATO_STAGES, calculateCropProgress } from '../utils/cropStages';

interface CropCalendarProps {
  language: Language;
  profile: FarmProfile;
  onNavigateToProfile: () => void;
}

export const CropCalendar: React.FC<CropCalendarProps> = ({
  language,
  profile,
  onNavigateToProfile,
}) => {
  const t = TRANSLATIONS[language];
  const { dat, currentStage, stageProgressPercent, daysRemainingInStage } = calculateCropProgress(profile.plantingDate);
  const [selectedStageId, setSelectedStageId] = useState<string>(currentStage.id);

  const activeStageDetails = TOMATO_STAGES.find((s) => s.id === selectedStageId) || currentStage;

  const getStageIcon = (iconName: string, size = 20) => {
    switch (iconName) {
      case 'Sprout':
        return <Sprout size={size} />;
      case 'Footprints':
        return <Footprints size={size} />;
      case 'Leaf':
        return <Leaf size={size} />;
      case 'Flower2':
        return <Flower2 size={size} />;
      case 'Apple':
        return <Apple size={size} />;
      case 'ShoppingBag':
      default:
        return <ShoppingBag size={size} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header Overview Card */}
      <div className="card">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-icon-box">
              <Calendar size={20} />
            </div>
            <div>
              <h2 className="card-title">{t.calendar.title}</h2>
              <p className="card-subtitle">{t.calendar.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onNavigateToProfile}
            className="btn btn-secondary"
            style={{ fontSize: '0.8rem', padding: '6px 12px', minHeight: '34px' }}
          >
            <Clock size={14} />
            <span>{t.calendar.editDate}</span>
          </button>
        </div>

        {/* Current Active Status Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
            border: '1px solid #a5d6a7',
            borderRadius: 'var(--radius-md)',
            padding: '16px 20px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge badge-green" style={{ background: '#2e7d32', color: '#ffffff' }}>
                {t.calendar.currentStageBadge}
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1b5e20' }}>
                {t.dashboard.datBadge}: <strong>{dat >= 0 ? `${dat} Days` : `Nursery (${Math.abs(dat)}d to transplant)`}</strong>
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1b5e20' }}>
              {currentStage.name[language] || currentStage.name.en}
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#2e7d32', marginTop: '2px' }}>
              {currentStage.summary[language] || currentStage.summary.en}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.8rem', color: '#2e7d32', fontWeight: 600 }}>
              {stageProgressPercent}% {language === 'hi' ? 'पूर्ण' : language === 'or' ? 'ସମ୍ପନ୍ନ' : 'Complete'}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#388e3c' }}>
              {daysRemainingInStage > 0
                ? `${daysRemainingInStage} ${language === 'hi' ? 'दिन शेष' : language === 'or' ? 'ଦିନ ବାକି' : 'days remaining'}`
                : language === 'hi'
                ? 'अगला चरण निकट'
                : 'Transitioning'}
            </div>
          </div>
        </div>

        {/* Variety Disclaimer */}
        <div
          style={{
            background: 'var(--bg-subtle)',
            padding: '10px 14px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.8rem',
            color: 'var(--text-light)',
            display: 'flex',
            gap: '8px',
            alignItems: 'flex-start',
          }}
        >
          <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px', color: '#64748b' }} />
          <span>{t.calendar.disclaimer}</span>
        </div>
      </div>

      {/* Interactive Horizontal Stage Timeline */}
      <div className="card">
        <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '14px', color: 'var(--text-main)' }}>
          {t.calendar.stageTimeline}
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '10px',
          }}
        >
          {TOMATO_STAGES.map((stg) => {
            const isCurrent = stg.id === currentStage.id;
            const isSelected = stg.id === selectedStageId;
            const isPast = dat > stg.endDay;

            return (
              <div
                key={stg.id}
                onClick={() => setSelectedStageId(stg.id)}
                style={{
                  border: isSelected
                    ? '2px solid var(--primary)'
                    : isCurrent
                    ? '2px dashed #4caf50'
                    : '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 10px',
                  background: isSelected
                    ? 'var(--primary-subtle)'
                    : isCurrent
                    ? '#f1f8e9'
                    : '#ffffff',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                }}
              >
                {isPast && (
                  <div style={{ position: 'absolute', top: '6px', right: '6px', color: '#2e7d32' }}>
                    <CheckCircle2 size={14} />
                  </div>
                )}
                {isCurrent && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#2e7d32',
                      color: '#ffffff',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      padding: '1px 6px',
                      borderRadius: '10px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    NOW
                  </div>
                )}

                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-full)',
                    background: isSelected ? 'var(--primary)' : isCurrent ? '#c8e6c9' : 'var(--bg-subtle)',
                    color: isSelected ? '#ffffff' : 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 8px',
                  }}
                >
                  {getStageIcon(stg.iconName, 18)}
                </div>

                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: '1.2' }}>
                  {stg.name[language] || stg.name.en}
                </div>

                <div style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '4px' }}>
                  {stg.duration}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Stage Agronomy Guide */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--primary-subtle)',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {getStageIcon(activeStageDetails.iconName, 22)}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>
                Stage {activeStageDetails.stageNumber} of 6 • {activeStageDetails.duration}
              </span>
              {activeStageDetails.id === currentStage.id && (
                <span className="badge badge-amber" style={{ fontSize: '0.7rem' }}>
                  {t.calendar.currentStageBadge}
                </span>
              )}
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>
              {activeStageDetails.name[language] || activeStageDetails.name.en}
            </h3>
          </div>
        </div>

        {/* 4 Pillars of Agronomy for this Stage */}
        <div className="grid-2">
          {/* Key Activities */}
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
            }}
          >
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>
              🌱 {t.calendar.keyActivities}
            </h4>
            <ul style={{ paddingLeft: '18px', fontSize: '0.85rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {(activeStageDetails.keyActivities[language] || activeStageDetails.keyActivities.en).map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </div>

          {/* Irrigation Care */}
          <div
            style={{
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
            }}
          >
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#166534', marginBottom: '8px' }}>
              💧 {t.calendar.irrigationCare}
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#15803d', lineHeight: '1.5' }}>
              {activeStageDetails.irrigationAdvice[language] || activeStageDetails.irrigationAdvice.en}
            </p>
          </div>

          {/* Nutrient Plan */}
          <div
            style={{
              background: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
            }}
          >
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#92400e', marginBottom: '8px' }}>
              🧪 {t.calendar.nutrientPlan}
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#b45309', lineHeight: '1.5' }}>
              {activeStageDetails.nutrientManagement[language] || activeStageDetails.nutrientManagement.en}
            </p>
          </div>

          {/* Pest & Disease Scouting */}
          <div
            style={{
              background: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
            }}
          >
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#991b1b', marginBottom: '8px' }}>
              🐛 {t.calendar.pestScout}
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#b91c1c', lineHeight: '1.5' }}>
              {activeStageDetails.pestDiseaseAlert[language] || activeStageDetails.pestDiseaseAlert.en}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
