'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface NavigationProps {
  containerStyles: string
  linkStyles?: string
  underlineStyles?: string
}

const links = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/portfolio', name: 'portifolio' },
  { path: '/clients', name: 'clients' },
  { path: '/contact', name: 'contact' },
]

export function Navigation({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavigationProps) {
  const path = usePathname()

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
