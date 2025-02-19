"use client"

import { motion } from 'framer-motion'
import { useLanguageStore } from '@/lib/store'
import { translations } from '@/lib/translations'
import { AlertTriangle } from 'lucide-react'

export default function Disclaimer() {
  const { language } = useLanguageStore()
  const t = translations[language].disclaimer

  return (
    <section className="relative py-8 bg-background" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6"
        >
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/80 mb-1">
                {t.title}
              </h3>
              <p className="text-xs text-muted-foreground italic">
                {t.content}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}