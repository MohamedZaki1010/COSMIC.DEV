import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-space-elevated"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-cosmic-gray text-sm">
            © 2024 Cosmic Developer. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-sm text-cosmic-gray">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-neon-pink animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-neon-cyan" />
            <span>by a space enthusiast</span>
          </div>
          
          <div className="text-xs text-cosmic-muted">
            Powered by cosmic energy ✨
          </div>
        </div>
      </div>
    </motion.footer>
  );
}