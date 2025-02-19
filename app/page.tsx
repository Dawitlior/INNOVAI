import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/hero'

// Dynamically import components with loading fallbacks
const ValueProposition = dynamic(() => import('@/components/value-proposition'), {
  loading: () => <div className="h-screen" />
})

const Services = dynamic(() => import('@/components/services'), {
  loading: () => <div className="h-screen" />
})

const Process = dynamic(() => import('@/components/process'), {
  loading: () => <div className="h-screen" />
})

const AiBots = dynamic(() => import('@/components/ai-bots'), {
  loading: () => <div className="h-screen" />
})

const Statistics = dynamic(() => import('@/components/statistics'), {
  loading: () => <div className="h-screen" />
})

const Contact = dynamic(() => import('@/components/contact'), {
  loading: () => <div className="h-screen" />
})

const Disclaimer = dynamic(() => import('@/components/disclaimer'), {
  loading: () => <div className="h-96" />
})

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen">
      <Hero />
      <Suspense fallback={<div className="h-screen" />}>
        <ValueProposition />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <Process />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <AiBots />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <Statistics />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <Disclaimer />
      </Suspense>
    </main>
  )
}