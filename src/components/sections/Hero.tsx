import { motion } from 'framer-motion'
import { TypeAnimation } from './TypeAnimation'
import { personalInfo } from '@/data/portfolio'
import { FiDownload, FiExternalLink, FiGithub, FiLinkedin } from 'react-icons/fi'
import Button from '@/components/ui/Button'
import { useMousePosition } from '@/hooks/useMousePosition'

export const Hero = () => {
  const mousePosition = useMousePosition()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0, -50, 0],
            y: [0, -50, 100, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 50, 100, 0],
            y: [0, 100, -50, -80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-secondary/15 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            x: [0, 50, -100, 80, 0],
            y: [0, -80, 50, -100, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 80, -30, 0],
            y: [0, 60, -80, 100, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-2/3 left-1/4 w-64 h-64 bg-pink/10 rounded-full blur-[80px]"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container-width px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-medium mb-4 flex items-center gap-2 justify-center lg:justify-start"
              >
                <span className="w-8 h-[1px] bg-primary" />
                Hello, I'm
              </motion.p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-sora mb-4">
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              <div className="text-xl md:text-2xl lg:text-3xl font-poppins font-semibold mb-6 h-10">
                <TypeAnimation strings={personalInfo.titles} />
              </div>

              <p className="text-white/60 text-lg max-w-xl mx-auto lg:mx-0 mb-8">
                {personalInfo.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="/resume.pdf"
                download="Krutika_Bhoi_Resume.pdf"
                className="relative inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 overflow-hidden group bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25 px-8 py-4 text-lg"
              >
                <FiDownload className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </a>
              <Button variant="outline" size="lg" icon={<FiExternalLink />}>
                View Projects
              </Button>
              <div className="flex gap-3 items-center">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <FiLinkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Floating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/20"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary glow" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-secondary/20"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-secondary glow" />
              </motion.div>
              
              {/* Profile Image with fallback */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-1">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-gradient-to-br from-primary/30 to-secondary/30">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        const span = document.createElement('span')
                        span.className = 'w-full h-full flex items-center justify-center text-6xl font-bold font-sora gradient-text'
                        span.textContent = 'KB'
                        parent.appendChild(span)
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-3 rounded-full bg-gradient-to-b from-primary to-secondary" />
        </motion.div>
      </motion.div>
    </section>
  )
}