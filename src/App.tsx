import React, { useState, useEffect } from 'react';
import { Language, FarmProfile as FarmProfileType, WeatherData, DistrictLocation } from './types';
import { TRANSLATIONS } from './i18n/translations';
import { getSavedProfile, getSavedLanguage, saveLanguage } from './utils/storage';
import { fetchOpenMeteoWeather, INDIAN_TOMATO_DISTRICTS } from './services/weatherService';
import { generateRecommendations } from './services/recommendationEngine';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { CropCalendar } from './components/CropCalendar';
import { WeatherCard } from './components/WeatherCard';
import { DiseaseRiskWidget } from './components/DiseaseRiskWidget';
import { RecommendationsCard } from './components/RecommendationsCard';
import { FarmProfile } from './components/FarmProfile';
import { LeafDiagnosis } from './components/LeafDiagnosis';
import { AiAssistant } from './components/AiAssistant';
import { X } from 'lucide-react';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(getSavedLanguage());
  const [profile, setProfile] = useState<FarmProfileType>(getSavedProfile());
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState<boolean>(true);
  const [weatherError, setWeatherError] = useState<string | null>(null);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);

  const t = TRANSLATIONS[language];

  // Fetch weather when profile coordinates change
  const loadWeather = async (lat = profile.latitude, lon = profile.longitude, cityName = profile.district) => {
    setWeatherLoading(true);
    setWeatherError(null);
    const res = await fetchOpenMeteoWeather(lat, lon, cityName);
    if (res.success && res.data) {
      setWeather(res.data);
    } else {
      setWeatherError(res.error || 'Failed to load weather');
    }
    setWeatherLoading(false);
  };

  useEffect(() => {
    loadWeather(profile.latitude, profile.longitude, profile.district);
  }, [profile.latitude, profile.longitude, profile.district]);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    saveLanguage(newLang);
  };

  const handleDistrictChange = (district: DistrictLocation) => {
    const updated = {
      ...profile,
      district: district.name,
      state: district.state,
      latitude: district.latitude,
      longitude: district.longitude,
    };
    setProfile(updated);
  };

  const handleUseGps = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = parseFloat(pos.coords.latitude.toFixed(4));
          const lon = parseFloat(pos.coords.longitude.toFixed(4));
          const updated = {
            ...profile,
            district: `${profile.district} (GPS)`,
            latitude: lat,
            longitude: lon,
          };
          setProfile(updated);
          loadWeather(lat, lon, updated.district);
        },
        () => {
          // ignore or handled by child
        }
      );
    }
  };

  // Compute dynamic rule-based recommendations & disease risk meters
  const { recommendations, diseaseRisks } = generateRecommendations(weather, profile);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top App Header */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        profile={profile}
        onOpenAi={() => setIsAiModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="container" style={{ paddingTop: '20px', paddingBottom: '30px', flex: 1 }}>
        {activeTab === 'dashboard' && (
          <Dashboard
            language={language}
            profile={profile}
            weather={weather}
            recommendations={recommendations}
            diseaseRisks={diseaseRisks}
            onNavigateTab={setActiveTab}
            onOpenAi={() => setIsAiModalOpen(true)}
          />
        )}

        {activeTab === 'calendar' && (
          <CropCalendar
            language={language}
            profile={profile}
            onNavigateToProfile={() => setActiveTab('profile')}
          />
        )}

        {activeTab === 'weather' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <WeatherCard
              language={language}
              weather={weather}
              loading={weatherLoading}
              error={weatherError}
              onRefresh={() => loadWeather()}
              onSelectDistrict={handleDistrictChange}
              onUseGps={handleUseGps}
              currentDistrictName={profile.district.replace(' (GPS)', '')}
            />
            <RecommendationsCard language={language} recommendations={recommendations} />
            <DiseaseRiskWidget language={language} diseaseRisks={diseaseRisks} />
          </div>
        )}

        {activeTab === 'leafDoctor' && <LeafDiagnosis language={language} />}

        {activeTab === 'profile' && (
          <FarmProfile
            language={language}
            profile={profile}
            onProfileUpdated={(updated) => setProfile(updated)}
          />
        )}
      </main>

      {/* AI Assistant Modal Popup */}
      {isAiModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(3px)',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsAiModalOpen(false);
          }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '720px' }}>
            <button
              onClick={() => setIsAiModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 70,
                background: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <X size={18} />
            </button>
            <AiAssistant language={language} />
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar */}
      <Navbar
        language={language}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenAi={() => setIsAiModalOpen(true)}
      />

      {/* Footer */}
      <footer
        style={{
          background: '#ffffff',
          borderTop: '1px solid var(--border-color)',
          padding: '24px 16px',
          marginTop: 'auto',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'var(--text-light)',
        }}
      >
        <div className="container">
          <p style={{ fontWeight: 600, color: 'var(--text-muted)' }}>
            🌱 {t.appName} — {t.tagline}
          </p>
          <p style={{ marginTop: '4px', fontSize: '0.74rem' }}>{t.footer.disclaimer}</p>
          <p style={{ marginTop: '2px', fontSize: '0.72rem' }}>
            {t.footer.openMeteoCredit} • {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
