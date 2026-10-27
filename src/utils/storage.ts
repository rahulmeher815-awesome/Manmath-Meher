import { FarmProfile, Language } from '../types';

const STORAGE_KEYS = {
  PROFILE: 'krishisalah_profile_v1',
  LANGUAGE: 'krishisalah_language_v1',
  CHAT_HISTORY: 'krishisalah_chat_history_v1',
};

// Default profile for initial onboarding (Kolar, Karnataka — famous tomato hub)
export const DEFAULT_FARM_PROFILE: FarmProfile = {
  name: 'Ramesh Patel',
  village: 'Vemgal',
  district: 'Kolar',
  state: 'Karnataka',
  plantingDate: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 35 days ago (Flowering stage)
  farmingMethod: 'drip',
  variety: 'Abhinav Hybrid (Determinate)',
  farmSizeAcre: 1.5,
  latitude: 13.1367,
  longitude: 78.1292,
};

export const getSavedProfile = (): FarmProfile => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (!raw) return DEFAULT_FARM_PROFILE;
    return { ...DEFAULT_FARM_PROFILE, ...JSON.parse(raw) };
  } catch (e) {
    console.warn('Failed to load profile from localStorage:', e);
    return DEFAULT_FARM_PROFILE;
  }
};

export const saveProfile = (profile: FarmProfile): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  } catch (e) {
    console.warn('Failed to save profile to localStorage:', e);
  }
};

export const getSavedLanguage = (): Language => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (raw === 'hi' || raw === 'or' || raw === 'en') {
      return raw;
    }
    return 'en';
  } catch {
    return 'en';
  }
};

export const saveLanguage = (lang: Language): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  } catch (e) {
    console.warn('Failed to save language to localStorage:', e);
  }
};
