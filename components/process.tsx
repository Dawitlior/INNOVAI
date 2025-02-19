"use client"

import { motion } from 'framer-motion'
import { MessageSquare, Code, TestTube, Rocket, TrendingUp } from 'lucide-react'
import { useLanguageStore } from '@/lib/store'
import { translations } from '@/lib/translations'
import ChatbotAnimation from './animations/ChatbotAnimation'

const processSteps = [
  { icon: MessageSquare, key: 'consultation' },
  { icon: Code, key: 'development' },
  { icon: TestTube, key: 'testing' },
  { icon: Rocket, key: 'deployment' },
  { icon: TrendingUp, key: 'growth' }
]

export default function Process() {
  const { language } = useLanguageStore()
  const t = translations[language].process

  return (
    <section id="process" className="relative py-24 bg-gradient-to-b from-background to-background/50" dir={language === 'he' ? 'rtl' : 'ltr'}>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 hidden lg:block" />

          {processSteps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0
            const stepData = t.steps[step.key as keyof typeof t.steps]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step number bubble */}
                <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20 z-10">
                  {index + 1}
                </div>

                {/* Content card */}
                <div className={`w-full lg:w-[calc(50%-3rem)] ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'} mt-16 lg:mt-0`}>
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
                    
                    {/* Floating chatbot animation */}
                    <div className={`absolute ${isEven ? '-right-8' : '-left-8'} top-1/2 -translate-y-1/2 hidden lg:block`}>
                      <ChatbotAnimation
                        type={index % 3 === 0 ? 'float' : index % 3 === 1 ? 'pulse' : 'orbit'}
                        size={64}
                        speed={0.8}
                        opacity={0.2}
                      />
                    </div>

                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{stepData.title}</h3>
                      <p className="text-muted-foreground mb-4">{stepData.description}</p>
                      <p className="text-sm text-primary">{stepData.action}</p>
                    </div>
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
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-8">{t.cta}</h3>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition glow"
          >
            <span>{language === 'en' ? "Let's Get Started" : 'בואו נתחיל'}</span>
            <span className="text-xl">{language === 'he' ? '←' : '→'}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}