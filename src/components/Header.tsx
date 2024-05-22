'use client'

import React from 'react'
import { ThemeToggle } from './theme-toggle'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { MobileNavigation } from './MobileNavigation'

export function Header() {
  return (
    <header className="px-2">
      <div className="container mx-auto mt-5 rounded-full border border-blue-600 shadow-md">
        <div className="flex items-center justify-between ">
          <Logo />

          <div className="flex items-center gap-x-6">
            <Navigation
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />

            <ThemeToggle />

            <div className="xl:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
