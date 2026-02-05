'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { BarChart, TrendingUp, Users, Target } from 'lucide-react'

interface DashboardProps {
  overallReadiness: number
  topCareer: string
  matchPercentage: number
  recommendationCount: number
}

export default function ProfessionalDashboard({
  overallReadiness,
  topCareer,
  matchPercentage,
  recommendationCount,
}: DashboardProps) {
  return (
    <div className="space-y-6 fade-in">
      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Career Readiness */}
        <Card className="card-professional bounce-in">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Career Readiness
              </CardTitle>
              <TrendingUp className="w-4 h-4 text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold glow-pulse">{overallReadiness}%</div>
            <p className="text-xs text-muted-foreground mt-1">Overall progression</p>
            <Progress value={overallReadiness} className="mt-2 h-1" />
          </CardContent>
        </Card>

        {/* Top Match */}
        <Card className="card-professional bounce-in" style={{ animationDelay: '0.1s' }}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Top Career Match
              </CardTitle>
              <Target className="w-4 h-4 text-pink-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-400 shimmer">{matchPercentage}%</div>
            <p className="text-xs text-muted-foreground mt-1 truncate">{topCareer}</p>
          </CardContent>
        </Card>

        {/* Total Careers */}
        <Card className="card-professional bounce-in" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Career Matches
              </CardTitle>
              <BarChart className="w-4 h-4 text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">{recommendationCount}</div>
            <p className="text-xs text-muted-foreground mt-1">Recommended paths</p>
          </CardContent>
        </Card>

        {/* Your Status */}
        <Card className="card-professional bounce-in" style={{ animationDelay: '0.3s' }}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Status
              </CardTitle>
              <Users className="w-4 h-4 text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <Badge className="bg-green-900/30 text-green-400 border border-green-500/30">
              Active Profile
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">Ready to explore</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
