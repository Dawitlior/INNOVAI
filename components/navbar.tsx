"use client"

import { useState, useEffect } from 'react'
import { Bot, Menu, X, Globe, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguageStore } from '@/lib/store'
import { translations } from '@/lib/translations'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mounted, setMounted] = useState(false)
  const { language, setLanguage } = useLanguageStore()
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      if (pathname === '/') {
        const sections = ['home', 'services', 'process', 'ai-bots', 'statistics', 'contact']
        const currentSection = sections.find(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 100 && rect.bottom >= 100
          }
          return false
        })
        
        if (currentSection) {
          setActiveSection(currentSection)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call immediately to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const handleNavigation = (sectionId: string) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsMenuOpen(false)
  }

  const languageNames = {
    en: 'English',
    he: 'עברית',
    es: 'Español',
    hi: 'हिंदी'
  }

  if (!mounted) {
    return null
  }

  return (
    <nav
      dir={language === 'he' ? 'rtl' : 'ltr'}
      className={cn(
        'navbar',
        isScrolled && 'scrolled'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <Bot className="h-8 w-8 text-primary animate-spin-slow" />
              <span className="font-bold text-xl text-glow">INNOVAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <button 
                onClick={() => handleNavigation('services')}
                className={cn(
                  "px-2 text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105",
                  activeSection === 'services' && "text-primary text-glow"
                )}
              >
                {translations[language].nav.services}
              </button>
              <button 
                onClick={() => handleNavigation('process')}
                className={cn(
                  "px-2 text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105",
                  activeSection === 'process' && "text-primary text-glow"
                )}
              >
                {translations[language].nav.process}
              </button>
              <button 
                onClick={() => handleNavigation('ai-bots')}
                className={cn(
                  "px-2 text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105",
                  activeSection === 'ai-bots' && "text-primary text-glow"
                )}
              >
                {translations[language].nav.aiBots}
              </button>
              <button 
                onClick={() => handleNavigation('statistics')}
                className={cn(
                  "px-2 text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105",
                  activeSection === 'statistics' && "text-primary text-glow"
                )}
              >
                {translations[language].nav.stats}
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className={cn(
                  "px-2 text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105",
                  activeSection === 'contact' && "text-primary text-glow"
                )}
              >
                {translations[language].nav.contact}
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="button-primary hover:scale-105 mx-2"
              >
                {translations[language].nav.getStarted}
              </button>

              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10 hover:scale-105 mx-2"
                    aria-label="Select language"
                  >
                    <Globe className="h-5 w-5 animate-spin-slow" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {Object.entries(languageNames).map(([code, name]) => (
                    <DropdownMenuItem
                      key={code}
                      onClick={() => setLanguage(code as keyof typeof languageNames)}
                      className={cn(
                        "cursor-pointer",
                        language === code && "text-primary"
                      )}
                    >
                      {name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10 hover:scale-105 mx-2"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 animate-spin-slow" />
                ) : (
                  <Moon className="h-5 w-5 animate-spin-slow" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10"
                  aria-label="Select language"
                >
                  <Globe className="h-5 w-5 animate-spin-slow" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {Object.entries(languageNames).map(([code, name]) => (
                  <DropdownMenuItem
                    key={code}
                    onClick={() => setLanguage(code as keyof typeof languageNames)}
                    className={cn(
                      "cursor-pointer",
                      language === code && "text-primary"
                    )}
                  >
                    {name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 animate-spin-slow" />
              ) : (
                <Moon className="h-5 w-5 animate-spin-slow" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2 hover:text-primary transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 animate-spin-slow" />
              ) : (
                <Menu className="h-6 w-6 animate-spin-slow" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleNavigation('services')}
                className={cn(
                  "block w-full text-left px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300",
                  activeSection === 'services' && "text-primary text-glow"
                )}
              >
                {translations[language].nav.services}
              </button>
              <button
                onClick={() => handleNavigation('process')}
                className={cn(
                  "block w-full text-left px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300",
                  activeSection === 'process' && "text-primary text-glow"
                )}
              >
                {translations[language].nav.process}
              </button>
              <button
                onClick={() => handleNavigation('ai-bots')}
                className={cn(
                  "block w-full text-left px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300",
                  activeSection === 'ai-bots' && "text-primary text-glow"
                )}
              >
                {translations[language].nav.aiBots}
              </button>
              <button
                onClick={() => handleNavigation('statistics')}
                className={cn(
                  "block w-full text-left px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300",
                  activeSection === 'statistics' && "text-primary text-glow"
                )}
              >
                {translations[language].nav.stats}
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className={cn(
                  "block w-full text-left px-3 py-2 text-foreground/80 hover:text-primary transition-all duration-300",
                  activeSection === 'contact' && "text-primary text-glow"
                )}
              >
                {translations[language].nav.contact}
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="w-full text-left px-3 py-2 button-primary"
              >
                {translations[language].nav.getStarted}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}