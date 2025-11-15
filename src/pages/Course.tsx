import React from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { FileText, Play } from 'lucide-react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import Mascot from '../components/Mascot';
    import StarField from '../components/StarField';
    import coursesData from '../data/courses.json';

    const Course: React.FC = () => {
      const { level, subject } = useParams<{ level: string; subject: string }>();
      
      if (!level || !subject || !coursesData[level as keyof typeof coursesData]) {
        return <div>الدورة غير موجودة</div>;
      }

      const levelData = coursesData[level as keyof typeof coursesData];
      const subjectData = levelData.subjects[subject as keyof typeof levelData.subjects];

      if (!subjectData) {
        return <div>المادة غير موجودة</div>;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-blue-100">
          <StarField />
          <Header />
          
          <main className="relative z-10 container mx-auto px-4 py-12">
            <div className="mb-8">
              <Link 
                to={`/learn/${level}`}
                className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors mb-6"
              >
                <span>←</span>
                <span>العودة إلى المواد</span>
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <div className="text-5xl mb-4">{subjectData.icon}</div>
                <h1 className="text-4xl font-bold text-blue-200 mb-4">
                  {subjectData.title}
                </h1>
                <p className="text-blue-300 text-lg">
                  {levelData.title}
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Lessons List */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-blue-200 mb-6">الدروس المتاحة</h2>
                
                {subjectData.lessons.map((lesson, index) => (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-slate-800/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {lesson.type === 'pdf' ? (
                          <div className="w-12 h-12 bg-red-400/20 rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-red-300" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                            <Play className="w-6 h-6 text-green-300" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-blue-200 mb-2">
                          {lesson.title}
                        </h3>
                        <p className="text-blue-300/70 text-sm mb-4">
                          {lesson.description}
                        </p>
                        
                        <div className="flex space-x-3">
                          {lesson.type === 'pdf' ? (
                            <button className="inline-flex items-center space-x-2 px-4 py-2 bg-red-400/20 text-red-200 rounded-lg hover:bg-red-400/30 transition-colors">
                              <FileText className="w-4 h-4" />
                              <span>قراءة ملف PDF</span>
                            </button>
                          ) : (
                            <button className="inline-flex items-center space-x-2 px-4 py-2 bg-green-400/20 text-green-200 rounded-lg hover:bg-green-400/30 transition-colors">
                              <Play className="w-4 h-4" />
                              <span>مشاهدة الفيديو</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mascot Messages */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="bg-slate-800/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 sticky top-24"
                >
                  <div className="text-center space-y-4">
                    <div className="text-4xl">🦊</div>
                    <h3 className="text-lg font-semibold text-blue-200">
                      رسائل لومة
                    </h3>
                    
                    <div className="space-y-4 text-sm">
                      <div className="bg-blue-400/10 rounded-lg p-3 text-blue-200">
                        🌟 أحسنت! أنت تتقدم بشكل جيد في رحلتك نحو النور.
                      </div>
                      <div className="bg-purple-400/10 rounded-lg p-3 text-purple-200">
                        💫 هل تريد استراحة صغيرة؟ تنفس وانظر إلى القمر.
                      </div>
                      <div className="bg-indigo-400/10 rounded-lg p-3 text-indigo-200">
                        ✨ كل درس تنهيه يقربك من النجوم!
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </main>

          <Footer />
          <Mascot />
        </div>
      );
    };

    export default Course;