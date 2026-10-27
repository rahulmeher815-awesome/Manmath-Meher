import React from 'react';
import { Sprout, MapPin, Calendar, MessageSquareText } from 'lucide-react';
import { Language, FarmProfile } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { calculateCropProgress } from '../utils/cropStages';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  profile: FarmProfile;
  onOpenAi: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  activeTab,
  onTabChange,
  profile,
  onOpenAi,
}) => {
  const t = TRANSLATIONS[language];
  const { dat, currentStage } = calculateCropProgress(profile.plantingDate);

  return (
    <header className="app-header">
      <div className="container header-inner">
        {/* Brand Logo & Name */}
        <div className="brand-wrapper" onClick={() => onTabChange('dashboard')}>
          <div className="brand-logo" title="KrishiSalah">
            {/* Tomato & Sprout SVG Logo */}
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="55" r="38" fill="#E53935" />
              <path d="M50 20 C42 12 30 18 36 26 C42 34 50 25 50 25" fill="#2E7D32" />
              <path d="M50 20 C58 12 70 18 64 26 C58 34 50 25 50 25" fill="#2E7D32" />
              <path d="M50 15 L50 25" stroke="#1B5E20" strokeWidth="5" strokeLinecap="round" />
              <ellipse cx="42" cy="48" rx="8" ry="12" fill="#EF5350" opacity="0.6" />
            </svg>
          </div>
          <div className="brand-text-col">
            <span className="brand-title">
              {t.appName}
            </span>
            <span className="brand-tagline">
              {language === 'en' ? 'Tomato Crop Advisor' : language === 'hi' ? 'टमाटर फसल सलाहकार' : 'ଟମାଟୋ ଫସଲ ପରାମର୍ଶ'}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="desktop-nav">
          <button
            className={`nav-tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => onTabChange('dashboard')}
          >
            {t.nav.dashboard}
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'calendar' ? 'active' : ''}`}
            onClick={() => onTabChange('calendar')}
          >
            {t.nav.calendar}
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'weather' ? 'active' : ''}`}
            onClick={() => onTabChange('weather')}
          >
            {t.nav.weather}
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'leafDoctor' ? 'active' : ''}`}
            onClick={() => onTabChange('leafDoctor')}
          >
            {t.nav.leafDoctor}
          </button>
          <button
            className={`nav-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => onTabChange('profile')}
          >
            {t.nav.profile}
          </button>
          <button
            className="btn btn-primary"
            style={{ padding: '6px 14px', fontSize: '0.84rem', minHeight: '36px' }}
            onClick={onOpenAi}
          >
            <MessageSquareText size={16} />
            <span>{t.nav.aiAssistant}</span>
          </button>
        </nav>

        {/* Header Actions: Language Switcher & Quick Location Pill */}
        <div className="header-actions">
          <div className="lang-selector" title="Select Language / भाषा चुनें / ଭାଷା ବାଛନ୍ତୁ">
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => onLanguageChange('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn ${language === 'hi' ? 'active' : ''}`}
              onClick={() => onLanguageChange('hi')}
            >
              हिं
            </button>
            <button
              className={`lang-btn ${language === 'or' ? 'active' : ''}`}
              onClick={() => onLanguageChange('or')}
            >
              ଓଡ଼ି
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
