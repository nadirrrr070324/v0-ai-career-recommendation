'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

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

interface CareerComparisonProps {
  recommendations: Recommendation[]
}

export default function CareerComparison({ recommendations }: CareerComparisonProps) {
  const [selected, setSelected] = useState<number[]>([0, 1])

  const selectedCareers = selected
    .filter((i) => i < recommendations.length)
    .map((i) => recommendations[i])

  const toggleSelection = (index: number) => {
    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index].slice(-3)
    )
  }

  return (
    <div className="space-y-6">
      {/* Selection */}
      <Card className="cosmic-border bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-purple-300">Select Careers to Compare</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {recommendations.map((career, index) => (
              <label key={index} className="flex items-center gap-3 p-3 rounded-lg cosmic-border cursor-pointer hover:bg-purple-900/20 transition">
                <Checkbox
                  checked={selected.includes(index)}
                  onCheckedChange={() => toggleSelection(index)}
                />
                <span className="text-sm font-medium">{career.name}</span>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      {selectedCareers.length > 0 && (
        <Card className="cosmic-border bg-card/50 backdrop-blur overflow-hidden">
          <CardHeader>
            <CardTitle className="text-purple-300">
              Detailed Comparison: {selectedCareers.map((c) => c.name).join(' vs ')}
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-purple-500/30">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Aspect</th>
                  {selectedCareers.map((career, i) => (
                    <th key={i} className="text-left py-3 px-4 font-semibold">
                      {career.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/20">
                <tr>
                  <td className="py-3 px-4 font-medium">Match Score</td>
                  {selectedCareers.map((career, i) => (
                    <td key={i} className="py-3 px-4">
                      <Badge className="bg-green-900 text-green-200">{career.matchPercentage}%</Badge>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Salary Range</td>
                  {selectedCareers.map((career, i) => (
                    <td key={i} className="py-3 px-4">
                      <Badge className="bg-blue-900 text-blue-200">{career.salaryRange}</Badge>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Skills to Develop</td>
                  {selectedCareers.map((career, i) => (
                    <td key={i} className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {career.missingSkills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs cosmic-border">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Mentors</td>
                  {selectedCareers.map((career, i) => (
                    <td key={i} className="py-3 px-4 text-xs">
                      {career.mentors.slice(0, 2).join(', ')}
                      {career.mentors.length > 2 && ` +${career.mentors.length - 2} more`}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Roadmap Steps</td>
                  {selectedCareers.map((career, i) => (
                    <td key={i} className="py-3 px-4 text-xs">
                      <ol className="space-y-1">
                        <li>1. {career.learningRoadmap.beginner[0]}</li>
                        <li>2. {career.learningRoadmap.intermediate[0]}</li>
                        <li>3. {career.learningRoadmap.advanced[0]}</li>
                      </ol>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      {selectedCareers.length === 0 && (
        <Card className="cosmic-border bg-card/50 backdrop-blur">
          <CardContent className="py-12">
            <p className="text-center text-muted-foreground">Select careers to compare their details</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
