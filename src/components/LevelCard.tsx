import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';

    interface LevelCardProps {
      level: string;
      title: string;
      description: string;
      icon: string;
      path: string;
    }

    const LevelCard: React.FC<LevelCardProps> = ({ title, description, icon, path }) => {
      return (
        <motion.div
          whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
          whileTap={{ scale: 0.98 }}
          className="group perspective-1000"
        >
          <Link
            to={path}
            className="block bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-md border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/20 group-hover:bg-gradient-to-br group-hover:from-slate-800/60 group-hover:to-slate-700/60"
          >
            <div className="text-center space-y-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-5xl mb-4 drop-shadow-lg"
              >
                {icon}
              </motion.div>
              <h3 className="text-xl font-bold text-blue-200 group-hover:text-blue-100 transition-colors drop-shadow-sm">
                {title}
              </h3>
              <p className="text-blue-300/70 text-sm leading-relaxed">
                {description}
              </p>
              <div className="pt-2">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 text-blue-200 rounded-full text-sm font-medium group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-300 border border-blue-400/30 shadow-md shadow-blue-400/10"
                >
                  Commencer {icon}
                </motion.span>
              </div>
            </div>
          </Link>
        </motion.div>
      );
    };

    export default LevelCard;