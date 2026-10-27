export type Language = 'en' | 'hi' | 'or';

export type FarmingMethod = 
  | 'drip' 
  | 'flood' 
  | 'polyhouse' 
  | 'open_field' 
  | 'organic' 
  | 'conventional';

export interface FarmProfile {
  name: string;
  village: string;
  district: string;
  state: string;
  plantingDate: string; // ISO format: YYYY-MM-DD
  farmingMethod: FarmingMethod;
  variety: string;
  farmSizeAcre: number;
  latitude: number;
  longitude: number;
}

export interface DailyWeather {
  date: string;
  tempMax: number;
  tempMin: number;
  rainSum: number;
  rainProb: number;
  weatherCode: number;
  weatherText: string;
}

export interface HourlyWeather {
  time: string;
  temp: number;
  humidity: number;
  rainProb: number;
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  precipitation: number;
  rainProbability: number;
  windSpeed: number;
  weatherCode: number;
  weatherText: string;
  isDay: boolean;
  dailyForecast: DailyWeather[];
  hourlyForecast: HourlyWeather[];
  lastUpdated: string;
  isLive: boolean;
  cityName: string;
}

export interface CropStageInfo {
  id: string;
  stageNumber: number;
  name: { en: string; hi: string; or: string };
  duration: string;
  startDay: number;
  endDay: number;
  iconName: string;
  summary: { en: string; hi: string; or: string };
  keyActivities: { en: string[]; hi: string[]; or: string[] };
  irrigationAdvice: { en: string; hi: string; or: string };
  nutrientManagement: { en: string; hi: string; or: string };
  pestDiseaseAlert: { en: string; hi: string; or: string };
}

export interface Recommendation {
  id: string;
  category: 'irrigation' | 'disease' | 'weather' | 'crop_stage' | 'soil';
  urgency: 'high' | 'medium' | 'info';
  title: { en: string; hi: string; or: string };
  description: { en: string; hi: string; or: string };
  rationale: { en: string; hi: string; or: string };
  icon: string;
  safetyDisclaimer?: { en: string; hi: string; or: string };
}

export interface DiseaseRisk {
  name: { en: string; hi: string; or: string };
  pathogen: string;
  riskLevel: 'Low' | 'Moderate' | 'High';
  riskScore: number; // 0 to 100
  triggers: { en: string; hi: string; or: string };
  symptoms: { en: string; hi: string; or: string };
  preventativeMeasures: { en: string[]; hi: string[]; or: string[] };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isFallback?: boolean;
}

export interface DistrictLocation {
  name: string;
  state: string;
  latitude: number;
  longitude: number;
}
