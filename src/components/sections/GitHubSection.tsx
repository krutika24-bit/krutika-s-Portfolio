import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { personalInfo } from '@/data/portfolio'
import { FiGithub, FiStar, FiGitBranch, FiUsers } from 'react-icons/fi'
import { VscRepoForked } from 'react-icons/vsc'

const repos = [
  { name: "Capston-project-IIT_Patna_-AIML-", stars: 5, forks: 2, language: "Python", description: "AI/ML Capstone Project at IIT Patna" },
  { name: "Sentiment-Analysis", stars: 8, forks: 3, language: "Python", description: "Advanced sentiment analysis using BERT" },
  { name: "Customer-Churn-Prediction", stars: 6, forks: 1, language: "Python", description: "ML model for customer churn prediction" },
  { name: "Sales-Forecasting", stars: 4, forks: 2, language: "Python", description: "Sales forecasting with time series analysis" },
  { name: "Data-Analytics-Dashboard", stars: 7, forks: 3, language: "Python", description: "Interactive BI dashboard with Power BI" },
  { name: "ML-Algorithms", stars: 12, forks: 5, language: "Python", description: "Implementation of ML algorithms from scratch" },
]

const languages = [
  { name: "Python", percentage: 65, color: "#3776AB" },
  { name: "Jupyter Notebook", percentage: 20, color: "#DA5B0B" },
  { name: "SQL", percentage: 8, color: "#E38C00" },
  { name: "JavaScript", percentage: 5, color: "#F7DF1E" },
  { name: "TypeScript", percentage: 2, color: "#3178C6" },
]

export const GitHubSection = () => {
  return (
    <section id="github" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.05),transparent_70%)]" />
      <div className="container-width relative z-10">
        <SectionHeader 
          title="GitHub" 
          subtitle="My open source contributions and activity"
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: FiGithub, label: "Repositories", value: "15+" },
            { icon: FiStar, label: "Stars", value: "42" },
            { icon: VscRepoForked, label: "Forks", value: "16" },
            { icon: FiUsers, label: "Contributions", value: "500+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold font-sora gradient-text">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <h3 className="text-lg font-sora font-bold gradient-text mb-4">Top Languages</h3>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-4">
                <span className="text-sm text-white/60 w-32">{lang.name}</span>
                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full rounded-full"
                    style={{ background: lang.color }}
                  />
                </div>
                <span className="text-sm text-white/40 w-10 text-right">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Repositories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-4 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <FiGithub className="w-4 h-4 text-white/40" />
                <h4 className="text-sm font-medium text-white group-hover:text-primary transition-colors truncate">
                  {repo.name}
                </h4>
              </div>
              <p className="text-xs text-white/40 mb-3 line-clamp-1">{repo.description}</p>
              <div className="flex items-center gap-4 text-xs text-white/30">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: languages.find(l => l.name === repo.language)?.color || '#3776AB' }} />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <FiStar className="w-3 h-3" /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <VscRepoForked className="w-3 h-3" /> {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <FiGithub className="w-5 h-5" />
            View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}