import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { personalInfo, aboutStats } from '@/data/portfolio'
import { FiDownload, FiAward, FiCode, FiBriefcase, FiBook } from 'react-icons/fi'
import Button from '@/components/ui/Button'

const statIcons = [FiAward, FiCode, FiBook, FiBriefcase]

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-width">
        <SectionHeader 
          title="About Me" 
          subtitle="Passionate about turning data into actionable insights"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse-slow" />
              <div className="absolute inset-2 rounded-2xl glass flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <img 
                    src="/kittu professional image.png" 
                    alt="Krutika Bhoi - Data Analyst"
                    className="w-72 h-72 mx-auto mb-6 rounded-xl object-cover border-4 border-gradient-to-br from-primary to-secondary"
                  />
                  <h3 className="text-2xl font-sora font-bold gradient-text mb-2">{personalInfo.name}</h3>
                  <p className="text-white/60">{personalInfo.title}</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2"
              >
                <p className="text-sm font-medium gradient-text">AI Enthusiast</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2"
              >
                <p className="text-sm font-medium gradient-text">Data Driven</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {personalInfo.summary}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {aboutStats.map((stat, index) => {
                const Icon = statIcons[index]
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all"
                  >
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold font-sora gradient-text">{stat.value}</p>
                    <p className="text-white/50 text-sm">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}