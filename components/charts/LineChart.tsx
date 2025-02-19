"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useTheme } from 'next-themes'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default function LineChart({ data }: { data: any }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: isDark ? 'hsl(210, 40%, 98%)' : 'hsl(222, 47%, 11%)',
          font: {
            size: 12,
            family: 'Inter, sans-serif'
          },
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: isDark ? 'hsl(229, 84%, 5%)' : 'hsl(0, 0%, 100%)',
        titleColor: isDark ? 'hsl(210, 40%, 98%)' : 'hsl(222, 47%, 11%)',
        bodyColor: isDark ? 'hsl(215, 20.2%, 65.1%)' : 'hsl(215.4, 16.3%, 46.9%)',
        borderColor: isDark ? 'hsl(217, 19%, 27%)' : 'hsl(214.3, 31.8%, 91.4%)',
        borderWidth: 1,
        padding: 12,
        boxPadding: 4,
        usePointStyle: true,
        titleFont: {
          size: 14,
          weight: '600',
          family: 'Inter, sans-serif'
        },
        bodyFont: {
          size: 12,
          family: 'Inter, sans-serif'
        },
        cornerRadius: 8
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: isDark ? 'hsl(215, 20.2%, 65.1%)' : 'hsl(215.4, 16.3%, 46.9%)',
          font: {
            size: 12,
            family: 'Inter, sans-serif'
          }
        },
        border: {
          color: isDark ? 'hsl(217, 19%, 27%, 0.1)' : 'hsl(214.3, 31.8%, 91.4%)'
        }
      },
      y: {
        grid: {
          color: isDark ? 'hsl(217, 19%, 27%, 0.1)' : 'hsl(214.3, 31.8%, 91.4%, 0.5)',
          drawBorder: false
        },
        ticks: {
          color: isDark ? 'hsl(215, 20.2%, 65.1%)' : 'hsl(215.4, 16.3%, 46.9%)',
          font: {
            size: 12,
            family: 'Inter, sans-serif'
          },
          padding: 8
        },
        border: {
          dash: [4, 4],
          color: isDark ? 'hsl(217, 19%, 27%, 0.1)' : 'hsl(214.3, 31.8%, 91.4%)'
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
    elements: {
      line: {
        borderWidth: 2,
        tension: 0.4
      },
      point: {
        radius: 4,
        hoverRadius: 6,
        borderWidth: 2,
        backgroundColor: isDark ? 'hsl(229, 84%, 5%)' : 'hsl(0, 0%, 100%)'
      }
    }
  }

  // Update dataset colors to match theme
  const updatedData = {
    ...data,
    datasets: data.datasets.map((dataset: any, index: number) => ({
      ...dataset,
      borderColor: isDark ? 'hsl(167, 98%, 55%)' : 'hsl(246, 83%, 63%)',
      backgroundColor: isDark 
        ? 'hsla(167, 98%, 55%, 0.1)'
        : 'hsla(246, 83%, 63%, 0.1)',
      pointBorderColor: isDark ? 'hsl(167, 98%, 55%)' : 'hsl(246, 83%, 63%)',
      pointHoverBackgroundColor: isDark ? 'hsl(167, 98%, 55%)' : 'hsl(246, 83%, 63%)'
    }))
  }

  return <Line options={options} data={updatedData} />
}