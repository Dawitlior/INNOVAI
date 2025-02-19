"use client"

import { motion } from 'framer-motion'
import { Clock, Users, Zap, TrendingUp, Bot } from 'lucide-react'
import { useLanguageStore } from '@/lib/store'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export default function ValueProposition() {
  const { language } = useLanguageStore()
  const isRTL = language === 'he'

  const benefits = [
    {
      icon: Clock,
      title: language === 'he' ? 'שירות מהיר ויעיל' : 'Lightning-Fast Service',
      description: language === 'he' 
        ? 'מענה מיידי 24/7 שמעניק ללקוחות שלך חוויה יוצאת דופן ותחושת ערך אמיתית'
        : 'Transform customer waiting into instant satisfaction with 24/7 AI-powered responses'
    },
    {
      icon: Users,
      title: language === 'he' ? 'הגדלת הזדמנויות עסקיות' : 'Maximize Opportunities',
      description: language === 'he'
        ? 'מערכת AI חכמה שלא מפספסת אף הזדמנות עסקית ומגדילה את פוטנציאל המכירות שלך'
        : 'Never miss another lead with our intelligent AI system that turns inquiries into opportunities'
    },
    {
      icon: Zap,
      title: language === 'he' ? 'שחרור משאבים' : 'Unleash Your Team',
      description: language === 'he'
        ? 'אוטומציה חכמה שמשחררת את הצוות שלך להתמקד ביצירת קשרים משמעותיים וסגירת עסקאות'
        : 'Free your team from repetitive tasks, enabling them to focus on what humans do best—building relationships'
    },
    {
      icon: TrendingUp,
      title: language === 'he' ? 'יתרון תחרותי' : 'Future-Proof Edge',
      description: language === 'he'
        ? 'הובלה טכנולוגית שממצבת את העסק שלך בחזית החדשנות ומעניקה לך יתרון משמעותי על המתחרים'
        : 'Lead your industry with cutting-edge AI technology that sets you apart from the competition'
    }
  ]

  return (
    <section className="relative py-24 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-block mb-6"
          >
            <Bot className="w-16 h-16 text-primary" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-6 text-primary"
          >
            {language === 'he' ? 'הגיע הזמן לשינוי' : 'Time for Change'}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {language === 'he'
              ? 'בעולם העסקי המהיר של היום, שיטות מסורתיות כבר לא מספיקות. עסקים מתמודדים עם עומס בשירות לקוחות, הזדמנויות אבודות ומשאבים מוגבלים.'
              : "In today's rapid business landscape, traditional methods fall short. Businesses struggle with overwhelming support demands, lost opportunities, and stretched resources."}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white border border-gray-100 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-lg">{benefit.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xl text-muted-foreground font-medium"
        >
          {language === 'he'
            ? 'הפתרונות של InnovAI מייעלים את העסק שלך, פותרים אתגרים מרכזיים ומניעים צמיחה משמעותית לטווח ארוך.'
            : "InnovAI's solutions streamline your business, solve core challenges, and drive sustainable growth."}
        </motion.p>
      </div>
    </section>
  )
}