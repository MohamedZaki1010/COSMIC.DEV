import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import projectMockup from '@/assets/project-mockup.jpg';

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Quantum Dashboard",
      description: "A futuristic data visualization platform with real-time analytics and 3D interactive charts.",
      image: projectMockup,
      tags: ["React", "Three.js", "TypeScript", "WebGL"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Neural Network Visualizer",
      description: "Interactive machine learning model visualization with real-time training data display.",
      image: projectMockup,
      tags: ["Python", "TensorFlow", "D3.js", "WebSocket"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Cosmic Commerce",
      description: "E-commerce platform with immersive 3D product previews and AR integration.",
      image: projectMockup,
      tags: ["Next.js", "Stripe", "Three.js", "AR.js"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Space Explorer VR",
      description: "Virtual reality experience for exploring distant galaxies and celestial objects.",
      image: projectMockup,
      tags: ["WebXR", "A-Frame", "JavaScript", "GLSL"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass border border-neon-green/30 rounded-full text-sm font-medium text-neon-green mb-4">
            Portfolio
          </span>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            Featured
            <span className="text-gradient block">Projects</span>
          </h2>
          <p className="text-xl text-cosmic-gray max-w-2xl mx-auto">
            Exploring the intersection of creativity and technology through innovative digital solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Card className="glass overflow-hidden h-full border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-void/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project Actions Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <Button
                        size="sm"
                        className="btn-cosmic"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="btn-neon"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 glass border border-neon-pink/30 rounded-full text-xs font-medium text-neon-pink">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-orbitron font-bold text-xl mb-3 text-cosmic-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-cosmic-gray mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-space-elevated text-xs font-medium text-cosmic-gray rounded-full border border-space-elevated"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-neon"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}