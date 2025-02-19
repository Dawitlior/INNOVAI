"use client"

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Bot } from 'lucide-react'

interface ChatbotAnimationProps {
  type?: 'float' | 'pulse' | 'orbit'
  color?: string
  size?: number
  speed?: number
  className?: string
  opacity?: number
}

export default function ChatbotAnimation({
  type = 'float',
  color = 'hsl(var(--primary))',
  size = 48,
  speed = 0.5, // Reduced speed by 50%
  className = '',
  opacity = 0.15 // Reduced opacity for subtlety
}: ChatbotAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<anime.AnimeInstance | null>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const duration = 6000 / speed // Increased duration for slower animations
    
    const getAnimation = () => {
      switch (type) {
        case 'float':
          return anime({
            targets: elementRef.current,
            translateY: [0, -5], // Reduced movement range
            duration,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine',
            autoplay: true
          })
        
        case 'pulse':
          return anime({
            targets: elementRef.current,
            scale: [1, 1.02], // Reduced scale range
            opacity: [opacity, opacity + 0.02], // Reduced opacity range
            duration,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutQuad',
            autoplay: true
          })
        
        case 'orbit':
          return anime({
            targets: elementRef.current,
            translateX: [
              { value: 5, duration: duration / 2 }, // Reduced movement range
              { value: 0, duration: duration / 2 }
            ],
            translateY: [
              { value: -2, duration: duration / 2 }, // Reduced movement range
              { value: 0, duration: duration / 2 }
            ],
            rotate: {
              value: '1turn',
              duration: duration * 3, // Slower rotation
              easing: 'linear'
            },
            loop: true,
            autoplay: true
          })
      }
    }

    animationRef.current = getAnimation()

    return () => {
      if (animationRef.current) {
        animationRef.current.pause()
      }
    }
  }, [type, speed, opacity])

  return (
    <div 
      ref={elementRef}
      className={`absolute chatbot-container ${className}`}
      style={{ 
        width: size,
        height: size
      }}
    >
      <div className="relative w-full h-full chatbot-animation">
        <div 
          className="absolute inset-0 rounded-full blur-lg"
          style={{ 
            backgroundColor: color,
            opacity: opacity * 0.1 // Reduced glow opacity
          }}
        />
        
        <div 
          className="relative w-full h-full rounded-full flex items-center justify-center backdrop-blur-sm"
          style={{ 
            backgroundColor: color,
            opacity
          }}
        >
          <Bot className="w-1/2 h-1/2 text-background" />
        </div>
      </div>
    </div>
  )
}