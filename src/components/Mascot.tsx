import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const encouragementPhrases = [
  "La lune te regarde, tu fais du beau travail 🌕✨",
  "Bravo ! Tu gagnes ton badge de lumière 💫",
  "🌟 Tu avances bien dans ton parcours !",
  "💫 Tu veux une petite pause ? Respire et regarde la lune.",
  "Sous les étoiles, tout est possible ✨",
  "Continue comme ça, petit héros de la lune 🌙",
  "La nuit est ton amie, explore avec joie ! 🌌",
  "Chaque étoile est une victoire 🌟"
];

const jokes = [
  "Pourquoi la lune est-elle toujours fatiguée ? Parce qu'elle passe ses nuits à briller ! 🌙😴",
  "Qu'est-ce que la lune dit à l'étoile ? 'Tu es ma star préférée !' 🌟😂",
  "Pourquoi les astronautes ne font-ils pas de fêtes sur la lune ? Parce qu'il n'y a pas d'atmosphère ! 🚀🎉",
  "Comment la lune coupe-t-elle ses cheveux ? En eclipse ! ✂️🌒"
];

const facts = [
  "Savais-tu que la lune s'éloigne de la Terre de 3,8 cm chaque année ? 🌍🌕",
  "La lune a des tremblements de lune, comme des tremblements de terre ! 🌙⚡",
  "Il n'y a pas de son sur la lune car il n'y a pas d'air ! 🔇🚀",
  "La lune influence les marées sur Terre grâce à la gravité ! 🌊🌕"
];

const options = [
  "Encourage-moi !",
  "Raconte-moi une blague",
  "Dis-moi un fait sur la lune",
  "Comment ça va ?",
  "Au revoir"
];

const Mascot: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'mascot' | 'user'; text: string }[]>([]);
  const [bounce, setBounce] = useState(false);

  const handleMascotClick = () => {
    if (!isChatOpen) {
      setMessages([{ role: 'mascot', text: "Salut ! Je suis Luma, ton guide lunaire. Comment puis-je t'aider aujourd'hui ? 🌙" }]);
      setIsChatOpen(true);
      setBounce(true);
      setTimeout(() => setBounce(false), 1500);
    } else {
      setIsChatOpen(false);
    }
  };

  const handleOptionClick = (option: string) => {
    setMessages(prev => [...prev, { role: 'user', text: option }]);
    
    let response = '';
    switch (option) {
      case 'Encourage-moi !':
        response = encouragementPhrases[Math.floor(Math.random() * encouragementPhrases.length)];
        break;
      case 'Raconte-moi une blague':
        response = jokes[Math.floor(Math.random() * jokes.length)];
        break;
      case 'Dis-moi un fait sur la lune':
        response = facts[Math.floor(Math.random() * facts.length)];
        break;
      case 'Comment ça va ?':
        response = "Je vais super bien, merci ! Prêt à explorer les étoiles avec toi. Et toi ? 🌟 (Mais comme je suis un renard virtuel, je suis toujours en forme !)";
        break;
      case 'Au revoir':
        response = "À bientôt, petit explorateur ! N'oublie pas de briller sous la lune. 🌕✨";
        setTimeout(() => setIsChatOpen(false), 3000);
        break;
    }
    
    setMessages(prev => [...prev, { role: 'mascot', text: response }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 h-96 bg-gradient-to-br from-slate-800/95 to-slate-700/95 backdrop-blur-md rounded-2xl border border-blue-400/40 shadow-2xl shadow-blue-400/30 overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex justify-between items-center p-3 bg-slate-900/50 border-b border-blue-400/20">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🦊</span>
                <span className="text-blue-200 font-bold">Chat avec Luma</span>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-blue-300 hover:text-blue-100"
              >
                ✕
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-blue-500/50 text-blue-100' 
                      : 'bg-slate-600/50 text-blue-200'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Options */}
            {isChatOpen && messages[messages.length - 1]?.role !== 'user' && messages[messages.length - 1]?.text !== "À bientôt, petit explorateur ! N'oublie pas de briller sous la lune. 🌕✨" && (
              <div className="p-3 bg-slate-900/50 border-t border-blue-400/20 flex flex-wrap justify-center gap-2">
                {options.map((opt, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleOptionClick(opt)}
                    className="px-3 py-1 bg-blue-500/30 rounded-full text-blue-200 text-sm hover:bg-blue-500/50 transition-colors"
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={handleMascotClick}
        className="w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full flex items-center justify-center text-3xl cursor-pointer border-2 border-blue-400/40 shadow-2xl shadow-blue-400/30 backdrop-blur-sm hover:from-blue-400/40 hover:to-purple-400/40 transition-all duration-300"
        animate={bounce ? { y: [0, -10, 0, -10, 0] } : {}}
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 0.8 }
        }}
      >
        🦊
      </motion.button>
    </div>
  );
};

export default Mascot;