import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { certifications } from '@/data/portfolio'
import { FiAward, FiExternalLink } from 'react-icons/fi'

export const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,245,212,0.05),transparent_70%)]" />
      <div className="container-width relative z-10">
        <SectionHeader 
          title="Certifications" 
          subtitle="Professional certifications and achievements"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 gradient-border group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                <FiAward className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-sora font-bold text-white group-hover:gradient-text transition-all mb-2">
                {cert.title}
              </h3>
              
              <p className="text-white/50 text-sm mb-4">{cert.issuer}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/30">{cert.date}</span>
                <FiExternalLink className="w-4 h-4 text-white/30 group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}