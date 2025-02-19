"use client"

import { motion } from 'framer-motion'
import { Brain, Clock, TrendingUp, Users } from 'lucide-react'
import { useLanguageStore } from '@/lib/store'
import { translations } from '@/lib/translations'

export default function AiBots() {
  const { language } = useLanguageStore()
  const t = translations[language].aiBots

  const features = [
    {
      icon: TrendingUp,
      title: t.features.revenue.title,
      description: t.features.revenue.description
    },
    {
      icon: Clock,
      title: t.features.availability.title,
      description: t.features.availability.description
    },
    {
      icon: Brain,
      title: t.features.learning.title,
      description: t.features.learning.description
    },
    {
      icon: Users,
      title: t.features.support.title,
      description: t.features.support.description
    }
  ]

  return (
    <section id="ai-bots" className="relative py-24 bg-gradient-to-b from-background via-background/50 to-background" dir={language === 'he' ? 'rtl' : 'ltr'}>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
                <div className="relative flex items-start space-x-4" dir={language === 'he' ? 'rtl' : 'ltr'}>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition"
          >
            <span>{t.cta}</span>
            <span className="text-xl">{language === 'he' ? '←' : '→'}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}