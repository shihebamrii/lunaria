import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mascot from '../components/Mascot';
import StarField from '../components/StarField';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Stella Nocturne',
      role: 'Fondatrice & Directrice',
      description: 'Experte en éducation inclusive avec 20 ans d\'expérience en pédagogie nocturne.',
      icon: '👩‍🔬'
    },
    {
      name: 'Prof. Orion Lune',
      role: 'Chef Pédagogique',
      description: 'Spécialiste en sciences stellaires et apprentissage interactif pour enfants sensibles.',
      icon: '👨‍🏫'
    },
    {
      name: 'Luna Spark',
      role: 'Conceptrice de Contenu',
      description: 'Créatrice de jeux éducatifs magiques inspirés par la lune et les étoiles.',
      icon: '🎨'
    }
  ];

  const approaches = [
    {
      icon: '🚀',
      title: 'Apprentissage Adaptatif',
      description: 'Cours personnalisés qui s\'adaptent au rythme et aux besoins de chaque enfant.'
    },
    {
      icon: '🌌',
      title: 'Thèmes Cosmiques',
      description: 'Leçons inspirées de l\'univers pour stimuler l\'imagination et la curiosité.'
    },
    {
      icon: '🤝',
      title: 'Communauté Soutenante',
      description: 'Interactions sécurisées avec d\'autres enfants et mentors pour un soutien mutuel.'
    },
    {
      icon: '📱',
      title: 'Technologie Accessible',
      description: 'Plateforme intuitive avec mode sombre et outils d\'accessibilité avancés.'
    }
  ];

  const testimonials = [
    {
      quote: 'Lunaria a transformé les nuits de mon enfant en moments magiques d\'apprentissage !',
      author: 'Parent d\'un élève primaire',
      icon: '⭐'
    },
    {
      quote: 'Enfin une école qui comprend nos besoins et célèbre notre différence.',
      author: 'Élève du collège',
      icon: '🌟'
    },
    {
      quote: 'Luma est comme un ami qui nous guide vers les étoiles du savoir.',
      author: 'Parent d\'un lycéen',
      icon: '✨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-blue-100 relative overflow-hidden">
      <StarField />
      
      {/* Enhanced Floating Elements */}
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
            /> {/* Orbiting element 1 */}
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-blue-300/30 rounded-full blur-md"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            /> {/* Orbiting element 2 */}
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
              🌕
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-200 mb-4 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-lg">
              À propos de Lunaria
            </h1>
            <p className="text-xl text-blue-300 drop-shadow-sm">
              L'école de la Lune pour les enfants extraordinaires. Un havre nocturne d'apprentissage et de rêves.
            </p>
          </div>

          <div className="space-y-12">
            {/* Notre Mission - Enhanced */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 shadow-lg shadow-blue-400/10"
            >
              <h2 className="text-2xl font-bold text-blue-200 mb-6 flex items-center">
                <motion.span 
                  className="mr-3 text-3xl"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✨
                </motion.span>
                Notre Mission
              </h2>
              <p className="text-lg text-blue-200 leading-relaxed mb-4">
                Les enfants de la lune sont des héros qui apprennent sans soleil. 
                Lunaria leur offre une école protégée, pleine de rêve et de savoir. 
                Nous créons un environnement d'apprentissage sûr et magique où chaque enfant 
                peut explorer, découvrir et grandir à son propre rythme.
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                Notre objectif est d\'offrir une éducation de qualité, accessible 24/7, 
                adaptée aux horaires nocturnes, avec un focus sur le bien-être émotionnel et physique.
              </p>
            </motion.section>

            {/* Les Enfants de la Lune - Enhanced */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 shadow-lg shadow-blue-400/10"
            >
              <h2 className="text-2xl font-bold text-blue-200 mb-6 flex items-center">
                <motion.span 
                  className="mr-3 text-3xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  🌙
                </motion.span>
                Les Enfants de la Lune
              </h2>
              <p className="text-lg text-blue-200 leading-relaxed mb-4">
                Certains enfants extraordinaires ont une condition appelée Xeroderma Pigmentosum (XP). 
                Cela signifie que leur peau est très sensible aux rayons du soleil, alors ils vivent 
                principalement la nuit, évitant toute exposition à la lumière UV.
              </p>
              <p className="text-lg text-blue-200 leading-relaxed mb-4">
                Ces enfants courageux transforment la nuit en leur terrain de jeu et d'apprentissage. 
                Ils nous montrent que la différence peut être une force et que l'on peut briller 
                même dans l'obscurité. 🌟
              </p>
              <ul className="list-disc list-inside text-blue-300 space-y-2">
                <li>Plus de 1 000 enfants dans le monde sont touchés par XP.</li>
                <li>Notre programme aide à maintenir un rythme scolaire normal malgré les contraintes.</li>
                <li>Focus sur la santé mentale et l\'inclusion sociale.</li>
              </ul>
            </motion.section>

            {/* New Section: Notre Approche Pédagogique */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 shadow-lg shadow-blue-400/10"
            >
              <h2 className="text-2xl font-bold text-blue-200 mb-6 flex items-center justify-center">
                <span className="mr-3 text-3xl">🪐</span>
                Notre Approche Pédagogique
              </h2>
              <p className="text-lg text-blue-200 leading-relaxed mb-6 text-center">
                À Lunaria, nous combinons innovation technologique et pédagogie bienveillante pour un apprentissage optimal.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {approaches.map((approach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="bg-gradient-to-r from-blue-800/20 to-purple-800/20 rounded-xl p-4 text-center"
                  >
                    <div className="text-4xl mb-3">{approach.icon}</div>
                    <h3 className="text-xl font-bold text-blue-100 mb-2">{approach.title}</h3>
                    <p className="text-blue-200">{approach.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Message d'Espoir - Enhanced */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 text-center shadow-xl shadow-purple-400/10"
            >
              <h2 className="text-2xl font-bold text-blue-200 mb-6 flex items-center justify-center">
                <motion.span 
                  className="mr-3 text-3xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  💫
                </motion.span>
                Message d'Espoir
              </h2>
              <p className="text-xl text-blue-200 leading-relaxed font-medium mb-4">
                "Sous la lune, chacun peut briller à sa manière."
              </p>
              <p className="text-lg text-blue-300 leading-relaxed">
                Chaque enfant a un potentiel unique et précieux. 
                À Lunaria, nous célébrons cette diversité et offrons à chacun 
                les outils pour réaliser ses rêves, peu importe les défis. Rejoignez-nous pour illuminer l'avenir !
              </p>
            </motion.section>

            {/* New Section: L'Équipe */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 shadow-lg shadow-blue-400/10"
            >
              <h2 className="text-2xl font-bold text-blue-200 mb-6 flex items-center justify-center">
                <span className="mr-3 text-3xl">👥</span>
                Notre Équipe Dédiée
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="bg-gradient-to-b from-slate-700/50 to-slate-600/50 rounded-xl p-4 text-center"
                  >
                    <div className="text-5xl mb-3">{member.icon}</div>
                    <h3 className="text-xl font-bold text-blue-100 mb-1">{member.name}</h3>
                    <p className="text-blue-300 font-medium mb-2">{member.role}</p>
                    <p className="text-blue-200 text-sm">{member.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Mascot Section - Enhanced */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 shadow-lg shadow-blue-400/10"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <motion.div 
                  className="text-4xl"
                  animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img src="/luma.png" alt="Mascot Luma" className="w-10 h-10 object-contain" />
                </motion.div>
                <h2 className="text-2xl font-bold text-blue-200">
                  Rencontre Luma
                </h2>
              </div>
              <p className="text-lg text-blue-200 leading-relaxed text-center mb-4">
                Luma est notre guide bienveillant, un petit renard lunaire qui accompagne 
                chaque enfant dans son voyage d'apprentissage. Toujours encourageant et plein 
                de sagesse, Luma est là pour motiver, rassurer et célébrer chaque progrès. ✨
              </p>
              <p className="text-lg text-blue-200 leading-relaxed text-center">
                Avec Luma, chaque leçon devient une aventure excitante vers les étoiles du savoir !
              </p>
            </motion.section>

            {/* New Section: Témoignages */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="bg-gradient-to-r from-purple-400/10 to-blue-400/10 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 shadow-xl shadow-purple-400/10"
            >
              <h2 className="text-2xl font-bold text-blue-200 mb-6 flex items-center justify-center">
                <span className="mr-3 text-3xl">💬</span>
                Témoignages
              </h2>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.blockquote
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + index * 0.2, duration: 0.5 }}
                    className="bg-slate-800/30 rounded-lg p-4"
                  >
                    <p className="text-lg text-blue-200 leading-relaxed mb-2">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-blue-300 text-right flex items-center justify-end">
                      <span className="mr-2">{testimonial.icon}</span>
                      - {testimonial.author}
                    </p>
                  </motion.blockquote>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-bold text-lg shadow-lg"
              onClick={() => window.location.href = '/'} // Link back to home or registration
            >
              Rejoindre Lunaria 🌟
            </motion.button>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
      <Mascot />
    </div>
  );
};

export default About;