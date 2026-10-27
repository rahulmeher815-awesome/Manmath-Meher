import { WeatherData, DistrictLocation } from '../types';

export const INDIAN_TOMATO_DISTRICTS: DistrictLocation[] = [
  { name: 'Kolar', state: 'Karnataka', latitude: 13.1367, longitude: 78.1292 },
  { name: 'Chittoor (Madanapalle)', state: 'Andhra Pradesh', latitude: 13.556, longitude: 78.503 },
  { name: 'Nashik', state: 'Maharashtra', latitude: 19.9975, longitude: 73.7898 },
  { name: 'Pune (Narayangaon)', state: 'Maharashtra', latitude: 19.117, longitude: 73.978 },
  { name: 'Mayurbhanj', state: 'Odisha', latitude: 21.9284, longitude: 86.7447 },
  { name: 'Dhenkanal', state: 'Odisha', latitude: 20.662, longitude: 85.596 },
  { name: 'Cuttack', state: 'Odisha', latitude: 20.4625, longitude: 85.883 },
  { name: 'Varanasi', state: 'Uttar Pradesh', latitude: 25.3176, longitude: 82.9739 },
  { name: 'Rangareddy', state: 'Telangana', latitude: 17.332, longitude: 78.549 },
  { name: 'Jabalpur', state: 'Madhya Pradesh', latitude: 23.1815, longitude: 79.9864 },
  { name: 'Karnal', state: 'Haryana', latitude: 29.6857, longitude: 76.9905 },
  { name: 'Shivamogga', state: 'Karnataka', latitude: 13.9299, longitude: 75.5681 },
];

export const interpretWmoCode = (code: number): { text: string; icon: string } => {
  switch (code) {
    case 0:
      return { text: 'Clear Sky / Sunny', icon: 'Sun' };
    case 1:
      return { text: 'Mainly Clear', icon: 'Sun' };
    case 2:
      return { text: 'Partly Cloudy', icon: 'CloudSun' };
    case 3:
      return { text: 'Overcast', icon: 'Cloud' };
    case 45:
    case 48:
      return { text: 'Fog / Misty', icon: 'CloudFog' };
    case 51:
    case 53:
    case 55:
      return { text: 'Light Drizzle', icon: 'CloudDrizzle' };
    case 61:
      return { text: 'Slight Rain', icon: 'CloudRain' };
    case 63:
      return { text: 'Moderate Rain', icon: 'CloudRain' };
    case 65:
      return { text: 'Heavy Rain', icon: 'CloudRain' };
    case 80:
    case 81:
    case 82:
      return { text: 'Rain Showers', icon: 'CloudRain' };
    case 95:
    case 96:
    case 99:
      return { text: 'Thunderstorm', icon: 'CloudLightning' };
    default:
      return { text: 'Fair Weather', icon: 'Sun' };
  }
};

export const fetchOpenMeteoWeather = async (
  latitude: number,
  longitude: number,
  cityName: string
): Promise<{ success: boolean; data?: WeatherData; error?: string }> => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&hourly=temperature_2m,relative_humidity_2m,precipitation_probability&timezone=auto&forecast_days=7`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9000);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Weather service returned HTTP ${response.status}`);
    }

    const json = await response.json();
    const current = json.current;
    const daily = json.daily;
    const hourly = json.hourly;

    const weatherCode = current.weather_code ?? 0;
    const { text: weatherText } = interpretWmoCode(weatherCode);

    // Build 7-day forecast
    const dailyForecast = (daily.time || []).map((dateStr: string, idx: number) => {
      const code = daily.weather_code[idx] ?? 0;
      return {
        date: dateStr,
        tempMax: Math.round(daily.temperature_2m_max[idx] ?? 0),
        tempMin: Math.round(daily.temperature_2m_min[idx] ?? 0),
        rainSum: Number((daily.precipitation_sum[idx] ?? 0).toFixed(1)),
        rainProb: Math.round(daily.precipitation_probability_max[idx] ?? 0),
        weatherCode: code,
        weatherText: interpretWmoCode(code).text,
      };
    });

    // Extract next 8 hours for hourly trend
    const currentHourIndex = new Date().getHours();
    const hourlyForecast = (hourly.time || [])
      .slice(currentHourIndex, currentHourIndex + 8)
      .map((timeStr: string, idx: number) => {
        const actualIdx = currentHourIndex + idx;
        const timePart = timeStr.split('T')[1] || timeStr;
        return {
          time: timePart.substring(0, 5),
          temp: Math.round(hourly.temperature_2m[actualIdx] ?? 0),
          humidity: Math.round(hourly.relative_humidity_2m[actualIdx] ?? 0),
          rainProb: Math.round(hourly.precipitation_probability[actualIdx] ?? 0),
        };
      });

    const weatherData: WeatherData = {
      temperature: Math.round(current.temperature_2m ?? 26),
      humidity: Math.round(current.relative_humidity_2m ?? 65),
      precipitation: Number((current.precipitation ?? 0).toFixed(1)),
      rainProbability: dailyForecast[0]?.rainProb ?? 10,
      windSpeed: Math.round(current.wind_speed_10m ?? 8),
      weatherCode,
      weatherText,
      isDay: current.is_day === 1,
      dailyForecast,
      hourlyForecast,
      lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isLive: true,
      cityName,
    };

    return { success: true, data: weatherData };
  } catch (err: any) {
    const errorMsg = err.name === 'AbortError' 
      ? 'Weather request timed out. Please check your internet connection.'
      : err.message || 'Unable to connect to Open-Meteo weather service.';
    
    return { success: false, error: errorMsg };
  }
};
