'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Direction = 'left' | 'right' | 'up'

interface ScrollRevealProps {
  children: ReactNode
  direction?: Direction
  className?: string
  once?: boolean
}

export default function ScrollReveal({
  children,
  direction = 'up',
  className = '',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return
    }

    const element = ref.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
      observer.disconnect()
    }
  }, [once])

  const baseClasses = [
    'scroll-reveal',
    direction === 'left' && 'scroll-reveal-left',
    direction === 'right' && 'scroll-reveal-right',
    direction === 'up' && 'scroll-reveal-up',
    visible && 'scroll-reveal-visible',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={baseClasses}>
      {children}
    </div>
  )
}

