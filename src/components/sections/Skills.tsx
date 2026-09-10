import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { skills } from '@/data/portfolio'
import { 
  SiPython, SiTensorflow, SiPandas, SiScikitlearn,
  SiReact, SiGit, SiJupyter, SiDocker, SiNodedotjs,
  SiTypescript, SiJavascript
} from 'react-icons/si'
import { TbBrandNpm } from 'react-icons/tb'
import { HiOutlineDatabase } from 'react-icons/hi'

const skillIcons: Record<string, React.ReactNode> = {
  'Python': <SiPython />,
  'TensorFlow': <SiTensorflow />,
  'Scikit-learn': <SiScikitlearn />,
  'Pandas': <SiPandas />,
  'Power BI': <SiJavascript />,
  'Tableau': <SiJavascript />,
  'React': <SiReact />,
  'Git': <SiGit />,
  'SQL': <HiOutlineDatabase />,
  'TypeScript': <SiTypescript />,
  'JavaScript': <SiJavascript />,
  'Jupyter': <SiJupyter />,
  'Docker': <SiDocker />,
  'Node.js': <SiNodedotjs />,
  'NLP': <TbBrandNpm />,
}

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),transparent_70%)]" />
      <div className="container-width relative z-10">
        <SectionHeader 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 gradient-border"
            >
              <h3 className="text-xl font-sora font-bold gradient-text mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group relative"
                  >
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 cursor-default">
                      <span className="text-lg text-white/70 group-hover:text-primary transition-colors">
                        {skillIcons[skill] || null}
                      </span>
                      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}