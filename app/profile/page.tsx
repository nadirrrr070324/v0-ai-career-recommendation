'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import UserProfile from '@/components/UserProfile'
import { ArrowLeft, Sparkles } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="min-h-screen stars-background bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-900/30 bg-background/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg cosmic-glow">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
                <h1 className="text-2xl font-bold glow-text">User Profile</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <UserProfile />
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-900/30 bg-background/50 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>CareerIQ © 2026 | Your profile information is secure and private</p>
        </div>
      </footer>
    </div>
  )
}
