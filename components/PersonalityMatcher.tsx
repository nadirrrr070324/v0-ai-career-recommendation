'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

interface PersonalityMatcherProps {
  userProfile: any
  recommendations: any[]
}

export default function PersonalityMatcher({ userProfile, recommendations }: PersonalityMatcherProps) {
  const [showAnalysis, setShowAnalysis] = useState(false)

  const personalities = [
    {
      type: 'Analytical',
      traits: ['Detail-oriented', 'Data-driven', 'Problem-solver', 'Logical thinking'],
      careerMatch: ['Data Analyst', 'Software Developer', 'Financial Analyst'],
      percentage: 85,
    },
    {
      type: 'Creative',
      traits: ['Innovative', 'Artistic', 'Idea-generator', 'Visual thinker'],
      careerMatch: ['UI/UX Designer', 'Product Manager', 'Digital Marketer'],
      percentage: 72,
    },
    {
      type: 'Leader',
      traits: ['Decisive', 'Communicator', 'Motivator', 'Strategic thinker'],
      careerMatch: ['Business Analyst', 'Product Manager', 'Government Officer'],
      percentage: 68,
    },
    {
      type: 'Technical',
      traits: ['System thinker', 'Technical depth', 'Implementation focused', 'Hands-on'],
      careerMatch: ['Software Developer', 'Cybersecurity Analyst', 'Infrastructure Engineer'],
      percentage: 79,
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="card-professional scale-up">
        <CardHeader className="bounce-in">
          <CardTitle className="glow-text">AI Personality & Career Alignment</CardTitle>
          <CardDescription>
            Advanced AI analysis matching your personality traits to ideal career environments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => setShowAnalysis(!showAnalysis)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {showAnalysis ? 'Hide Analysis' : 'Analyze Personality Fit'}
          </Button>

          {showAnalysis && (
            <div className="grid gap-4 mt-6">
              {personalities.map((personality, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border cosmic-border bg-card/50 slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-sm">{personality.type}</h4>
                    <Badge className="bg-purple-600/50 text-purple-200">{personality.percentage}% Match</Badge>
                  </div>

                  <Progress value={personality.percentage} className="h-2 mb-3" />

                  <div className="mb-3">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Traits:</p>
                    <div className="flex flex-wrap gap-2">
                      {personality.traits.map((trait, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Best Career Fits:</p>
                    <div className="flex flex-wrap gap-2">
                      {personality.careerMatch.map((career, i) => (
                        <Badge key={i} className="text-xs bg-gradient-to-r from-purple-600/50 to-pink-600/50">
                          {career}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
