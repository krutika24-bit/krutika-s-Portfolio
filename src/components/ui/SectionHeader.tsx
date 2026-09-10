import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export const SectionHeader = ({ title, subtitle, align = 'center' }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`flex gap-2 mt-6 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        <div className="w-4 h-1 rounded-full bg-gradient-to-r from-secondary to-accent" />
      </div>
    </motion.div>
  )
}