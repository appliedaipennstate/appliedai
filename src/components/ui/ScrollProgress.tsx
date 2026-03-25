'use client'

import { motion, useScroll, useReducedMotion } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const shouldReduce = useReducedMotion()

  if (shouldReduce) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-beaver-blue origin-left z-[60]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
