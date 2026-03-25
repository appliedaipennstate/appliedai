'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0, 30, 68, 0.08)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
