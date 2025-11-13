import React from 'react';
    import { motion } from 'framer-motion';

    const StarField: React.FC = () => {
      const stars = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4
      }));

      const shootingStars = Array.from({ length: 3 }, (_, i) => ({
        id: i,
        startX: Math.random() * 100,
        startY: Math.random() * 30,
        endX: Math.random() * 100 + 50,
        endY: Math.random() * 30 + 50,
        delay: Math.random() * 10 + 5
      }));

      return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Regular Stars */}
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-gradient-to-r from-blue-200 to-purple-200 rounded-full shadow-sm"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.size * 2}px rgba(168, 169, 255, 0.5)`
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Shooting Stars */}
          {shootingStars.map((star) => (
            <motion.div
              key={`shooting-${star.id}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${star.startX}%`,
                top: `${star.startY}%`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)'
              }}
              animate={{
                x: [0, (star.endX - star.startX) * 10],
                y: [0, (star.endY - star.startY) * 10],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      );
    };

    export default StarField;