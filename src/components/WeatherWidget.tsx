import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Cloud, CloudRain, X } from 'lucide-react';

interface HourlyData {
  time: string[];
  uv_index: number[];
}

interface WeatherData {
  temperature: number;
  condition: string;
  uvIndex: number;
  isDay: boolean;
  sunrise: string;
  sunset: string;
  uvIndexMax: number;
  hourly: HourlyData;
}

const LAT = 36.8065;
const LON = 10.1815;
const TIMEZONE = 'Africa/Tunis';

const getConditionFromCode = (code: number): string => {
  if (code === 0) return 'clear';
  if ([1, 2, 3].includes(code)) return 'clouds';
  if ([45, 48].includes(code)) return 'fog';
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return 'rain';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'snow';
  if ([95, 96, 99].includes(code)) return 'thunderstorm';
  return 'unknown';
};

const WeatherWidget: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const openMeteoUrl = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,weather_code,is_day&hourly=uv_index&daily=sunrise,sunset,uv_index_max&timezone=${TIMEZONE}`;

        const openMeteoRes = await fetch(openMeteoUrl).then(res => res.json());

        if (!openMeteoRes.current || !openMeteoRes.hourly) {
          throw new Error('Failed to fetch weather data');
        }

        const current = openMeteoRes.current;
        const hourly = openMeteoRes.hourly;
        const daily = openMeteoRes.daily;

        const now = new Date();
        const currentHour = now.getHours();
        const currentUv = hourly.uv_index[currentHour];

        const sunriseTime = new Date(daily.sunrise[0]).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        const sunsetTime = new Date(daily.sunset[0]).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

        setWeather({
          temperature: Math.round(current.temperature_2m),
          condition: getConditionFromCode(current.weather_code),
          uvIndex: Math.round(currentUv),
          isDay: !!current.is_day,
          sunrise: sunriseTime,
          sunset: sunsetTime,
          uvIndexMax: Math.round(daily.uv_index_max[0]),
          hourly: {
            time: hourly.time.slice(0, 24), // Today only
            uv_index: hourly.uv_index.slice(0, 24)
          }
        });
      } catch (err) {
        setError('Impossible de charger la météo. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (condition: string, isDay: boolean) => {
    if (!isDay) return <Moon className="w-8 h-8 text-blue-300" />;
    switch (condition) {
      case 'clear': return <Sun className="w-8 h-8 text-yellow-300" />;
      case 'clouds': 
      case 'fog': return <Cloud className="w-8 h-8 text-gray-300" />;
      case 'rain':
      case 'snow':
      case 'thunderstorm': return <CloudRain className="w-8 h-8 text-blue-400" />;
      default: return <Cloud className="w-8 h-8 text-gray-300" />;
    }
  };

  const isSafeToGoOut = (uvIndex: number) => {
    return uvIndex < 3;
  };

  const getSafePeriods = (hourly: HourlyData) => {
    const periods: string[] = [];
    let start: number | null = null;
    const formatTime = (iso: string) => iso.slice(11, 16);

    for (let i = 0; i < hourly.time.length; i++) {
      const uv = hourly.uv_index[i];
      if (uv < 3) {
        if (start === null) {
          start = i;
        }
      } else {
        if (start !== null) {
          const endIndex = i;
          const startTime = formatTime(hourly.time[start]);
          const endTime = formatTime(hourly.time[endIndex]);
          periods.push(`${startTime} - ${endTime}`);
          start = null;
        }
      }
    }

    if (start !== null) {
      const startTime = formatTime(hourly.time[start]);
      periods.push(`${startTime} - 00:00 (demain)`);
    }

    return periods;
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 text-center"
      >
        <div className="animate-pulse text-blue-300">Chargement de la météo...</div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 text-center text-red-300"
      >
        {error}
      </motion.div>
    );
  }

  if (!weather) return null;

  const safePeriods = getSafePeriods(weather.hourly);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-slate-800/60 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 shadow-lg shadow-blue-400/10"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-blue-200">Météo à Tunis</h3>
        <button
          onClick={onClose}
          className="text-blue-300 hover:text-blue-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex items-center space-x-4 mb-4">
        {getWeatherIcon(weather.condition, weather.isDay)}
        <div>
          <div className="text-2xl font-bold text-blue-200">{weather.temperature}°C</div>
          <div className="text-sm text-blue-300 capitalize">{weather.condition}</div>
        </div>
      </div>
      
      <div className="space-y-2 text-sm mb-4">
        <div className="flex justify-between">
          <span className="text-blue-300">Lever du soleil:</span>
          <span className="text-blue-200">{weather.sunrise}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-blue-300">Coucher du soleil:</span>
          <span className="text-blue-200">{weather.sunset}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-blue-300">Indice UV actuel:</span>
          <span className="text-blue-200">{weather.uvIndex}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-blue-300">Indice UV max aujourd'hui:</span>
          <span className="text-blue-200">{weather.uvIndexMax}</span>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`mt-4 p-3 rounded-lg text-center font-medium ${
          isSafeToGoOut(weather.uvIndex)
            ? 'bg-green-400/20 text-green-200 border border-green-400/30'
            : 'bg-red-400/20 text-red-200 border border-red-400/30'
        }`}
      >
        {isSafeToGoOut(weather.uvIndex)
          ? '🌙 Il est sûr de sortir maintenant ! Profite de ce moment à faible UV.'
          : '☀️ Attention ! L\'indice UV est élevé. Évite de sortir pour le moment.'}
      </motion.div>

      <div className="mt-6">
        <h4 className="text-md font-semibold text-blue-200 mb-2">Périodes sécurisées aujourd'hui (UV &lt; 3):</h4>
        {safePeriods.length > 0 ? (
          <ul className="space-y-1 text-sm text-blue-200">
            {safePeriods.map((period, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">🕒</span> {period}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-blue-300">Aucune période sécurisée pendant la journée aujourd'hui. Privilégie la nuit après le coucher du soleil.</p>
        )}
        <p className="text-xs text-blue-400 mt-2">Note: Les périodes nocturnes (avant lever et après coucher du soleil) sont généralement sécurisées car UV = 0. Porte toujours une protection si nécessaire.</p>
      </div>
    </motion.div>
  );
};

export default WeatherWidget;