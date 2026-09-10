import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { personalInfo } from '@/data/portfolio'
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.send(
        'service_4n1gkod',
        'template_portfolio',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Krutika',
        },
        'XB5c_bh8Q-Wt-E-Kn'
      )
      
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    { icon: FiMail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FiPhone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FiMapPin, label: "Location", value: personalInfo.location },
    { icon: FiGithub, label: "GitHub", value: "@krutika24-bit", href: personalInfo.github },
    { icon: FiLinkedin, label: "LinkedIn", value: "Krutika Bhoi", href: personalInfo.linkedin },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.05),transparent_70%)]" />
      <div className="container-width relative z-10">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Let's work together"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-sora font-bold gradient-text mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href?.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40">{info.label}</p>
                      <p className="text-white group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-sora font-bold gradient-text mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<FiSend />}
                  className="w-full"
                  loading={isLoading}
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}