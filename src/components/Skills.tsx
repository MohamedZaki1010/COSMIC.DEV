import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🚀",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Three.js", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend Development", 
      icon: "⚡",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "AWS", level: 80 }
      ]
    },
    {
      title: "Creative & Design",
      icon: "🎨", 
      skills: [
        { name: "UI/UX Design", level: 87 },
        { name: "3D Modeling", level: 75 },
        { name: "Motion Graphics", level: 78 },
        { name: "WebGL/GLSL", level: 72 }
      ]
    }
  ];

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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, delay: 0.5 }
    })
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass border border-neon-blue/30 rounded-full text-sm font-medium text-neon-blue mb-4">
            Skills & Expertise
          </span>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            Technical
            <span className="text-gradient block">Arsenal</span>
          </h2>
          <p className="text-xl text-cosmic-gray max-w-2xl mx-auto">
            Continuously expanding my knowledge across the ever-evolving landscape of technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Card className="glass border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 p-6 h-full">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-orbitron font-bold text-xl text-cosmic-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-cosmic-gray font-medium">
                          {skill.name}
                        </span>
                        <span className="text-neon-cyan text-sm font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-2 bg-space-elevated rounded-full overflow-hidden">
                        <motion.div
                          variants={skillBarVariants}
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full glow-cyan"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-orbitron font-bold text-2xl text-center mb-12 text-gradient">
            Journey Through Time
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-cyan to-neon-purple" />
              
              {[
                { year: "2023", title: "Senior Full-Stack Developer", desc: "Leading development of cutting-edge web applications" },
                { year: "2022", title: "3D Web Specialist", desc: "Specialized in Three.js and immersive web experiences" },
                { year: "2021", title: "Frontend Developer", desc: "Mastered modern React ecosystem and state management" },
                { year: "2020", title: "Started Journey", desc: "First lines of code and countless nights of learning" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="glass p-4 border border-neon-purple/30">
                      <div className="font-orbitron font-bold text-neon-cyan mb-1">
                        {item.year}
                      </div>
                      <h4 className="font-semibold text-cosmic-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-cosmic-gray text-sm">
                        {item.desc}
                      </p>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-purple rounded-full border-2 border-space-void glow-purple" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}