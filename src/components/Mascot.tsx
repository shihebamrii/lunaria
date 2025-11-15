import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const encouragementPhrases = [
  "القمر ينظر إليك، أنت تقوم بعمل رائع 🌕✨",
  "أحسنت! لقد حصلت على شارة النور 💫",
  "🌟 أنت تتقدم بشكل جيد في رحلتك!",
  "💫 هل تريد استراحة صغيرة؟ تنفس وانظر إلى القمر.",
  "تحت النجوم، كل شيء ممكن ✨",
  "استمر هكذا، أيها البطل الصغير للقمر 🌙",
  "الليل صديقك، استكشف بفرح! 🌌",
  "كل نجمة هي انتصار 🌟"
];

const jokes = [
  "لماذا القمر متعب دائماً؟ لأنه يقضي لياليه في الإضاءة! 🌙😴",
  "ماذا قال القمر للنجمة؟ 'أنت نجمتي المفضلة!' 🌟😂",
  "لماذا لا يقيم رواد الفضاء حفلات على القمر؟ لأنه لا يوجد جو! 🚀🎉",
  "كيف يقص القمر شعره؟ بالكسوف! ✂️🌒"
];

const facts = [
  "هل تعلم أن القمر يبتعد عن الأرض بمقدار 3.8 سم كل عام؟ 🌍🌕",
  "القمر لديه زلازل قمرية، مثل زلازل الأرض! 🌙⚡",
  "لا يوجد صوت على القمر لأنه لا يوجد هواء! 🔇🚀",
  "القمر يؤثر على المد والجزر على الأرض بفضل الجاذبية! 🌊🌕"
];

const options = [
  "شجعني!",
  "احكِ لي نكتة",
  "أخبرني بحقيقة عن القمر",
  "كيف حالك؟",
  "وداعاً"
];

const Mascot: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'mascot' | 'user'; text: string }[]>([]);
  const [bounce, setBounce] = useState(false);

  const handleMascotClick = () => {
    if (!isChatOpen) {
      setMessages([{ role: 'mascot', text: "مرحباً! أنا لومة، دليلك القمري. كيف يمكنني مساعدتك اليوم؟ 🌙" }]);
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
      case 'شجعني!':
        response = encouragementPhrases[Math.floor(Math.random() * encouragementPhrases.length)];
        break;
      case 'احكِ لي نكتة':
        response = jokes[Math.floor(Math.random() * jokes.length)];
        break;
      case 'أخبرني بحقيقة عن القمر':
        response = facts[Math.floor(Math.random() * facts.length)];
        break;
      case 'كيف حالك؟':
        response = "أنا بخير رائع، شكراً لك! مستعد لاستكشاف النجوم معك. وأنت؟ 🌟 (لكن بما أنني ثعلب افتراضي، أنا دائماً في حالة جيدة!)";
        break;
      case 'وداعاً':
        response = "إلى اللقاء، أيها المستكشف الصغير! لا تنس أن تضيء تحت القمر. 🌕✨";
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
                <span className="text-blue-200 font-bold">محادثة مع لومة</span>
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
            {isChatOpen && messages[messages.length - 1]?.role !== 'user' && messages[messages.length - 1]?.text !== "إلى اللقاء، أيها المستكشف الصغير! لا تنس أن تضيء تحت القمر. 🌕✨" && (
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
        <img src="/luma.png" alt="Mascot Luma" className="w-10 h-10 object-contain" />
      </motion.button>
    </div>
  );
};

export default Mascot;