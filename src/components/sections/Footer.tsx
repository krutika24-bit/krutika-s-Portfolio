import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiArrowUp } from 'react-icons/fi'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      
      <div className="container-width px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">KB</span>
              </div>
              <span className="text-lg font-sora font-bold gradient-text">{personalInfo.name}</span>
            </div>
            <p className="text-white/40 text-sm">{personalInfo.title} & AI Engineer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-white/40 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <FiGithub size={18} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <FiLinkedin size={18} />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <FiTwitter size={18} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30 flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. Made with
            <FiHeart className="w-3.5 h-3.5 text-pink" />
            using React & Three.js
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-white/30 hover:text-white transition-colors group"
          >
            Back to top
            <FiArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}