'use client'

import React from "react"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Sparkles, Mail, Lock, User, Phone, Calendar, GraduationCap } from 'lucide-react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    dob: '',
    education: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      window.location.href = '/'
    }, 2000)
  }

  return (
    <div className="min-h-screen stars-background bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8 fade-in">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-lg cosmic-glow glow-pulse">
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold glow-text mb-2">CareerIQ</h1>
          <p className="text-muted-foreground">AI-powered career intelligence platform</p>
        </div>

        {/* Auth Card */}
        <Card className="cosmic-border bg-card/50 backdrop-blur scale-up">
          <CardHeader className="bounce-in">
            <CardTitle className="glow-text text-purple-300 text-center">
              {isLogin ? 'Welcome back' : 'Create account'}
            </CardTitle>
            <CardDescription className="text-center">
              {isLogin 
                ? 'Sign in to access your career insights' 
                : 'Start your career discovery journey'}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Sign Up Fields */}
              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-400" />
                      Full name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border cosmic-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required={!isLogin}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-purple-400" />
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border cosmic-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required={!isLogin}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      Date of birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border cosmic-border text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required={!isLogin}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-purple-400" />
                      Education level
                    </label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border cosmic-border text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required={!isLogin}
                    >
                      <option value="">Select education level</option>
                      <option value="High School">High School</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                    </select>
                  </div>
                </>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border cosmic-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Lock className="w-4 h-4 text-purple-400" />
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border cosmic-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 rounded-lg transition-all duration-300"
              >
                {submitted ? 'Redirecting...' : (isLogin ? 'Sign in' : 'Create account')}
              </Button>
            </form>

            {/* Toggle Auth Mode */}
            <div className="text-center text-sm text-muted-foreground">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => {
                  setIsLogin(!isLogin)
                  setFormData({ email: '', password: '', name: '', phone: '', dob: '', education: '' })
                }}
                className="text-purple-400 hover:text-purple-300 font-semibold"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </div>

            {/* Demo Credentials */}
            {isLogin && (
              <div className="mt-4 p-3 rounded-lg bg-purple-900/20 border cosmic-border">
                <p className="text-xs text-muted-foreground mb-2">Demo credentials:</p>
                <p className="text-xs text-foreground">Email: demo@careerig.com</p>
                <p className="text-xs text-foreground">Password: demo123</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Status Message */}
        {submitted && (
          <div className="mt-4 p-4 rounded-lg bg-green-900/20 border border-green-500/30 text-center fade-in">
            <Badge className="bg-green-600 text-white">Account created successfully</Badge>
            <p className="text-sm text-muted-foreground mt-2">Redirecting to dashboard...</p>
          </div>
        )}

        {/* Footer Links */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <Link href="/" className="text-purple-400 hover:text-purple-300">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
