'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, DollarSign, TrendingUp, Users, Award, MapPin, Clock, Target } from 'lucide-react'

interface CareerDetailsProps {
  career: {
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
  isSaved?: boolean
  onToggleSave?: () => void
}

export default function CareerDetailsModal({ career, isSaved, onToggleSave }: CareerDetailsProps) {
  const careerInsights: Record<string, { description: string; icon: any }> = {
    'Software Developer': {
      description: 'Create applications and systems',
      icon: <Target className="w-5 h-5" />,
    },
    'Data Analyst': {
      description: 'Analyze data for insights',
      icon: <TrendingUp className="w-5 h-5" />,
    },
    'UI/UX Designer': {
      description: 'Design user experiences',
      icon: <Award className="w-5 h-5" />,
    },
  }

  const insight = careerInsights[career.name] || {
    description: 'Excel in your field',
    icon: <Target className="w-5 h-5" />,
  }

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="card-professional bg-gradient-to-r from-purple-900/30 to-pink-900/20 border-purple-500/30">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {insight.icon}
                <CardTitle className="text-3xl gradient-text">{career.name}</CardTitle>
              </div>
              <p className="text-muted-foreground">{insight.description}</p>
            </div>
            <Button
              onClick={onToggleSave}
              variant={isSaved ? 'default' : 'outline'}
              className="cosmic-border"
            >
              {isSaved ? 'Saved' : 'Save Career'}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="card-professional">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-xs">Match Score</span>
              </div>
              <p className="text-2xl font-bold text-purple-400">{career.matchPercentage}%</p>
            </div>
          </CardContent>
        </Card>
        <Card className="card-professional">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="w-4 h-4 text-green-400" />
                <span className="text-xs">Salary Range</span>
              </div>
              <p className="text-2xl font-bold text-green-400">{career.salaryRange}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="card-professional">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-xs">Mentors</span>
              </div>
              <p className="text-2xl font-bold text-blue-400">{career.mentors.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="card-professional">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="w-4 h-4 text-pink-400" />
                <span className="text-xs">Skills to Learn</span>
              </div>
              <p className="text-2xl font-bold text-pink-400">{career.missingSkills.length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Content */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-background/30 backdrop-blur">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="mentors">Mentors</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-lg">Career Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Description</h4>
                <p className="text-sm text-muted-foreground">{career.description}</p>
              </div>
              <div className="border-t border-purple-900/30 pt-4">
                <h4 className="font-semibold text-sm mb-2">Why Recommended</h4>
                <p className="text-sm text-muted-foreground">{career.whyRecommended}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-lg">Skills Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-3 text-yellow-400">Skills to Develop</h4>
                <div className="flex flex-wrap gap-2">
                  {career.missingSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-yellow-900/30 text-yellow-200 border-yellow-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmap" className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {['beginner', 'intermediate', 'advanced'].map((level) => (
              <Card key={level} className="card-professional">
                <CardHeader>
                  <CardTitle className="text-sm capitalize">{level} Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {career.learningRoadmap[level as keyof typeof career.learningRoadmap].map(
                      (item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-purple-400 min-w-max">→</span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mentors" className="space-y-4">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-lg">Industry Mentors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {career.mentors.map((mentor) => (
                  <div
                    key={mentor}
                    className="p-3 rounded-lg bg-purple-900/20 border border-purple-500/30 flex items-center gap-2"
                  >
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium">{mentor}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
