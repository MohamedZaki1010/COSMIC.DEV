import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@cosmic.dev",
      link: "mailto:hello@cosmic.dev"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "San Francisco, CA",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com" }
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

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass border border-neon-pink/30 rounded-full text-sm font-medium text-neon-pink mb-4">
            Get In Touch
          </span>
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            Let's Create
            <span className="text-gradient block">Something Amazing</span>
          </h2>
          <p className="text-xl text-cosmic-gray max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project and explore the possibilities together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="glass border border-neon-cyan/20 p-8">
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-cosmic-white">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-cosmic-gray">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="glass border-space-elevated focus:border-neon-cyan"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-cosmic-gray">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="glass border-space-elevated focus:border-neon-cyan"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-cosmic-gray">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="glass border-space-elevated focus:border-neon-cyan"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-cosmic-gray">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="glass border-space-elevated focus:border-neon-cyan resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="btn-cosmic w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-cosmic-white">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 glass border border-neon-purple/20 hover:border-neon-purple/50 rounded-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center mr-4 glow-cyan">
                      <item.icon className="w-6 h-6 text-cosmic-white" />
                    </div>
                    <div>
                      <div className="text-sm text-cosmic-gray">
                        {item.label}
                      </div>
                      <div className="font-medium text-cosmic-white group-hover:text-neon-cyan transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-orbitron font-bold text-xl mb-4 text-cosmic-white">
                Follow Me
              </h4>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center border border-neon-cyan/30 hover:border-neon-cyan/80 glow-cyan hover:glow-cyan-md transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-cosmic-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            <Card className="glass border border-neon-green/20 p-6">
              <h4 className="font-orbitron font-bold text-lg mb-2 text-neon-green">
                Let's Collaborate
              </h4>
              <p className="text-cosmic-gray">
                I'm always excited to work on innovative projects that challenge the boundaries 
                of web development. Whether you need a complete web application, 3D interactive 
                experience, or technical consultation, I'm here to help bring your vision to life.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}