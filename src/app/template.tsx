'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useScrollProgress } from '@/hooks/useScrollProgress'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
}

interface TemplateProps {
  children: ReactNode
}

export default function Template({ children }: TemplateProps) {
  const completion = useScrollProgress()
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>

      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed bottom-0 right-0 top-0 z-50 w-1 bg-primary transition-all duration-700"
      ></span>

      <div className="h-[3500px]"></div>
    </>
  )
}
