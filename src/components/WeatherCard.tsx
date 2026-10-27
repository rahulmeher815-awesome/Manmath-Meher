import React, { useState } from 'react';
import { CloudSun, Droplets, Wind, Umbrella, Navigation, RefreshCw, AlertCircle, Sun, Cloud, CloudRain, CloudLightning } from 'lucide-react';
import { WeatherData, Language, DistrictLocation } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { INDIAN_TOMATO_DISTRICTS } from '../services/weatherService';

interface WeatherCardProps {
  language: Language;
  weather: WeatherData | null;
  loading: boolean;
  error?: string | null;
  onRefresh: () => void;
  onSelectDistrict: (district: DistrictLocation) => void;
  onUseGps: () => void;
  currentDistrictName: string;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  language,
  weather,
  loading,
  error,
  onRefresh,
  onSelectDistrict,
  onUseGps,
  currentDistrictName,
}) => {
  const t = TRANSLATIONS[language];
  const [gpsMsg, setGpsMsg] = useState<string | null>(null);

  const handleGpsClick = () => {
    setGpsMsg(null);
    if (!navigator.geolocation) {
      setGpsMsg(t.weather.gpsError);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGpsMsg(t.weather.gpsSuccess);
        onUseGps();
      },
      () => {
        setGpsMsg(t.weather.gpsError);
      },
      { timeout: 7000 }
    );
  };

  const getWeatherIcon = (text: string, isDay: boolean = true) => {
    const l = text.toLowerCase();
    if (l.includes('thunder') || l.includes('lightning')) {
      return <CloudLightning size={42} color="#eab308" />;
    }
    if (l.includes('rain') || l.includes('shower') || l.includes('drizzle')) {
      return <CloudRain size={42} color="#3b82f6" />;
    }
    if (l.includes('cloud') || l.includes('overcast')) {
      return <Cloud size={42} color="#94a3b8" />;
    }
    return <Sun size={42} color="#f59e0b" />;
  };

  return (
    <div className="card">
      {/* Card Header with Location Selector */}
      <div className="card-header" style={{ flexWrap: 'wrap', gap: '12px' }}>
        <div className="card-title-group">
          <div className="card-icon-box" style={{ background: '#e0f2fe', color: '#0284c7' }}>
            <CloudSun size={20} />
          </div>
          <div>
            <h3 className="card-title">{t.weather.title}</h3>
            <p className="card-subtitle">{t.weather.subtitle}</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {/* District Selector */}
          <select
            value={currentDistrictName}
            onChange={(e) => {
              const matched = INDIAN_TOMATO_DISTRICTS.find((d) => d.name === e.target.value);
              if (matched) onSelectDistrict(matched);
            }}
            style={{
              padding: '6px 12px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-subtle)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-main)',
            }}
          >
            {INDIAN_TOMATO_DISTRICTS.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name} ({d.state})
              </option>
            ))}
          </select>

          {/* GPS Button */}
          <button
            onClick={handleGpsClick}
            className="btn btn-secondary"
            style={{ padding: '6px 12px', minHeight: '34px', fontSize: '0.8rem' }}
            title={t.weather.useGps}
          >
            <Navigation size={14} />
            <span className="hidden-mobile">GPS</span>
          </button>

          {/* Refresh Button */}
          <button
            onClick={onRefresh}
            className="btn btn-secondary"
            style={{ padding: '6px 10px', minHeight: '34px' }}
            title={t.weather.refresh}
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      {/* GPS Status Notice */}
      {gpsMsg && (
        <div
          style={{
            fontSize: '0.8rem',
            padding: '6px 12px',
            borderRadius: '6px',
            marginBottom: '12px',
            background: gpsMsg.includes('success') || gpsMsg.includes('सफलतापूर्वक') ? '#e8f5e9' : '#fff3e0',
            color: gpsMsg.includes('success') || gpsMsg.includes('सफलतापूर्वक') ? '#2e7d32' : '#e65100',
          }}
        >
          {gpsMsg}
        </div>
      )}

      {/* Loading State */}
      {loading && !weather && (
        <div style={{ padding: '30px', textAlign: 'center', color: 'var(--text-light)' }}>
          <RefreshCw size={28} className="animate-spin" style={{ margin: '0 auto 10px' }} />
          <p style={{ fontSize: '0.9rem' }}>{t.weather.loading}</p>
        </div>
      )}

      {/* Error / Offline Notice */}
      {error && (
        <div
          style={{
            background: '#fff3e0',
            border: '1px solid #ffe0b2',
            padding: '12px',
            borderRadius: 'var(--radius-md)',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.84rem',
            color: '#b45309',
          }}
        >
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <div>
            <strong>{t.weather.errorNotice}</strong>
            <p style={{ fontSize: '0.76rem', color: '#78350f', marginTop: '2px' }}>{error}</p>
          </div>
        </div>
      )}

      {/* Current Weather Display */}
      {weather && (
        <>
          <div
            style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)',
              border: '1px solid #bbf7d0',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {getWeatherIcon(weather.weatherText, weather.isDay)}
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ fontSize: '2.4rem', fontWeight: 800, color: '#166534' }}>
                      {weather.temperature}°C
                    </span>
                    <span style={{ fontSize: '1rem', fontWeight: 600, color: '#1e3a8a' }}>
                      {weather.weatherText}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#4b5563', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>📍 {weather.cityName}</span>
                    <span>•</span>
                    <span className="badge badge-green" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>
                      {weather.isLive ? t.weather.liveBadge : t.weather.offlineBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Grid of Key Agri-Weather Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', flex: '1 1 240px' }}>
                <div style={{ background: '#ffffff', padding: '10px', borderRadius: 'var(--radius-md)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', color: '#0284c7', fontSize: '0.74rem', fontWeight: 600 }}>
                    <Droplets size={14} />
                    <span>{t.weather.humidity}</span>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                    {weather.humidity}%
                  </div>
                </div>

                <div style={{ background: '#ffffff', padding: '10px', borderRadius: 'var(--radius-md)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', color: '#2563eb', fontSize: '0.74rem', fontWeight: 600 }}>
                    <Umbrella size={14} />
                    <span>{t.weather.rainProb}</span>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                    {weather.rainProbability}%
                  </div>
                </div>

                <div style={{ background: '#ffffff', padding: '10px', borderRadius: 'var(--radius-md)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', color: '#059669', fontSize: '0.74rem', fontWeight: 600 }}>
                    <Wind size={14} />
                    <span>{t.weather.wind}</span>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                    {weather.windSpeed} km/h
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next 8 Hours Trend */}
          {weather.hourlyForecast && weather.hourlyForecast.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '10px' }}>
                ⏱️ {t.weather.hourlyForecast}
              </h4>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  overflowX: 'auto',
                  paddingBottom: '8px',
                  scrollbarWidth: 'thin',
                }}
              >
                {weather.hourlyForecast.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: '0 0 76px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      padding: '8px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600 }}>
                      {h.time}
                    </div>
                    <div style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-main)', margin: '4px 0' }}>
                      {h.temp}°
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                      <Umbrella size={10} />
                      <span>{h.rainProb}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7-Day Agronomic Forecast Table */}
          {weather.dailyForecast && weather.dailyForecast.length > 0 && (
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '10px' }}>
                📅 {t.weather.sevenDayForecast}
              </h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '10px',
                }}
              >
                {weather.dailyForecast.map((day, idx) => {
                  const dayName = new Date(day.date).toLocaleDateString(language === 'hi' ? 'hi-IN' : language === 'or' ? 'or-IN' : 'en-US', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                  });

                  return (
                    <div
                      key={idx}
                      style={{
                        background: idx === 0 ? 'var(--primary-subtle)' : '#ffffff',
                        border: idx === 0 ? '1px solid #a5d6a7' : '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-md)',
                        padding: '12px 10px',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: idx === 0 ? 'var(--primary-hover)' : 'var(--text-muted)' }}>
                        {idx === 0 ? (language === 'hi' ? 'आज' : language === 'or' ? 'ଆଜି' : 'Today') : dayName}
                      </div>

                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: '6px 0 2px' }}>
                        {day.tempMax}° / <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{day.tempMin}°</span>
                      </div>

                      <div style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginBottom: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {day.weatherText}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '0.72rem', color: day.rainProb > 40 ? '#2563eb' : 'var(--text-light)' }}>
                        <Umbrella size={12} />
                        <span>{day.rainProb}% ({day.rainSum}mm)</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
