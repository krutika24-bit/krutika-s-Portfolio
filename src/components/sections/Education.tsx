import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { education } from '@/data/portfolio'
import { FiBook, FiMapPin } from 'react-icons/fi'

export const Education = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="container-width">
        <SectionHeader 
          title="Education" 
          subtitle="My academic background"
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-2xl p-8 gradient-border"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                  <FiBook className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-2xl font-sora font-bold gradient-text">
                        {edu.degree}
                      </h3>
                      <p className="text-white/70 text-lg">{edu.field}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold font-sora gradient-text">{edu.cgpa}</p>
                      <p className="text-white/40 text-sm">CGPA</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-white/50 mb-4">
                    <span className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      {edu.college}
                    </span>
                    <span>{edu.year}</span>
                  </div>

                  <p className="text-white/60">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}