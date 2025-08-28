import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import spaceHero from '@/assets/space-hero.jpg';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={spaceHero} 
          alt="Deep space background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-space-void/50 via-transparent to-space-void/80" />
      </div>

      {/* Animated particles overlay */}
      <div className="absolute inset-0 z-1">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 glass border border-neon-cyan/30 rounded-full text-sm font-medium text-neon-cyan glow-cyan mb-4">
            Welcome to the Future
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-orbitron font-bold text-6xl md:text-8xl lg:text-9xl mb-6 text-gradient"
        >
          Mohamed Zaki
          <br />
          DEVELOPER
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-cosmic-gray mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting extraordinary digital experiences through the intersection of 
          <span className="text-neon-cyan"> creative design</span> and 
          <span className="text-neon-purple"> cutting-edge technology</span>.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="btn-cosmic px-8 py-6 text-lg font-medium"
            onClick={scrollToPortfolio}
          >
            Explore My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-neon px-8 py-6 text-lg font-medium"
            onClick={scrollToContact}
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 glow-cyan" />
            </div>
          </motion.div>
          <p className="text-sm text-cosmic-muted mt-2">Scroll to discover</p>
        </motion.div>
      </motion.div>
    </section>
  );
}