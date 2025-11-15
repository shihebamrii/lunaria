import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mascot from '../components/Mascot';
import StarField from '../components/StarField';
import LevelCard from '../components/LevelCard';

const Home: React.FC = () => {
  const levels = [
    {
      level: 'primaire',
      title: 'الابتدائي',
      description: 'للمستكشفين الصغار من 6 إلى 11 عاماً الذين يكتشفون العالم تحت النجوم. تعلم أساسيات العلوم والرياضيات واللغات مع ألعاب قمرية!',
      icon: '🌙',
      path: '/learn/primaire',
      color: 'from-blue-600 to-indigo-700',
      features: ['ألعاب تفاعلية', 'قصص نجمية', 'اختبارات يومية']
    },
    {
      level: 'college',
      title: 'المتوسط',
      description: 'للمغامرين الشباب من 12 إلى 15 عاماً الذين يعمقون معرفتهم. استكشف فيزياء النجوم وتاريخ الأبراج والمزيد!',
      icon: '🌓',
      path: '/learn/college',
      color: 'from-purple-600 to-blue-700',
      features: ['مشاريع إبداعية', 'تجارب افتراضية', 'تحديات تعاونية']
    },
    {
      level: 'lycee',
      title: 'الثانوي',
      description: 'للطلاب من 16 إلى 18 عاماً الذين يستعدون للإضاءة بآلاف الأضواء. انغمس في مواضيع متقدمة مثل الفيزياء الفلكية والفلسفة الكونية.',
      icon: '🌕',
      path: '/learn/lycee',
      color: 'from-indigo-600 to-purple-700',
      features: ['دروس متعمقة', 'محاكاة متقدمة', 'التحضير للامتحانات']
    }
  ];

  const features = [
    {
      icon: '✨',
      title: 'تعلم ممتع',
      description: 'دروس تتحول إلى مغامرات فضائية لجعل التعليم مثيراً.'
    },
    {
      icon: '🌟',
      title: 'تقدم شخصي',
      description: 'متابعة فردية مع شارات نجمية ومستويات للفتح.'
    },
    {
      icon: '🚀',
      title: 'مجتمع قمري',
      description: 'انضم إلى مستكشفين آخرين للمناقشات والتحديات الجماعية.'
    }
  ];

  const handleScrollToLevels = () => {
    const element = document.getElementById('levels-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      /> {/* Comet-like animation */}
      <motion.div
        className="absolute bottom-10 right-40 w-16 h-16 bg-yellow-300/20 rounded-full blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      /> {/* Pulsing star */}

      <Header />
      
      <main className="relative z-10">
        {/* Enhanced Hero Section with Orbiting Elements */}
        <section className="container mx-auto px-4 py-20 text-center relative">
          <motion.div
            className="absolute top-1/4 left-1/4 w-8 h-8 bg-purple-300/30 rounded-full blur-md"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          /> {/* Orbiting planet 1 */}
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-blue-300/30 rounded-full blur-md"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          /> {/* Orbiting planet 2 */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
<motion.div
  animate={{ 
    rotate: [0, 5, -5, 0],
    scale: [1, 1.05, 1],
    filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
  }}
  transition={{ 
    duration: 6, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }}
  className="mb-8 drop-shadow-2xl mx-auto w-fit"
>
  <img
    src="/logo.png"
    alt="Lunaria Logo"
    className="w-52 h-52 "
  />
</motion.div>


            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-lg">
                مرحباً بك في لوناريا
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed drop-shadow-sm">
                مدرسة القمر حيث يمكن لكل طفل أن يتعلم كيف يضيء مثل النجوم. انضم إلينا لمغامرة تعليمية ليلية!
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 max-w-2xl mx-auto shadow-2xl shadow-blue-400/20"
            >
<div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
  <motion.div 
    animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="text-3xl flex-shrink-0"
  >
    <img 
      src="/luma-hey.png" 
      alt="Mascot Luma" 
      className="w-24 h-auto md:w-36 md:h-auto object-contain" 
    />
  </motion.div>
  <div className="text-center md:text-left">
    <p className="text-blue-200 text-base md:text-lg leading-relaxed">
      مرحباً، أيها المستكشف الصغير! أنا لومة، دليلك القمري. 🌕✨ معاً، سنكتشف عوالم مذهلة ونتعلم الكثير من الأشياء المثيرة. هل أنت مستعد للمغامرة؟
    </p>
  </div>
</div>
            </motion.div>

            {/* Call to Action Button with Scroll Functionality */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-bold text-lg shadow-lg"
              onClick={handleScrollToLevels}
            >
              ابدأ المغامرة 🚀
            </motion.button>
          </motion.div>
        </section>

        {/* Enhanced Levels Section with ID for Scrolling */}
        <section id="levels-section" className="container mx-auto px-4 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-4xl font-bold text-blue-200 mb-12 text-center drop-shadow-lg"
          >
            اختر مستواك النجمي
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {levels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
              >
                <LevelCard {...level} />
                <ul className="mt-4 space-y-2 text-sm text-blue-300">
                  {level.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.2 + fIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="mr-2">⭐</span> {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* New Features Section */}
        <section className="container mx-auto px-4 py-16  from-transparent to-slate-800/30">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-4xl font-bold text-blue-200 mb-12 text-center drop-shadow-lg"
          >
            لماذا تختار لوناريا؟
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 shadow-xl shadow-blue-400/20 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-blue-100 mb-2">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enhanced About Lunaria Section with Animation */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-blue-200 mb-6 drop-shadow-lg">عن لوناريا</h2>
            <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-md border border-blue-400/20 rounded-2xl p-8 shadow-xl shadow-blue-400/10">
              <p className="text-lg text-blue-200 leading-relaxed mb-4">
                لوناريا هي مدرسة افتراضية أُنشئت لأطفال القمر. 
                مستوحاة من سحر الليل، نحول التعلم إلى رحلة كونية حيث كل درس هو نجمة يجب غزوها.
              </p>
              <p className="text-lg text-blue-200 leading-relaxed mb-4">
                هنا، الليل هو لحظة الاكتشاف والحلم والابتكار. ✨ مع أدوات تفاعلية ومجتمع داعم، نساعد كل طفل على الوصول إلى إمكاناته النجمية.
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                انضم إلينا وأضئ مستقبلك!
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
      <Mascot />
    </div>
  );
};

export default Home;