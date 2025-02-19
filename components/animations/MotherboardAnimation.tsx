"use client"

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Cpu } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function MotherboardAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    // Clear previous animations
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild)
    }

    // Create circuit paths
    const paths = Array.from({ length: 32 }, (_, i) => {
      const path = document.createElement('div')
      path.className = 'absolute bg-primary/10 rounded-full'
      path.style.height = '2px'
      containerRef.current?.appendChild(path)
      return path
    })

    // Create nodes
    const nodes = Array.from({ length: 24 }, (_, i) => {
      const node = document.createElement('div')
      node.className = 'absolute w-2 h-2 rounded-full bg-primary/20'
      containerRef.current?.appendChild(node)
      return node
    })

    // Create CPU nodes
    const cpuNodes = Array.from({ length: 8 }, (_, i) => {
      const node = document.createElement('div')
      const size = 16 + Math.random() * 8
      node.className = 'absolute flex items-center justify-center'
      node.innerHTML = `<div class="relative">
        <div class="absolute inset-0 bg-primary/10 blur-lg rounded-full"></div>
        <div class="relative bg-primary/10 p-2 rounded-lg backdrop-blur-sm border border-primary/10">
          <svg class="w-${size} h-${size} text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16v16H4z"></path>
            <path d="M9 9h6v6H9z"></path>
          </svg>
        </div>
      </div>`
      containerRef.current?.appendChild(node)
      return node
    })

    // Animate circuit paths
    paths.forEach((path, i) => {
      const isHorizontal = i % 2 === 0
      const start = Math.random() * 90
      const length = 100 + Math.random() * 200

      anime({
        targets: path,
        scaleX: isHorizontal ? [0, 1] : 1,
        scaleY: isHorizontal ? 1 : [0, 1],
        width: isHorizontal ? length : 2,
        height: isHorizontal ? 2 : length,
        left: isHorizontal ? start + '%' : (Math.random() * 90) + '%',
        top: isHorizontal ? (Math.random() * 90) + '%' : start + '%',
        opacity: [0, 0.3, 0],
        easing: 'easeInOutQuad',
        duration: 3000 + Math.random() * 2000,
        delay: Math.random() * 1000,
        loop: true,
        direction: 'alternate'
      })
    })

    // Animate nodes
    nodes.forEach((node, i) => {
      const radius = 5 + Math.random() * 10
      const angle = Math.random() * Math.PI * 2
      const centerX = Math.random() * 90
      const centerY = Math.random() * 90

      anime({
        targets: node,
        left: [{
          value: centerX + Math.cos(angle) * radius + '%',
          duration: 2000,
          delay: i * 50
        }, {
          value: centerX + Math.cos(angle + Math.PI) * radius + '%',
          duration: 2000
        }],
        top: [{
          value: centerY + Math.sin(angle) * radius + '%',
          duration: 2000,
          delay: i * 50
        }, {
          value: centerY + Math.sin(angle + Math.PI) * radius + '%',
          duration: 2000
        }],
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.3, 0.2],
        easing: 'easeInOutQuad',
        loop: true
      })
    })

    // Animate CPU nodes
    cpuNodes.forEach((node, i) => {
      const angle = (i / cpuNodes.length) * Math.PI * 2
      const radius = 30
      const x = 50 + Math.cos(angle) * radius
      const y = 50 + Math.sin(angle) * radius

      anime({
        targets: node,
        left: [{
          value: x + Math.cos(angle) * 5 + '%',
          duration: 2000,
          delay: i * 100
        }, {
          value: x + Math.cos(angle + Math.PI) * 5 + '%',
          duration: 2000
        }],
        top: [{
          value: y + Math.sin(angle) * 5 + '%',
          duration: 2000,
          delay: i * 100
        }, {
          value: y + Math.sin(angle + Math.PI) * 5 + '%',
          duration: 2000
        }],
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.4, 0.3],
        easing: 'easeInOutQuad',
        loop: true
      })
    })

    return () => {
      while (containerRef.current?.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild)
      }
    }
  }, [theme])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
      </div>
      <div ref={containerRef} className="relative w-full h-full">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 circuit-overlay" />
      </div>
    </div>
  )
}