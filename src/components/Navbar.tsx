import React from 'react';
import { LayoutDashboard, Calendar, CloudSun, Camera, User, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface NavbarProps {
  language: Language;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenAi: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  activeTab,
  onTabChange,
  onOpenAi,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <nav className="mobile-bottom-nav">
      <button
        className={`mobile-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
        onClick={() => onTabChange('dashboard')}
      >
        <LayoutDashboard size={20} />
        <span>{t.nav.dashboard}</span>
      </button>

      <button
        className={`mobile-nav-item ${activeTab === 'calendar' ? 'active' : ''}`}
        onClick={() => onTabChange('calendar')}
      >
        <Calendar size={20} />
        <span>{t.nav.calendar}</span>
      </button>

      <button
        className={`mobile-nav-item ${activeTab === 'weather' ? 'active' : ''}`}
        onClick={() => onTabChange('weather')}
      >
        <CloudSun size={20} />
        <span>{t.nav.weather}</span>
      </button>

      <button
        className={`mobile-nav-item ${activeTab === 'leafDoctor' ? 'active' : ''}`}
        onClick={() => onTabChange('leafDoctor')}
      >
        <Camera size={20} />
        <span>{t.nav.leafDoctor}</span>
      </button>

      <button
        className={`mobile-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => onTabChange('profile')}
      >
        <User size={20} />
        <span>{t.nav.profile}</span>
      </button>

      <button
        className="mobile-nav-item"
        style={{ color: '#2e7d32' }}
        onClick={onOpenAi}
      >
        <MessageSquare size={20} />
        <span>{t.nav.aiAssistant}</span>
      </button>
    </nav>
  );
};
