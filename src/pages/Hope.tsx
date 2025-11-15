import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mascot from '../components/Mascot';
import StarField from '../components/StarField';

const stories = [
  {
    name: 'Alice Tyson',
    age: '11 عاماً',
    story: 'تم تشخيص أليس بمرض XP في سن الثالثة. رغم حساسيتها للشمس، تنتقل إلى مرحلة المراهقة بشجاعة، وتتعلم إدارة حالتها بينما تسعى لتحقيق أحلامها. قصتها تظهر أنه مع الدعم المناسب، يمكن لأطفال XP أن يكبروا وينموا.',
    source: 'Global Genes',
    icon: '🌟'
  },
  {
    name: 'Oliver Kei',
    age: '7 أعوام',
    story: 'يعيش أوليفر مع XP، حالة تجعل الشمس قاتلة محتملة له. ومع ذلك، يستمتع بالحياة الليلية، ويستكشف العالم تحت النجوم ويلهم الآخرين بفرحه بالحياة. لا يمنعه خطر الإصابة بالسرطان المتزايد من الحلم الكبير.',
    source: 'People Magazine',
    icon: '🚀'
  },
  {
    name: 'Pol',
    age: 'طفل',
    story: 'تم تشخيص بول بمرض XP، مما يسبب حساسية شديدة للأشعة فوق البنفسجية. عائلته والأطباء يساعدونه على التنقل في عالم بدون شمس مباشرة. قصته شهادة على المرونة والتكيف، تثبت أنه حتى في الظلام، يمكن العثور على النور.',
    source: 'Sant Joan de Déu Hospital',
    icon: '💫'
  },
  {
    name: 'Katie',
    age: 'طفلة',
    story: 'كايتي لديها XP منذ ولادتها. والداها أنشأا عالماً مظلماً لها، بنوافذ ملونة وحماية. تعيش حياة مليئة بفرح الليل، تظهر أن التحديات يمكن التغلب عليها بالحب والبراعة.',
    source: 'NBC News',
    icon: '🌙'
  },
  {
    name: 'Zach Orcutt',
    age: 'بالغ',
    story: 'يعيش زاك مع XP، حيث الشمس سامة. حول حالته إلى قوة، بتوعية الآخرين والعيش بشكل كامل في الليل. رحلته تلهم الأمل بأن الاختلاف يمكن أن يؤدي إلى حياة استثنائية.',
    source: 'Men\'s Health',
    icon: '✨'
  },
  {
    name: 'Adelinde',
    age: 'طفلة',
    story: 'أديليندي لديها XP، مما يجعلها عرضة لأقل تعرض للأشعة فوق البنفسجية. مع ملابس واقية ونمط حياة متكيف، تستمتع بالحياة. قصتها تشجع العائلات على البحث عن حلول لحياة مُرضية.',
    source: 'UV Skinz',
    icon: '🦸‍♀️'
  },
  {
    name: 'Amy',
    age: 'بالغة',
    story: 'تم تشخيص إيمي بمرض XP وبحثت عن ملابس UPF 50+ للاستمتاع بالشاطئ بأمان. رحلتها نحو القبول والحرية الليلية تظهر أن العيش مع XP يمكن أن يكون مغامرة مليئة بالاكتشافات.',
    source: 'Waterlust',
    icon: '🌊'
  }
];

const Espoir: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-blue-100 relative overflow-hidden">
      <StarField />
      
      {/* Floating Elements */}
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
      
      <main className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 relative">
            <motion.div
              className="absolute top-1/4 left-1/4 w-8 h-8 bg-purple-300/30 rounded-full blur-md"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-blue-300/30 rounded-full blur-md"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
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
              className="text-6xl mb-6 mx-auto w-fit"
            >
              💫
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-200 mb-4 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-lg">
              قصص الأمل
            </h1>
            <p className="text-xl text-blue-300 drop-shadow-sm max-w-2xl mx-auto">
              اكتشف القصص الملهمة لأشخاص حقيقيين يعيشون مع جفاف الجلد المصطبغ. رحلاتهم تظهر أن الأمل يضيء حتى في الظلام. 🌟
            </p>
          </div>

          <div className="space-y-12">
            {stories.map((story, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="bg-slate-800/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 shadow-lg shadow-blue-400/10"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <motion.span 
                    className="text-4xl"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {story.icon}
                  </motion.span>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-200">{story.name}</h2>
                    <p className="text-blue-300">{story.age}</p>
                  </div>
                </div>
                <p className="text-lg text-blue-200 leading-relaxed mb-4">
                  {story.story}
                </p>
                <p className="text-sm text-blue-400 text-right">
                  المصدر: {story.source}
                </p>
              </motion.section>
            ))}
          </div>

          {/* Closing Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * stories.length, duration: 0.6 }}
            className="mt-12 text-center bg-gradient-to-r from-blue-400/10 to-purple-400/10 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 shadow-xl shadow-purple-400/10"
          >
            <h2 className="text-2xl font-bold text-blue-200 mb-4">الأمل يضيء دائماً</h2>
            <p className="text-lg text-blue-300 leading-relaxed">
              هذه القصص تذكرنا أنه مع الشجاعة والدعم والابتكار، يمكن أن يكون العيش مع XP مغامرة مليئة بالإمكانيات. في لوناريا، نحتفل بكل انتصار تحت القمر. ✨
            </p>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
      <Mascot />
    </div>
  );
};

export default Espoir;