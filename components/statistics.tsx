"use client"

import { motion } from 'framer-motion'
import { useLanguageStore } from '@/lib/store'
import { translations } from '@/lib/translations'
import dynamic from 'next/dynamic'
import { Bot, Brain, TrendingUp, Users, ChevronDown, Building2, LineChart as LineChartIcon } from 'lucide-react'
import { useState } from 'react'

// Dynamically import charts for better performance
const LineChart = dynamic(() => import('./charts/LineChart'), { ssr: false })
const BarChart = dynamic(() => import('./charts/BarChart'), { ssr: false })

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function Statistics() {
  const { language } = useLanguageStore()
  const t = translations[language].statistics
  const isRTL = language === 'he'
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  // AI Adoption Growth Data
  const adoptionData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: language === 'en' ? 'AI Adoption Rate (%)' : 'שיעור אימוץ AI (%)',
        data: [23, 35, 48, 62, 75, 85],
        borderColor: 'hsl(167, 98%, 55%)',
        backgroundColor: 'hsla(167, 98%, 55%, 0.1)',
        fill: true,
        tension: 0.4,
      }
    ]
  }

  // ROI Impact Data
  const roiData = {
    labels: ['3 Months', '6 Months', '1 Year', '2 Years'].map(label => 
      language === 'he' ? label.replace('Months', 'חודשים').replace('Year', 'שנה').replace('Years', 'שנים') : label
    ),
    datasets: [
      {
        label: language === 'en' ? 'Average ROI (%)' : 'תשואה ממוצעת (%)',
        data: [35, 85, 167, 267],
        backgroundColor: 'hsla(167, 98%, 55%, 0.8)',
        borderRadius: 8,
      }
    ]
  }

  // Key Statistics Cards
  const keyStats = [
    {
      icon: Bot,
      value: '40%',
      label: language === 'en' ? 'Cost Reduction' : 'הפחתת עלויות',
      description: language === 'en' 
        ? 'Average reduction in operational costs after AI implementation'
        : 'הפחתה ממוצעת בעלויות תפעוליות לאחר יישום AI'
    },
    {
      icon: Brain,
      value: '133M+',
      label: language === 'en' ? 'New AI Jobs' : 'משרות AI חדשות',
      description: language === 'en'
        ? 'New AI-related jobs projected by 2025'
        : 'משרות חדשות הקשורות ל-AI צפויות עד 2025'
    },
    {
      icon: TrendingUp,
      value: '84%',
      label: language === 'en' ? 'Competitive Edge' : 'יתרון תחרותי',
      description: language === 'en'
        ? 'Business leaders say AI is key to market advantage'
        : 'מנהלי עסקים אומרים ש-AI הוא מפתח ליתרון בשוק'
    },
    {
      icon: Users,
      value: '80%',
      label: language === 'en' ? 'Customer Satisfaction' : 'שביעות רצון לקוחות',
      description: language === 'en'
        ? 'Businesses report improved customer satisfaction with AI'
        : 'עסקים מדווחים על שיפור בשביעות רצון לקוחות עם AI'
    }
  ]

  // Detailed insights sections
  const insights = [
    {
      id: 'adoption',
      icon: LineChartIcon,
      title: language === 'en' ? 'Global AI Adoption Trends' : 'מגמות אימוץ AI גלובליות',
      content: language === 'en' 
        ? [
            '37% of businesses have already adopted AI, with another 42% planning adoption within 2 years',
            'IT, finance, healthcare, and retail sectors lead in AI implementation',
            'Companies using AI report 3x faster problem resolution times',
            'AI adoption accelerated by 25% during the global pandemic'
          ]
        : [
            '37% מהעסקים כבר אימצו AI, עם 42% נוספים מתכננים לאמץ בתוך שנתיים',
            'מגזרי ה-IT, פיננסים, בריאות וקמעונאות מובילים ביישום AI',
            'חברות המשתמשות ב-AI מדווחות על זמני פתרון בעיות מהירים פי 3',
            'אימוץ AI האיץ ב-25% במהלך המגפה העולמית'
          ]
    },
    {
      id: 'impact',
      icon: Building2,
      title: language === 'en' ? 'Business Impact & ROI' : 'השפעה עסקית ותשואה להשקעה',
      content: language === 'en'
        ? [
            'Average 40% reduction in operational costs through AI automation',
            '61% of marketers report improved lead generation with AI',
            'Up to 50% increase in lead conversion rates with AI-powered CRM',
            '30% average increase in revenue for AI-driven businesses'
          ]
        : [
            'הפחתה ממוצעת של 40% בעלויות תפעוליות באמצעות אוטומציה של AI',
            '61% מהמשווקים מדווחים על שיפור בייצור לידים עם AI',
            'עלייה של עד 50% בשיעורי המרת לידים עם CRM מבוסס AI',
            'עלייה ממוצעת של 30% בהכנסות לעסקים מונעי AI'
          ]
    },
    {
      id: 'future',
      icon: Brain,
      title: language === 'en' ? 'Future of AI in Business' : 'עתיד ה-AI בעסקים',
      content: language === 'en'
        ? [
            '133M+ new AI-related jobs projected by 2025',
            '84% of business leaders consider AI essential for competitive advantage',
            'AI market expected to reach $190.61 billion by 2025',
            'Over 90% of leading businesses have ongoing AI investments'
          ]
        : [
            'צפי ל-133 מיליון+ משרות חדשות הקשורות ל-AI עד 2025',
            '84% ממנהלי העסקים רואים ב-AI כלי חיוני ליתרון תחרותי',
            'שוק ה-AI צפוי להגיע ל-190.61 מיליארד דולר עד 2025',
            'מעל 90% מהעסקים המובילים משקיעים ב-AI באופן מתמשך'
          ]
    }
  ]

  return (
    <section id="statistics" className="relative py-24 bg-gradient-to-b from-background via-background/95 to-background/90" dir={isRTL ? 'rtl' : 'ltr'}>
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Key Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {keyStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* AI Adoption Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">{t.sections.adoption.title}</h3>
              <p className="text-muted-foreground">
                {t.sections.adoption.description}
              </p>
            </div>
            <div className="aspect-[4/3] w-full">
              <LineChart data={adoptionData} />
            </div>
          </motion.div>

          {/* ROI Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">{t.sections.roi.title}</h3>
              <p className="text-muted-foreground">
                {t.sections.roi.description}
              </p>
            </div>
            <div className="aspect-[4/3] w-full">
              <BarChart data={roiData} />
            </div>
          </motion.div>
        </div>

        {/* Detailed Insights */}
        <div className="space-y-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon
            const isExpanded = expandedSection === insight.id
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : insight.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{insight.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <ul className="space-y-3">
                      {insight.content.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 rtl:space-x-reverse">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Source Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          {language === 'en' 
            ? 'Data sources: McKinsey, PwC, Forrester, Gartner, World Economic Forum'
            : 'מקורות מידע: McKinsey, PwC, Forrester, Gartner, World Economic Forum'}
        </motion.div>
      </div>
    </section>
  )
}