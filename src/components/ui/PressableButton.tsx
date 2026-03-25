'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface PressableButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export function PressableButton({
  children,
  className,
  href,
  type,
  onClick,
}: PressableButtonProps) {
  const shouldReduce = useReducedMotion()

  const motionProps = shouldReduce
    ? {}
    : {
        whileHover: { scale: 1.02, y: -1 },
        whileTap: { scale: 0.97 },
        transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
      }

  if (href) {
    return (
      <motion.a href={href} className={className} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type || 'button'} onClick={onClick} className={className} {...motionProps}>
      {children}
    </motion.button>
  )
}
