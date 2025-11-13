import React, { useState } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Cloud, Sun, Moon } from 'lucide-react';
    import WeatherWidget from './WeatherWidget';

    const Header: React.FC = () => {
      const location = useLocation();
      const [showWeather, setShowWeather] = useState(false);

      const navItems = [
        { path: '/', label: 'Accueil', icon: '🌙' },
        { path: '/about', label: 'À propos', icon: '✨' },
        { path: '/contact', label: 'Contact', icon: '💫' },
        { path: '/hope', label: 'Espoir', icon: '💕' }
      ];

      return (
        <header className="bg-slate-900/90 backdrop-blur-md border-b border-blue-400/30 sticky top-0 z-40 shadow-lg shadow-blue-400/10">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
<Link to="/" className="flex items-center space-x-3 group">
  {/* Logo image */}
  <img
    src="/logo.png"
    alt="Lunaria Logo"
    className="w-10 h-10 object-contain drop-shadow-lg"
  />

  {/* Animated icon / motion div */}
  <motion.div
    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="text-3xl drop-shadow-lg"
  >
    {/* You can put an icon here if you want */}
  </motion.div>

  {/* Text section */}
  <div>
    <h1 className="text-xl font-bold text-blue-200 group-hover:text-blue-100 transition-colors drop-shadow-sm">
      Lunaria
    </h1>
    <p className="text-xs text-blue-300/70">L'école de la Lune</p>
  </div>
</Link>


              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-blue-400/20 text-blue-200 border border-blue-400/30 shadow-md shadow-blue-400/20'
                        : 'text-blue-300 hover:text-blue-200 hover:bg-blue-400/10 hover:shadow-sm hover:shadow-blue-400/10'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                ))}
                
                {/* Weather Button */}
                <motion.button
                  onClick={() => setShowWeather(!showWeather)}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-3 py-2 bg-purple-400/20 text-purple-200 rounded-lg border border-purple-400/30 hover:bg-purple-400/30 hover:border-purple-400/50 transition-all duration-300 shadow-sm shadow-purple-400/10"
                >
                  <Cloud className="w-4 h-4" />
                  <span className="text-sm font-medium">Météo</span>
                </motion.button>
              </div>
            </div>
            
            {/* Weather Widget */}
            {showWeather && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4"
              >
                <WeatherWidget onClose={() => setShowWeather(false)} />
              </motion.div>
            )}
          </nav>
        </header>
      );
    };

    export default Header;