'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface SlideInProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
  delay?: number
  className?: string
}

export function SlideIn({ children, direction = 'left', delay = 0, className }: SlideInProps) {
  const shouldReduce = useReducedMotion()
  const x = direction === 'left' ? -40 : 40

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
