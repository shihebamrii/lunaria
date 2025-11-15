import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Mascot from '../../components/Mascot';
import StarField from '../../components/StarField';

const ClassroomIndex: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-blue-100 relative overflow-hidden">
      <StarField />
      
      {/* Enhanced Floating Elements: Moon Glows, Stars, and a Comet */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 bg-yellow-200 rounded-full blur-sm"
        animate={{
          x: [0, 1000, 0],
          y: [0, 500, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 5
        }}
      />
      <motion.div
        className="absolute bottom-10 right-40 w-16 h-16 bg-yellow-300/20 rounded-full blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <Header />
      
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          {/* Main Card */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-md border border-blue-400/30 rounded-2xl p-8 md:p-12 shadow-2xl shadow-blue-400/20">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-lg"
            >
              انضم إلى الفصل القمري
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-blue-200 text-center mb-8 leading-relaxed"
            >
              اختر دورك للدخول إلى الفصل الدراسي.
            </motion.p>

            {/* Buttons Container */}
            <div className="flex flex-col md:flex-row gap-6 mt-10">
              {/* Teacher Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(234, 179, 8, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/classroom/host')}
                className="flex-1 px-8 py-6 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-2 border-yellow-400/40 rounded-2xl text-blue-200 font-bold text-lg md:text-xl shadow-lg shadow-yellow-400/20 hover:from-yellow-500/30 hover:to-amber-500/30 hover:border-yellow-400/60 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <span className="text-4xl">👨‍🏫</span>
                  <span>أنا معلم (مضيف)</span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>

              {/* Student Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/classroom/student')}
                className="flex-1 px-8 py-6 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-2 border-blue-400/40 rounded-2xl text-blue-200 font-bold text-lg md:text-xl shadow-lg shadow-blue-400/20 hover:from-blue-500/30 hover:to-indigo-500/30 hover:border-blue-400/60 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <span className="text-4xl">🎓</span>
                  <span>أنا طالب (مشارك)</span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-400/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
      <Mascot />
    </div>
  );
};

export default ClassroomIndex;

