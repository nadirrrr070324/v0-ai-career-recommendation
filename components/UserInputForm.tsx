'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent } from '@/components/ui/card'

interface UserInputFormProps {
  onSubmit: (profile: {
    education: string
    skills: string[]
    interests: string[]
    industry: string
    personality: string
  }) => void
}

export default function UserInputForm({ onSubmit }: UserInputFormProps) {
  const [education, setEducation] = useState('')
  const [skills, setSkills] = useState('')
  const [interests, setInterests] = useState('')
  const [industry, setIndustry] = useState('')
  const [personality, setPersonality] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!education || !skills.trim() || !interests.trim() || !industry || !personality) {
      setError('Please fill in all fields')
      return
    }

    const skillsArray = skills.split(',').map((s) => s.trim()).filter(Boolean)
    const interestsArray = interests.split(',').map((s) => s.trim()).filter(Boolean)

    if (skillsArray.length === 0 || interestsArray.length === 0) {
      setError('Please enter at least one skill and one interest')
      return
    }

    onSubmit({
      education,
      skills: skillsArray,
      interests: interestsArray,
      industry,
      personality,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/50 text-red-300">
          {error}
        </div>
      )}

      {/* Education Level */}
      <div className="space-y-3">
        <Label htmlFor="education" className="text-base font-medium">
          Education Level
        </Label>
        <Select value={education} onValueChange={setEducation}>
          <SelectTrigger id="education" className="cosmic-border bg-input">
            <SelectValue placeholder="Select your education level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="High School">High School</SelectItem>
            <SelectItem value="Diploma">Diploma</SelectItem>
            <SelectItem value="Graduate">Graduate (Bachelor's)</SelectItem>
            <SelectItem value="Postgraduate">Postgraduate (Master's/PhD)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Skills */}
      <div className="space-y-3">
        <Label htmlFor="skills" className="text-base font-medium">
          Skills (comma-separated)
        </Label>
        <Input
          id="skills"
          placeholder="e.g., Python, Web Design, Communication, Data Analysis"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="cosmic-border bg-input"
        />
        <p className="text-xs text-muted-foreground">Enter your technical and soft skills separated by commas</p>
      </div>

      {/* Interests */}
      <div className="space-y-3">
        <Label htmlFor="interests" className="text-base font-medium">
          Interests (comma-separated)
        </Label>
        <Input
          id="interests"
          placeholder="e.g., Technology, Healthcare, Finance, Creative Design"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          className="cosmic-border bg-input"
        />
        <p className="text-xs text-muted-foreground">What topics excite you?</p>
      </div>

      {/* Preferred Industry */}
      <div className="space-y-3">
        <Label htmlFor="industry" className="text-base font-medium">
          Preferred Industry
        </Label>
        <Select value={industry} onValueChange={setIndustry}>
          <SelectTrigger id="industry" className="cosmic-border bg-input">
            <SelectValue placeholder="Select preferred industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="IT">Information Technology</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="Healthcare">Healthcare</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            <SelectItem value="Design">Design</SelectItem>
            <SelectItem value="Government">Government</SelectItem>
            <SelectItem value="Any">Any / Open to All</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Personality Type */}
      <div className="space-y-3">
        <Label className="text-base font-medium">Personality Type</Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Logical', 'Creative', 'Social'].map((type) => (
            <Card
              key={type}
              className={`cursor-pointer transition-all cosmic-border ${
                personality === type
                  ? 'bg-purple-600/30 border-purple-500'
                  : 'bg-card/30 hover:bg-card/50'
              }`}
              onClick={() => setPersonality(type)}
            >
              <CardContent className="p-4 text-center">
                <p className="font-medium">{type}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {type === 'Logical' && 'Data-driven, analytical thinking'}
                  {type === 'Creative' && 'Innovative, artistic expression'}
                  {type === 'Social' && 'People-focused, collaborative'}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-2 h-auto cosmic-glow"
      >
        Discover My Careers
      </Button>
    </form>
  )
}
