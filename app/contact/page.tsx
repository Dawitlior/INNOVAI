"use client"

import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { MessageSquare, Bot, Zap, Database, Sparkles, ArrowRight, AlertTriangle } from 'lucide-react'
import { useLanguageStore } from '@/lib/store'
import { translations } from '@/lib/translations'
import ChatbotAnimation from '@/components/animations/ChatbotAnimation'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export default function ContactPage() {
  const searchParams = useSearchParams()
  const service = searchParams.get('service')
  const { language } = useLanguageStore()
  const t = translations[language]

  const whatsappNumber = "972542653154"
  const message = "Hi, I am interested in integrating AI into my business."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  const serviceDetails = {
    'build-bounce': {
      icon: Bot,
      title: t.services.oneTime.title,
      description: t.services.oneTime.description,
      benefits: language === 'en' ? [
        'Instant Automation, No Recurring Fees',
        'Tailored for Your Business',
        'Fast Implementation',
        'Full Ownership & Control',
        'Saves Time & Money',
        'Scalability Options'
      ] : [
        'אוטומציה מיידית, ללא עלויות חודשיות',
        'מותאם לעסק שלך',
        'יישום מהיר',
        'בעלות ושליטה מלאה',
        'חוסך זמן וכסף',
        'אפשרויות הרחבה'
      ],
      gradient: "from-violet-500 to-fuchsia-500",
      disclaimer: language === 'en' ? 
        "Results may vary based on business requirements and implementation specifics. One-time build service does not include future updates or maintenance." :
        "התוצאות עשויות להשתנות בהתאם לדרישות העסק ופרטי היישום. שירות הבנייה החד פעמי אינו כולל עדכונים או תחזוקה עתידיים."
    },
    'ai-support': {
      icon: Zap,
      title: t.services.optimization.title,
      description: t.services.optimization.description,
      benefits: language === 'en' ? [
        'Data-Driven Enhancements',
        'Continuous AI Learning',
        'Bug Fixes & AI Tuning',
        'Conversion Optimization',
        'Future-Proof Solution',
        'Hassle-Free Maintenance'
      ] : [
        'שיפורים מבוססי נתונים',
        'למידת AI מתמשכת',
        'תיקוני באגים וכוונון AI',
        'אופטימיזציית המרה',
        'פתרון עמיד לעתיד',
        'תחזוקה ללא טרחה'
      ],
      gradient: "from-cyan-500 to-blue-500",
      disclaimer: language === 'en' ?
        "Optimization results depend on various factors including data quality and usage patterns. Continuous improvement requires active system usage and feedback." :
        "תוצאות האופטימיזציה תלויות בגורמים שונים כולל איכות הנתונים ודפוסי השימוש. שיפור מתמשך דורש שימוש פעיל במערכת ומשוב."
    },
    'crm-integration': {
      icon: Database,
      title: t.services.crm.title,
      description: t.services.crm.description,
      benefits: language === 'en' ? [
        'Automated Lead Capture',
        'Seamless CRM Integration',
        'Lead Pre-qualification',
        'Real-time Data Sync',
        'Increased Conversion Rates',
        'Time-saving Automation'
      ] : [
        'לכידת לידים אוטומטית',
        'אינטגרציה חלקה עם CRM',
        'סינון לידים מראש',
        'סנכרון נתונים בזמן אמת',
        'שיעורי המרה גבוהים יותר',
        'אוטומציה חוסכת זמן'
      ],
      gradient: "from-emerald-500 to-teal-500",
      disclaimer: language === 'en' ?
        "Integration capabilities may vary depending on your CRM system. Some features might require additional configuration or custom development." :
        "יכולות האינטגרציה עשויות להשתנות בהתאם למערכת ה-CRM שלך. חלק מהתכונות עשויות לדרוש הגדרות נוספות או פיתוח מותאם אישית."
    }
  }

  const selectedService = service ? serviceDetails[service as keyof typeof serviceDetails] : null
  const Icon = selectedService?.icon || MessageSquare

  return (
    <main className="min-h-screen pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-20" />
      
      <section className="relative" dir={language === 'he' ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          {selectedService ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="relative"
            >
              {/* Service Header */}
              <motion.div 
                variants={cardVariants}
                className="text-center mb-16"
              >
                <div className="relative inline-block">
                  <div className={`absolute inset-0 bg-gradient-to-r ${selectedService.gradient} blur-2xl opacity-20 rounded-full`} />
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="w-24 h-24 rounded-2xl bg-gradient-to-r from-primary to-primary/50 p-0.5 mx-auto mb-8"
                    >
                      <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-12 h-12 text-primary" />
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  {selectedService.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {selectedService.description}
                </p>
              </motion.div>

              {/* Benefits Grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
              >
                {selectedService.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <div className="relative h-full bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 flex items-center space-x-4 rtl:space-x-reverse overflow-hidden">
                      <Sparkles className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-lg">{benefit}</span>
                      <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                {t.contact.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.contact.subtitle}
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative mt-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-2xl opacity-50" />
            
            <div className="relative">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 rtl:space-x-reverse px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare className="w-6 h-6" />
                <span>{language === 'en' ? 'Start Your AI Journey on WhatsApp' : 'התחל את מסע ה-AI שלך בוואטסאפ'}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 text-lg text-muted-foreground"
              >
                {language === 'en' 
                  ? 'Our AI experts are ready to help you transform your business'
                  : 'מומחי ה-AI שלנו מוכנים לעזור לך לשנות את העסק שלך'
                }
              </motion.p>
            </div>
          </motion.div>

          {/* Dynamic Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <div className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl" />
              <div className="relative flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/80 mb-1">
                    {t.disclaimer.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedService ? selectedService.disclaimer : t.disclaimer.content}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}