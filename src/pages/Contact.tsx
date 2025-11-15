import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { toast } from 'react-toastify';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import Mascot from '../components/Mascot';
    import StarField from '../components/StarField';

    const Contact: React.FC = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        toast.success('شكراً لرسالتك! سنرد عليك قريباً. 🌙');
        setFormData({ name: '', email: '', message: '' });
      };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-blue-100">
          <StarField />
          <Header />
          
          <main className="relative z-10 container mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-12">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-6xl mb-6"
                >
                  💫
                </motion.div>
                <h1 className="text-4xl font-bold text-blue-200 mb-4">
                  اتصل بنا
                </h1>
                <p className="text-xl text-blue-300">
                  نحن هنا لمساعدتك تحت النجوم
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-slate-800/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-blue-200 font-medium mb-2">
                      الاسم
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-400/30 rounded-lg text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all"
                      placeholder="اسمك"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-blue-200 font-medium mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-400/30 rounded-lg text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all"
                      placeholder="بريدك@مثال.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-blue-200 font-medium mb-2">
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-400/30 rounded-lg text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all resize-none"
                      placeholder="رسالتك..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-200 font-medium py-3 px-6 rounded-lg hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                  >
                    إرسال الرسالة ✨
                  </motion.button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 text-center"
              >
                <p className="text-blue-300 mb-4">
                  يمكنك أيضاً التواصل معنا عبر:
                </p>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-blue-200 hover:text-blue-100 transition-colors"
                >
                  <span>🌙</span>
                  <span>الجمعية التونسية لأطفال القمر</span>
                </a>
              </motion.div>
            </motion.div>
          </main>

          <Footer />
          <Mascot />
        </div>
      );
    };

    export default Contact;