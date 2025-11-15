import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ClassroomStudent: React.FC = () => {
  // Participant link (students must "knock" to enter)
  const participantUrl = "https://lunaria.whereby.com/lunaria-class4c0cbeb9-d484-4990-a487-49e7f214e107";

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-blue-100 relative overflow-hidden flex flex-col">
      <Header />
      
      {/* Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-b border-blue-400/40 px-4 py-3 shadow-lg shadow-blue-400/20"
      >
        <div className="container mx-auto flex items-center justify-center space-x-2">
          <span className="text-2xl">🎓</span>
          <p className="text-blue-200 font-semibold text-sm md:text-base">
            Vous êtes en mode Élève (Accès invité)
          </p>
        </div>
      </motion.div>

      {/* Iframe Container */}
      <div className="flex-1 relative w-full" style={{ minHeight: 0 }}>
        <iframe
          src={participantUrl}
          allow="camera; microphone; fullscreen; speaker; display-capture; compute-pressure"
          className="absolute inset-0 w-full h-full border-none"
          title="Lunaria Classroom - Student"
        />
      </div>

      <Footer />
    </div>
  );
};

export default ClassroomStudent;

