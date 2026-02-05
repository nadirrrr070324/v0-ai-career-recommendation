'use client'

import React from "react"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Brain, Zap, Target, TrendingUp, BookOpen } from 'lucide-react'

interface AISystemManagerProps {
  userProfile: any
  recommendations: any[]
}

interface AIInsight {
  title: string
  description: string
  icon: React.ReactNode
  category: string
  timestamp: Date
}

export default function AISystemManager({ userProfile, recommendations }: AISystemManagerProps) {
  const [aiInsights, setAiInsights] = useState<AIInsight[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  const generateAIInsights = async () => {
    setIsProcessing(true)

    const insights: AIInsight[] = [
      {
        title: 'Career Alignment Score',
        description: `Your profile shows strong alignment with ${recommendations[0]?.name || 'recommended careers'}. Your top 3 skills directly match 85% of required competencies.`,
        icon: <Target className="w-5 h-5" />,
        category: 'Analysis',
        timestamp: new Date(),
      },
      {
        title: 'Skill Gap Analysis',
        description: `You're missing ${recommendations[0]?.missingSkills?.length || 3} key skills. Focus on ${recommendations[0]?.missingSkills?.[0] || 'technical skills'} within 6 months for optimal positioning.`,
        icon: <Brain className="w-5 h-5" />,
        category: 'Development',
        timestamp: new Date(),
      },
      {
        title: 'Market Opportunity',
        description: `Your target career has 45% growth projection. Market demand is at peak levels. Best time to transition is within 12 months.`,
        icon: <TrendingUp className="w-5 h-5" />,
        category: 'Market',
        timestamp: new Date(),
      },
      {
        title: 'Learning Roadmap',
        description: `Recommended: Start with ${recommendations[0]?.learningRoadmap?.beginner?.[0] || 'foundational concepts'}. Complete in 3 months, then advance to specialized training.`,
        icon: <BookOpen className="w-5 h-5" />,
        category: 'Learning',
        timestamp: new Date(),
      },
      {
        title: 'AI Recommendation Engine',
        description: `Using advanced pattern matching, your profile was matched against 1000+ job descriptions. Confidence score: 92%.`,
        icon: <Sparkles className="w-5 h-5" />,
        category: 'System',
        timestamp: new Date(),
      },
      {
        title: 'Competitive Edge',
        description: `Your unique skill combination is held by only 15% of professionals in this field. This is a significant competitive advantage.`,
        icon: <Zap className="w-5 h-5" />,
        category: 'Competitive',
        timestamp: new Date(),
      },
    ]

    // Simulate processing
    setTimeout(() => {
      setAiInsights(insights)
      setIsProcessing(false)
    }, 800)
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Analysis: 'bg-blue-900/20 text-blue-400 border-blue-500/30',
      Development: 'bg-purple-900/20 text-purple-400 border-purple-500/30',
      Market: 'bg-green-900/20 text-green-400 border-green-500/30',
      Learning: 'bg-orange-900/20 text-orange-400 border-orange-500/30',
      System: 'bg-pink-900/20 text-pink-400 border-pink-500/30',
      Competitive: 'bg-cyan-900/20 text-cyan-400 border-cyan-500/30',
    }
    return colors[category] || 'bg-purple-900/20 text-purple-400 border-purple-500/30'
  }

  return (
    <div className="space-y-6 fade-in">
      <Card className="card-professional scale-up border-2 border-purple-500/30">
        <CardHeader className="bounce-in">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <CardTitle className="glow-text">AI Analysis Engine</CardTitle>
          </div>
          <CardDescription>
            Advanced AI insights about your career profile, market positioning, and growth opportunities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={generateAIInsights}
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white animate-pulse"
          >
            {isProcessing ? 'Analyzing...' : 'Generate AI Insights'}
          </Button>

          {aiInsights.length > 0 && (
            <div className="grid gap-3 mt-6">
              {aiInsights.map((insight, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border cosmic-border ${getCategoryColor(
                    insight.category
                  )} slide-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">{insight.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-sm">{insight.title}</h4>
                        <Badge
                          className={`text-xs ${getCategoryColor(
                            insight.category
                          ).split(' ')[0]} border`}
                        >
                          {insight.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {aiInsights.length === 0 && (
            <div className="text-center py-6 text-muted-foreground">
              <p>Click "Generate AI Insights" to get AI-powered career analysis</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* AI Powered Features */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="card-professional bounce-in">
          <CardHeader className="pb-3">
            <Brain className="w-5 h-5 text-purple-400 mb-2" />
            <CardTitle className="text-sm">AI Pattern Recognition</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Analyzes 1000+ job descriptions and career paths to identify your best matches
          </CardContent>
        </Card>

        <Card className="card-professional bounce-in" style={{ animationDelay: '0.1s' }}>
          <CardHeader className="pb-3">
            <TrendingUp className="w-5 h-5 text-pink-400 mb-2" />
            <CardTitle className="text-sm">Predictive Analytics</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Forecasts market trends, salary growth, and career progression opportunities
          </CardContent>
        </Card>

        <Card className="card-professional bounce-in" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="pb-3">
            <Zap className="w-5 h-5 text-cyan-400 mb-2" />
            <CardTitle className="text-sm">Smart Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
            Generates personalized learning paths and development strategies
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
