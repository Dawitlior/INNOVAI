"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguageStore } from '@/lib/store'
import { translations } from '@/lib/translations'

export default function Hero() {
  const { language } = useLanguageStore()
  const t = translations[language]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            {t.hero.title}
            <span className="text-primary">{t.hero.subtitle}</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.hero.description}
          </p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-2 mx-auto hover:opacity-90 transition"
          >
            <span>{t.hero.cta}</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}