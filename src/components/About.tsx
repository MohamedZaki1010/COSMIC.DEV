import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import spaceAvatar from '@/assets/space-avatar.jpg';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "30+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image & Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 mx-auto"
              >
                <img
                  src={spaceAvatar}
                  alt="Space Avatar"
                  className="w-full h-full object-cover rounded-2xl glass border border-neon-cyan/30"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-cosmic opacity-20" />
                <div className="absolute inset-0 rounded-2xl glow-cyan-md" />
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glass text-center p-6">
                    <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-cosmic-gray">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <span className="inline-block px-4 py-2 glass border border-neon-purple/30 rounded-full text-sm font-medium text-neon-purple mb-4">
                About Me
              </span>
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
                Navigating the
                <span className="text-gradient block">Digital Universe</span>
              </h2>
            </div>

            <div className="space-y-4 text-lg text-cosmic-gray leading-relaxed">
              <p>
                Hi, I’m Mohamed Zaki, a passionate Software Engineer and problem solver. I started programming at the age of 9 and since then I’ve built over 30 websites using HTML, CSS, JavaScript, and Python, along with working on projects in Java, Kotlin, and React.
I’m always curious to learn new technologies and improve my skills, whether it’s web development, cybersecurity, or AI. I enjoy building creative projects from scratch and turning ideas into real solutions.
Currently, I’m focusing on full-stack development and exploring advanced frameworks to create powerful and user-friendly applications. My goal is to keep growing, contribute to impactful projects, and one day become a world-class engineer making a difference.
              </p>
              
              <p>
                With expertise spanning from modern React applications to complex 
                backend architectures, I bring ideas to life through 
                <span className="text-neon-purple"> clean code</span> and 
                <span className="text-neon-pink"> innovative solutions</span>.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring the latest technologies, 
                contributing to open-source projects, or stargazing and dreaming up 
                the next big thing in tech.
              </p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              variants={containerVariants}
            >
              {['React', 'TypeScript', 'Node.js', 'Three.js', 'Python', 'AWS', 'Kotlin', 'Java'].map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 glass border border-neon-cyan/30 rounded-full text-sm font-medium text-neon-cyan"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}