import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mascot from '../components/Mascot';
import StarField from '../components/StarField';

const stories = [
  {
    name: 'Alice Tyson',
    age: '11 ans',
    story: 'Alice a été diagnostiquée avec XP à l\'âge de 3 ans. Malgré sa sensibilité au soleil, elle transitionne vers l\'adolescence avec courage, en apprenant à gérer sa condition tout en poursuivant ses rêves. Son histoire montre que avec le soutien approprié, les enfants avec XP peuvent grandir et s\'épanouir.',
    source: 'Global Genes',
    icon: '🌟'
  },
  {
    name: 'Oliver Kei',
    age: '7 ans',
    story: 'Oliver vit avec XP, une condition qui rend le soleil potentiellement mortel pour lui. Pourtant, il profite de la vie nocturne, explore le monde sous les étoiles et inspire les autres avec sa joie de vivre. Son risque accru de cancer ne l\'empêche pas de rêver grand.',
    source: 'People Magazine',
    icon: '🚀'
  },
  {
    name: 'Pol',
    age: 'Enfant',
    story: 'Pol a été diagnostiqué avec XP, causant une extrême sensibilité aux UV. Sa famille et les médecins l\'aident à naviguer dans un monde sans soleil direct. Son histoire est un témoignage de résilience et d\'adaptation, prouvant que même dans l\'obscurité, on peut trouver la lumière.',
    source: 'Sant Joan de Déu Hospital',
    icon: '💫'
  },
  {
    name: 'Katie',
    age: 'Enfant',
    story: 'Katie a XP depuis sa naissance. Ses parents ont créé un monde ombragé pour elle, avec des fenêtres teintées et des protections. Elle vit une vie pleine de joie nocturne, montrant que les défis peuvent être surmontés avec amour et ingéniosité.',
    source: 'NBC News',
    icon: '🌙'
  },
  {
    name: 'Zach Orcutt',
    age: 'Adulte',
    story: 'Zach vit avec XP, où le soleil est toxique. Il a transformé sa condition en force, en sensibilisant les autres et en vivant pleinement la nuit. Son parcours inspire l\'espoir que la différence peut mener à une vie extraordinaire.',
    source: 'Men\'s Health',
    icon: '✨'
  },
  {
    name: 'Adelinde',
    age: 'Enfant',
    story: 'Adelinde a XP, la rendant vulnérable aux moindres expositions UV. Avec des vêtements protecteurs et un mode de vie adapté, elle profite de la vie. Son histoire encourage les familles à chercher des solutions pour une vie épanouie.',
    source: 'UV Skinz',
    icon: '🦸‍♀️'
  },
  {
    name: 'Amy',
    age: 'Adulte',
    story: 'Amy a été diagnostiquée avec XP et a cherché des vêtements UPF 50+ pour profiter de la plage en sécurité. Son voyage vers l\'acceptation et la liberté nocturne montre que vivre avec XP peut être une aventure pleine de découvertes.',
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
              Histoires d'Espoir
            </h1>
            <p className="text-xl text-blue-300 drop-shadow-sm max-w-2xl mx-auto">
              Découvrez les histoires inspirantes de personnes réelles vivant avec le Xeroderma Pigmentosum. Leurs parcours montrent que l'espoir brille même dans l'obscurité. 🌟
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
                  Source: {story.source}
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
            <h2 className="text-2xl font-bold text-blue-200 mb-4">L'Espoir Brille Toujours</h2>
            <p className="text-lg text-blue-300 leading-relaxed">
              Ces histoires nous rappellent que avec du courage, du soutien et de l'innovation, vivre avec XP peut être une aventure pleine de possibilités. À Lunaria, nous célébrons chaque victoire sous la lune. ✨
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