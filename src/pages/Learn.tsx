import React from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import Mascot from '../components/Mascot';
    import StarField from '../components/StarField';
    import coursesData from '../data/courses.json';

    const Learn: React.FC = () => {
      const { level } = useParams<{ level: string }>();
      
      if (!level || !coursesData[level as keyof typeof coursesData]) {
        return <div>المستوى غير موجود</div>;
      }

      const levelData = coursesData[level as keyof typeof coursesData];
      const subjects = Object.entries(levelData.subjects);

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-blue-100">
          <StarField />
          <Header />
          
          <main className="relative z-10 container mx-auto px-4 py-12">
            <div className="mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors mb-6"
              >
                <span>🌕</span>
                <span>العودة إلى القمر</span>
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl font-bold text-blue-200 mb-4">
                  {levelData.title}
                </h1>
                <p className="text-blue-300 text-lg">
                  اختر مادة لتبدأ رحلتك التعليمية ✨
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {subjects.map(([subjectKey, subject], index) => (
                <motion.div
                  key={subjectKey}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Link
                    to={`/learn/${level}/${subjectKey}`}
                    className="block bg-slate-800/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10"
                  >
                    <div className="text-center space-y-4">
                      <div className="text-4xl mb-4">{subject.icon}</div>
                      <h3 className="text-xl font-bold text-blue-200 group-hover:text-blue-100 transition-colors">
                        {subject.title}
                      </h3>
                      <p className="text-blue-300/70 text-sm">
                        {subject.lessons.length} {subject.lessons.length === 1 ? 'درس متاح' : subject.lessons.length === 2 ? 'درسان متاحان' : 'دروس متاحة'}
                      </p>
                      <div className="pt-2">
                        <span className="inline-flex items-center px-4 py-2 bg-blue-400/20 text-blue-200 rounded-full text-sm font-medium group-hover:bg-blue-400/30 transition-colors">
                          استكشف 🌙
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </main>

          <Footer />
          <Mascot />
        </div>
      );
    };

    export default Learn;