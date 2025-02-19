"use client"

import { motion } from 'framer-motion'
import { Bot, Zap, Database } from 'lucide-react'
import { useLanguageStore } from '@/lib/store'
import { translations } from '@/lib/translations'
import ChatbotAnimation from './animations/ChatbotAnimation'
import Link from 'next/link'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Services() {
  const { language } = useLanguageStore()
  const t = translations[language].services

  const services = [
    {
      title: t.oneTime.title,
      description: t.oneTime.description,
      icon: Bot,
      cta: t.oneTime.cta,
      href: "/contact?service=build-bounce",
      animation: "pulse"
    },
    {
      title: t.optimization.title,
      description: t.optimization.description,
      icon: Zap,
      cta: t.optimization.cta,
      href: "/contact?service=ai-support",
      animation: "float"
    },
    {
      title: t.crm.title,
      description: t.crm.description,
      icon: Database,
      cta: t.crm.cta,
      href: "/contact?service=crm-integration",
      animation: "orbit"
    }
  ]

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-background to-background/50" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors min-h-[400px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
                <div className="relative h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  {/* Chatbot Animation */}
                  <ChatbotAnimation
                    type={service.animation as 'float' | 'pulse' | 'orbit'}
                    size={80}
                    speed={1}
                    className="bottom-16 right-8 opacity-30 group-hover:opacity-100 transition-opacity"
                  />
                  
                  <div className="absolute bottom-6 left-6">
                    <Link
                      href={service.href}
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>{service.cta}</span>
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: language === 'he' ? -4 : 4 }}
                        className="text-lg"
                      >
                        {language === 'he' ? '←' : '→'}
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}