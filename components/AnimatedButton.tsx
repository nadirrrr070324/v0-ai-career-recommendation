'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost' | 'destructive'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  animation?: 'pulse' | 'bounce' | 'glow' | 'scale'
}

export default function AnimatedButton({
  children,
  className,
  animation = 'pulse',
  ...props
}: AnimatedButtonProps) {
  const animationClass = {
    pulse: 'hover:animate-pulse',
    bounce: 'hover:scale-110 transition-transform',
    glow: 'hover:glow-pulse',
    scale: 'hover:scale-105 transition-transform duration-200',
  }[animation]

  return (
    <Button
      className={cn(
        'transition-all duration-300',
        animationClass,
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
