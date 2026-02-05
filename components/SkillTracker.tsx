'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { CheckCircle, Circle } from 'lucide-react'

interface UserProfile {
  skills: string[]
}

interface Recommendation {
  name: string
  matchPercentage: number
  missingSkills: string[]
}

interface SkillTrackerProps {
  userProfile: UserProfile
  recommendations: Recommendation[]
}

export default function SkillTracker({ userProfile, recommendations }: SkillTrackerProps) {
  const [skillProficiency, setSkillProficiency] = useState<Record<string, number>>(
    Object.fromEntries(userProfile.skills.map((s) => [s, 50]))
  )

  const allSkillsNeeded = Array.from(
    new Set(
      userProfile.skills.concat(
        recommendations.flatMap((r) => r.missingSkills)
      )
    )
  )

  const currentSkills = userProfile.skills
  const skillGaps = Array.from(
    new Set(
      recommendations
        .filter((r) => r.matchPercentage > 50)
        .flatMap((r) => r.missingSkills)
    )
  )

  return (
    <div className="space-y-6">
      {/* Skill Gap Analysis */}
      <Card className="cosmic-border bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-purple-300">Skill Gap Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold mb-3">Your Current Skills</h4>
              <div className="flex flex-wrap gap-2">
                {currentSkills.map((skill) => (
                  <Badge key={skill} className="bg-green-900 text-green-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Top Skills to Develop</h4>
              <div className="flex flex-wrap gap-2">
                {skillGaps.slice(0, 8).map((skill) => (
                  <Badge key={skill} className="bg-blue-900 text-blue-200 flex items-center gap-1">
                    <Circle className="w-3 h-3" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Proficiency Tracker */}
      <Card className="cosmic-border bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-purple-300">Your Skill Proficiency Levels</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {allSkillsNeeded.map((skill) => {
            const proficiency = skillProficiency[skill] || 30
            const isCurrentSkill = currentSkills.includes(skill)

            return (
              <div key={skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{skill}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-purple-300">{Math.round(proficiency)}%</span>
                    {isCurrentSkill && (
                      <Badge className="text-xs bg-green-900 text-green-200">Current</Badge>
                    )}
                  </div>
                </div>
                <Slider
                  value={[proficiency]}
                  onValueChange={(val) =>
                    setSkillProficiency((prev) => ({
                      ...prev,
                      [skill]: val[0],
                    }))
                  }
                  min={0}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Expert</span>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Improvement Suggestions */}
      <Card className="cosmic-border bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-purple-300">Improvement Roadmap</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              {
                title: 'Phase 1: Foundation (Months 1-3)',
                skills: skillGaps.slice(0, 3),
              },
              {
                title: 'Phase 2: Development (Months 4-6)',
                skills: skillGaps.slice(3, 6),
              },
              {
                title: 'Phase 3: Mastery (Months 7-12)',
                skills: skillGaps.slice(6, 9),
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-purple-800/10 border border-purple-500/30"
              >
                <h4 className="font-semibold text-sm text-purple-300 mb-2">{phase.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {phase.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="cosmic-border">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
