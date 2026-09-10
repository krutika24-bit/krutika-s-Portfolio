import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { experience } from '@/data/portfolio'
import { FiCalendar, FiBriefcase } from 'react-icons/fi'

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.05),transparent_70%)]" />
      <div className="container-width relative z-10">
        <SectionHeader 
          title="Experience" 
          subtitle="My professional journey"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow">
                  <FiBriefcase className="w-4 h-4 text-white" />
                </div>

                <div className="glass rounded-2xl p-6 gradient-border">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-sora font-bold gradient-text">
                        {exp.role}
                      </h3>
                      <p className="text-white/60">{exp.company}</p>
                    </div>
                    <span className="flex items-center gap-2 text-sm text-white/40 bg-white/5 px-3 py-1 rounded-full">
                      <FiCalendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-white/60 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}