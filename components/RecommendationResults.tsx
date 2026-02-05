'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { CheckCircle, AlertCircle, TrendingUp, DollarSign, BookOpen, Star } from 'lucide-react'

interface Recommendation {
  name: string
  matchPercentage: number
  description: string
  salaryRange: string
  whyRecommended: string
  missingSkills: string[]
  learningRoadmap: {
    beginner: string[]
    intermediate: string[]
    advanced: string[]
  }
  mentors: string[]
}

interface UserProfile {
  education: string
  skills: string[]
  interests: string[]
  industry: string
  personality: string
}

interface RecommendationResultsProps {
  recommendations: Recommendation[]
  userProfile: UserProfile
  onSelectCareer?: (career: Recommendation) => void
}

export default function RecommendationResults({
  recommendations,
  userProfile,
  onSelectCareer,
}: RecommendationResultsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const getMatchColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-400'
    if (percentage >= 60) return 'text-blue-400'
    if (percentage >= 40) return 'text-yellow-400'
    return 'text-orange-400'
  }

  const getMatchBgColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-900/20 border-green-500/30'
    if (percentage >= 60) return 'bg-blue-900/20 border-blue-500/30'
    if (percentage >= 40) return 'bg-yellow-900/20 border-yellow-500/30'
    return 'bg-orange-900/20 border-orange-500/30'
  }

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="card-professional bounce-in">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2 glow-pulse">
                {recommendations[0]?.matchPercentage || 0}%
              </div>
              <p className="text-xs text-muted-foreground">Top Match Score</p>
            </div>
          </CardContent>
        </Card>
        <Card className="card-professional bounce-in" style={{ animationDelay: '0.1s' }}>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2 shimmer">
                {recommendations.length}
              </div>
              <p className="text-xs text-muted-foreground">Top Careers</p>
            </div>
          </CardContent>
        </Card>
        <Card className="card-professional bounce-in" style={{ animationDelay: '0.2s' }}>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2 shimmer">
                {userProfile.skills.length}
              </div>
              <p className="text-xs text-muted-foreground">Current Skills</p>
            </div>
          </CardContent>
        </Card>
        <Card className="card-professional bounce-in" style={{ animationDelay: '0.3s' }}>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2 glow-pulse">
                {Math.round(recommendations.reduce((a, b) => a + b.matchPercentage, 0) / recommendations.length)}%
              </div>
              <p className="text-xs text-muted-foreground">Avg Readiness</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Career Cards */}
      <div className="grid gap-6">
        {recommendations.map((career, index) => (
          <Card
            key={index}
            className={`card-professional overflow-hidden cursor-pointer transition-all slide-in ${
              expandedIndex === index ? 'ring-2 ring-purple-500 glow-pulse' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <Badge className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white`}>
                      #{index + 1}
                    </Badge>
                    <span className={`text-2xl font-bold ${getMatchColor(career.matchPercentage)}`}>
                      {career.matchPercentage}%
                    </span>
                    <span className="text-xs text-muted-foreground">Match</span>
                  </div>
                  <CardTitle className="text-xl">{career.name}</CardTitle>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="cosmic-border bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectCareer?.(career)
                  }}
                >
                  View Details
                </Button>
              </div>
              <Progress value={career.matchPercentage} className="h-2 mt-2" />
            </CardHeader>

            {expandedIndex === index && (
              <CardContent className="space-y-4 border-t border-purple-900/30 pt-4">
                {/* Description */}
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{career.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cosmic-border">{career.salaryRange}</Badge>
                  </div>
                </div>

                {/* Why Recommended */}
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3">
                  <p className="text-sm"><strong>Why Recommended:</strong> {career.whyRecommended}</p>
                </div>

                {/* Missing Skills */}
                {career.missingSkills.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-400" />
                      Skills to Develop
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {career.missingSkills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-yellow-900/30 text-yellow-200 border-yellow-500/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learning Roadmap */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Learning Roadmap
                  </h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['beginner', 'intermediate', 'advanced'].map((level) => (
                      <div
                        key={level}
                        className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-3"
                      >
                        <p className="text-xs font-semibold text-purple-300 uppercase mb-2">
                          {level}
                        </p>
                        <ul className="space-y-1">
                          {career.learningRoadmap[level as keyof typeof career.learningRoadmap].map(
                            (item, i) => (
                              <li key={i} className="text-xs text-muted-foreground flex gap-2">
                                <span className="text-purple-400">•</span>
                                <span>{item}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
