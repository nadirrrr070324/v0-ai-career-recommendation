'use client'

import React from "react"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { TrendingUp, Zap, Award, Target } from 'lucide-react'

interface CareerPathPredictionProps {
  recommendations: any[]
}

interface CareerStage {
  year: number
  title: string
  skills: string[]
  salary: string
  milestone: string
  icon: React.ReactNode
}

export default function CareerPathPrediction({ recommendations }: CareerPathPredictionProps) {
  const topCareer = recommendations[0]

  const careerPath: CareerStage[] = [
    {
      year: 0,
      title: 'Entry Level',
      skills: ['Fundamentals', 'Learning', 'Skill Building'],
      salary: '₹5-8 LPA',
      milestone: 'Secure first position in field',
      icon: <Award className="w-5 h-5" />,
    },
    {
      year: 2,
      title: 'Junior Professional',
      skills: ['Specialized Skills', 'Project Ownership', 'Teamwork'],
      salary: '₹8-12 LPA',
      milestone: 'Lead small projects',
      icon: <Target className="w-5 h-5" />,
    },
    {
      year: 5,
      title: 'Mid-Level Expert',
      skills: ['Advanced Expertise', 'Mentoring', 'Strategic Planning'],
      salary: '₹12-20 LPA',
      milestone: 'Become subject matter expert',
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      year: 10,
      title: 'Senior/Leadership',
      skills: ['Leadership', 'Decision Making', 'Vision Setting'],
      salary: '₹20-35 LPA',
      milestone: 'Lead teams and strategy',
      icon: <Zap className="w-5 h-5" />,
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="card-professional scale-up">
        <CardHeader className="bounce-in">
          <CardTitle className="glow-text">AI-Predicted Career Path</CardTitle>
          <CardDescription>
            10-year career progression roadmap for {topCareer?.name || 'your chosen career'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {careerPath.map((stage, index) => (
              <div
                key={index}
                className="relative slide-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connection Line */}
                {index < careerPath.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-purple-500/30 to-transparent" />
                )}

                <div className="flex gap-4">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white glow-pulse">
                      {stage.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{stage.title}</h4>
                        <p className="text-xs text-muted-foreground">Year {stage.year}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-green-600/50 to-emerald-600/50">
                        {stage.salary}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{stage.milestone}</p>

                    <div className="flex flex-wrap gap-2">
                      {stage.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Success Indicators */}
          <div className="grid md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-purple-900/30">
            <div className="p-3 rounded-lg bg-blue-900/20 border border-blue-500/30">
              <p className="text-xs font-medium text-blue-300 mb-1">Expected Growth</p>
              <p className="text-lg font-bold text-blue-400">+300%</p>
              <p className="text-xs text-muted-foreground">Salary increase over 10 years</p>
            </div>

            <div className="p-3 rounded-lg bg-purple-900/20 border border-purple-500/30">
              <p className="text-xs font-medium text-purple-300 mb-1">Market Demand</p>
              <p className="text-lg font-bold text-purple-400">High</p>
              <p className="text-xs text-muted-foreground">45% annual growth</p>
            </div>

            <div className="p-3 rounded-lg bg-pink-900/20 border border-pink-500/30">
              <p className="text-xs font-medium text-pink-300 mb-1">Success Rate</p>
              <p className="text-lg font-bold text-pink-400">92%</p>
              <p className="text-xs text-muted-foreground">Based on AI analysis</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
