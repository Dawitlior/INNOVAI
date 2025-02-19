"use client"

import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'
import { useLanguageStore } from '@/lib/store'
import { translations } from '@/lib/translations'
import ChatbotAnimation from './animations/ChatbotAnimation'

export default function Contact() {
  const { language } = useLanguageStore()
  const t = translations[language].contact

  const whatsappNumber = "972542653154"
  const message = "Hi, I am interested in integrating AI into my business."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-background to-background/50 overflow-hidden" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-glow">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            {t.subtitle}
          </p>

          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 hidden lg:block">
              <ChatbotAnimation 
                type="float"
                size={200}
                speed={0.5}
                opacity={0.2}
                className="transform translate-x-1/2"
              />
            </div>

            <div className="absolute -left-24 top-1/2 -translate-y-1/2 hidden lg:block">
              <ChatbotAnimation 
                type="float"
                size={200}
                speed={0.5}
                opacity={0.2}
                className="transform -translate-x-1/2"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button relative inline-flex items-center space-x-3 rtl:space-x-reverse px-8 py-4 rounded-lg text-lg font-semibold"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare className="w-6 h-6" />
                <span>{language === 'en' ? 'Chat with us on WhatsApp' : 'דבר איתנו בוואטסאפ'}</span>
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {language === 'en' 
                ? 'Click to start a conversation with our AI experts'
                : 'לחץ כדי להתחיל שיחה עם מומחי ה-AI שלנו'
              }
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}