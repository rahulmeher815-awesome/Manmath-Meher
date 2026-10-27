import React from 'react';
import {
  MapPin,
  Calendar,
  CloudSun,
  Droplets,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Camera,
  ChevronRight,
  Sun,
  TrendingUp,
  ShieldAlert,
  Edit2
} from 'lucide-react';
import { Language, FarmProfile, WeatherData, Recommendation, DiseaseRisk } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { calculateCropProgress } from '../utils/cropStages';

interface DashboardProps {
  language: Language;
  profile: FarmProfile;
  weather: WeatherData | null;
  recommendations: Recommendation[];
  diseaseRisks: DiseaseRisk[];
  onNavigateTab: (tab: string) => void;
  onOpenAi: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  language,
  profile,
  weather,
  recommendations,
  diseaseRisks,
  onNavigateTab,
  onOpenAi,
}) => {
  const t = TRANSLATIONS[language];
  const { dat, currentStage, stageProgressPercent, daysRemainingInStage } = calculateCropProgress(profile.plantingDate);

  const topIrrigationRec = recommendations.find((r) => r.category === 'irrigation');
  const highPriorityRecs = recommendations.filter((r) => r.urgency === 'high');
  const highestDiseaseRisk = diseaseRisks.reduce((max, item) => (item.riskScore > max.riskScore ? item : max), diseaseRisks[0]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 1. Welcome & Location Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px 20px',
          color: '#ffffff',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <div style={{ fontSize: '0.82rem', color: '#a5d6a7', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            {t.dashboard.welcome}
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '2px', letterSpacing: '-0.02em' }}>
            {profile.name ? `${profile.name}` : t.dashboard.farmer}
          </h1>
          <div
            onClick={() => onNavigateTab('profile')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              marginTop: '8px',
              cursor: 'pointer',
              backdropFilter: 'blur(4px)',
            }}
          >
            <MapPin size={14} />
            <span>
              {profile.village}, {profile.district}, {profile.state}
            </span>
            <Edit2 size={12} style={{ opacity: 0.7 }} />
          </div>
        </div>

        {/* Variety & Land summary badge */}
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.78rem', color: '#c8e6c9' }}>
            {profile.variety || 'Tomato Hybrid'}
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>
            {profile.farmSizeAcre} {t.profile.acre} • {profile.farmingMethod.toUpperCase()}
          </div>
        </div>
      </div>

      {/* 2. Top Grid: Crop Stage & Weather Quick Snippet */}
      <div className="grid-2">
        {/* Crop Stage Card */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span className="badge badge-green">
                <Calendar size={12} />
                <span>{t.dashboard.currentStage}</span>
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-hover)' }}>
                {dat >= 0 ? `${dat} DAT` : `Nursery (${Math.abs(dat)}d left)`}
              </span>
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
              {currentStage.name[language] || currentStage.name.en}
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.45', marginBottom: '14px' }}>
              {currentStage.summary[language] || currentStage.summary.en}
            </p>

            {/* Progress Bar */}
            <div style={{ marginBottom: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)', marginBottom: '4px' }}>
                <span>{t.dashboard.stageProgress}</span>
                <span>{stageProgressPercent}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${stageProgressPercent}%` }} />
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('calendar')}
            className="btn btn-secondary"
            style={{ width: '100%', marginTop: '14px', fontSize: '0.85rem', padding: '8px' }}
          >
            <span>{t.dashboard.viewFullCalendar}</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Weather Quick Snippet Card */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span className="badge badge-blue">
                <CloudSun size={12} />
                <span>{weather?.isLive ? t.weather.liveBadge : t.weather.currentWeather}</span>
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                📍 {weather?.cityName || profile.district}
              </span>
            </div>

            {weather ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#166534' }}>
                    {weather.temperature}°C
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e3a8a' }}>
                    {weather.weatherText}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div style={{ background: 'var(--bg-subtle)', padding: '6px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-light)' }}>{t.weather.humidity}</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>{weather.humidity}%</div>
                  </div>
                  <div style={{ background: 'var(--bg-subtle)', padding: '6px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-light)' }}>{t.weather.rainProb}</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>{weather.rainProbability}%</div>
                  </div>
                  <div style={{ background: 'var(--bg-subtle)', padding: '6px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-light)' }}>{t.weather.wind}</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>{weather.windSpeed} km/h</div>
                  </div>
                </div>
              </div>
            ) : (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                {t.weather.loading}
              </p>
            )}
          </div>

          <button
            onClick={() => onNavigateTab('weather')}
            className="btn btn-secondary"
            style={{ width: '100%', marginTop: '14px', fontSize: '0.85rem', padding: '8px' }}
          >
            <span>{t.dashboard.openWeather}</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* 3. Quick Action Hub */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '12px',
        }}
      >
        <button
          onClick={() => onNavigateTab('calendar')}
          style={{
            background: '#ffffff',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 10px',
            textAlign: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)',
            transition: 'all 0.15s ease',
          }}
        >
          <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-md)', background: '#e8f5e9', color: '#2e7d32', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px' }}>
            <Calendar size={18} />
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', display: 'block' }}>
            {t.nav.calendar}
          </span>
        </button>

        <button
          onClick={() => onNavigateTab('weather')}
          style={{
            background: '#ffffff',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 10px',
            textAlign: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-md)', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px' }}>
            <CloudSun size={18} />
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', display: 'block' }}>
            {t.nav.weather}
          </span>
        </button>

        <button
          onClick={() => onNavigateTab('leafDoctor')}
          style={{
            background: '#ffffff',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 10px',
            textAlign: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-md)', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px' }}>
            <Camera size={18} />
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', display: 'block' }}>
            {t.nav.leafDoctor}
          </span>
        </button>

        <button
          onClick={onOpenAi}
          style={{
            background: '#ffffff',
            border: '1px solid #d8b4fe',
            borderRadius: 'var(--radius-md)',
            padding: '14px 10px',
            textAlign: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-md)', background: '#f3e8ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px' }}>
            <Sparkles size={18} />
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6b21a8', display: 'block' }}>
            {t.nav.aiAssistant}
          </span>
        </button>
      </div>

      {/* 4. Weather-Smart Irrigation Highlight */}
      {topIrrigationRec && (
        <div
          className="card"
          style={{
            borderLeft: '5px solid #2563eb',
            background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-md)',
                background: '#dbeafe',
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Droplets size={22} />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="badge badge-blue">{t.dashboard.irrigationCardTitle}</span>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {topIrrigationRec.title[language] || topIrrigationRec.title.en}
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', margin: '6px 0 8px' }}>
                {topIrrigationRec.description[language] || topIrrigationRec.description.en}
              </p>
              <div style={{ fontSize: '0.78rem', color: '#1e40af', background: '#eff6ff', padding: '6px 10px', borderRadius: '6px' }}>
                💡 {topIrrigationRec.rationale[language] || topIrrigationRec.rationale.en}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Disease Risk Alert Snippet */}
      {highestDiseaseRisk && (
        <div
          className="card"
          style={{
            borderLeft: `5px solid ${highestDiseaseRisk.riskLevel === 'High' ? '#ef4444' : '#f59e0b'}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-md)',
                background: highestDiseaseRisk.riskLevel === 'High' ? '#fee2e2' : '#fef3c7',
                color: highestDiseaseRisk.riskLevel === 'High' ? '#b91c1c' : '#b45309',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ShieldAlert size={22} />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-light)' }}>
                  {t.dashboard.diseaseRiskTitle}
                </span>
                <span className={`badge ${highestDiseaseRisk.riskLevel === 'High' ? 'badge-red' : 'badge-amber'}`}>
                  {highestDiseaseRisk.riskLevel} Risk ({highestDiseaseRisk.riskScore}%)
                </span>
              </div>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {highestDiseaseRisk.name[language] || highestDiseaseRisk.name.en}
              </h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: '4px 0 8px' }}>
                {highestDiseaseRisk.triggers[language] || highestDiseaseRisk.triggers.en}
              </p>

              <button
                onClick={() => onNavigateTab('weather')}
                style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <span>View all 4 disease risk evaluations</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. High Priority Stage Recommendations preview */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Lightbulb size={20} color="#2e7d32" />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {t.dashboard.todayAdvice}
            </h3>
          </div>
          <button
            onClick={() => onNavigateTab('calendar')}
            style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {t.dashboard.viewAllRecs} →
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {recommendations.slice(0, 3).map((rec) => (
            <div
              key={rec.id}
              style={{
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: rec.urgency === 'high' ? '#ef4444' : '#2e7d32', marginTop: '6px', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  {rec.title[language] || rec.title.en}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {rec.description[language] || rec.description.en}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
