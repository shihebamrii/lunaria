import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ClassroomHost: React.FC = () => {
  // Host link with roomKey for teacher permissions
  const hostUrl = "https://lunaria.whereby.com/lunaria-class4c0cbeb9-d484-4990-a487-49e7f214e107?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWV0aW5nSWQiOiIxMTUxOTQwODgiLCJyb29tUmVmZXJlbmNlIjp7InJvb21OYW1lIjoiL2x1bmFyaWEtY2xhc3M0YzBjYmViOS1kNDg0LTQ5OTAtYTQ4Ny00OWU3ZjIxNGUxMDciLCJvcmdhbml6YXRpb25JZCI6IjMyOTA0OSJ9LCJpc3MiOiJodHRwczovL2FjY291bnRzLnNydi53aGVyZWJ5LmNvbSIsImlhdCI6MTc2MzIwNTUxNCwicm9vbUtleVR5cGUiOiJtZWV0aW5nSG9zdCJ9.Dkct573eOHCNQiX0L0WpSXD_bcQXlsW1_7HJ5G34ZDc";

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-blue-100 relative overflow-hidden flex flex-col">
      <Header />
      
      {/* Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-b border-yellow-400/40 px-4 py-3 shadow-lg shadow-yellow-400/20"
      >
        <div className="container mx-auto flex items-center justify-center space-x-2">
          <span className="text-2xl">👨‍🏫</span>
          <p className="text-yellow-200 font-semibold text-sm md:text-base">
            Vous êtes en mode Enseignant (Hôte)
          </p>
        </div>
      </motion.div>

      {/* Iframe Container */}
      <div className="flex-1 relative w-full" style={{ minHeight: 0 }}>
        <iframe
          src={hostUrl}
          allow="camera; microphone; fullscreen; speaker; display-capture; compute-pressure"
          className="absolute inset-0 w-full h-full border-none"
          title="Lunaria Classroom - Host"
        />
      </div>

      <Footer />
    </div>
  );
};

export default ClassroomHost;

