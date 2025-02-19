"use client"

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Bot } from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

// Dynamically import charts to reduce initial bundle size
const LineChart = dynamic(() => import('@/components/charts/LineChart'), { ssr: false })
const BarChart = dynamic(() => import('@/components/charts/BarChart'), { ssr: false })

export default function StatsPage() {
  // AI Adoption Growth Data
  const adoptionData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'AI Adoption Rate (%)',
        data: [23, 35, 48, 62, 75, 85],
        borderColor: 'hsl(167, 98%, 55%)',
        backgroundColor: 'hsla(167, 98%, 55%, 0.1)',
        fill: true,
        tension: 0.4,
      }
    ]
  }

  // Industry Impact Data
  const industryData = {
    labels: ['Customer Service', 'Sales', 'Marketing', 'Operations', 'HR', 'Finance'],
    datasets: [
      {
        label: 'Efficiency Improvement (%)',
        data: [65, 45, 55, 40, 35, 42],
        backgroundColor: 'hsla(167, 98%, 55%, 0.8)',
        borderRadius: 8,
      }
    ]
  }

  return (
    <main className="min-h-screen pt-20 pb-16">
      {/* Header Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-glow">
              AI Adoption Statistics
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how AI is transforming businesses worldwide with real-time statistics and insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Charts Grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Adoption Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Global AI Adoption Growth</h2>
              <p className="text-muted-foreground">
                Tracking the rapid increase in AI implementation across industries
              </p>
            </div>
            <div className="aspect-[4/3] w-full">
              <LineChart data={adoptionData} />
            </div>
          </motion.div>

          {/* Industry Impact Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Industry Efficiency Impact</h2>
              <p className="text-muted-foreground">
                How AI improves efficiency across different business sectors
              </p>
            </div>
            <div className="aspect-[4/3] w-full">
              <BarChart data={industryData} />
            </div>
          </motion.div>
        </div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Average ROI",
              value: "267%",
              description: "Return on AI investment"
            },
            {
              title: "Time Saved",
              value: "45%",
              description: "Reduction in task completion time"
            },
            {
              title: "Customer Satisfaction",
              value: "89%",
              description: "Positive feedback rate"
            }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold mb-2">{stat.title}</p>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}