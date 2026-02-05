'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Award, ExternalLink } from 'lucide-react'

interface Recommendation {
  name: string
  matchPercentage: number
  mentors: string[]
}

interface MentorConnectionsProps {
  recommendations: Recommendation[]
}

export default function MentorConnections({ recommendations }: MentorConnectionsProps) {
  const mentorProfiles: Record<string, { title: string; company: string; specialty: string }> = {
    'Linus Torvalds': {
      title: 'Creator of Linux',
      company: 'Linux Foundation',
      specialty: 'Open-source, System Architecture',
    },
    'Guido van Rossum': {
      title: 'Creator of Python',
      company: 'Independent',
      specialty: 'Programming Languages, Python',
    },
    'Satya Nadella': {
      title: 'CEO',
      company: 'Microsoft',
      specialty: 'Cloud Computing, Leadership',
    },
    'Hilary Mason': {
      title: 'Data Scientist',
      company: 'Cloudera',
      specialty: 'Data Science, Analytics',
    },
    'DJ Patil': {
      title: 'VP, Product',
      company: 'Sequoia Capital',
      specialty: 'Data Science, Product Strategy',
    },
    'Cassie Kozyrkov': {
      title: 'Chief Decision Scientist',
      company: 'Google',
      specialty: 'Decision Science, Analytics',
    },
    'Don Norman': {
      title: 'UX Pioneer',
      company: 'Nielsen Norman Group',
      specialty: 'User Experience, Design Thinking',
    },
    'Jared Spool': {
      title: 'Founder',
      company: 'User Interface Engineering',
      specialty: 'UX Research, Design',
    },
    'Sarah Drasner': {
      title: 'Engineering Manager',
      company: 'Netlify',
      specialty: 'Web Design, Animation',
    },
    'Neil Patel': {
      title: 'Digital Marketing Expert',
      company: 'NeilPatel.com',
      specialty: 'SEO, Digital Marketing',
    },
    'Amy Porterfield': {
      title: 'Digital Marketing Educator',
      company: 'Teachable',
      specialty: 'Email Marketing, Funnels',
    },
    'Gary Vaynerchuk': {
      title: 'Entrepreneur',
      company: 'VaynerX',
      specialty: 'Social Media, Entrepreneurship',
    },
    'Marty Cagan': {
      title: 'Product Management Expert',
      company: 'Silicon Valley Product Group',
      specialty: 'Product Strategy, Innovation',
    },
    'Jeff Gothelf': {
      title: 'Lean Product Expert',
      company: 'Independent',
      specialty: 'Agile, Product Development',
    },
    'Roman Pichler': {
      title: 'Product Coach',
      company: 'Independent',
      specialty: 'Product Strategy, Coaching',
    },
    'Kevin Mitnick': {
      title: 'Security Consultant',
      company: 'Independent',
      specialty: 'Cybersecurity, Hacking',
    },
    'Troy Hunt': {
      title: 'Security Researcher',
      company: 'Independent',
      specialty: 'Web Security, Data Breaches',
    },
    'Bryce Glass': {
      title: 'Security Expert',
      company: 'Independent',
      specialty: 'Cybersecurity, Defense',
    },
    'Charlie Munger': {
      title: 'Vice Chairman',
      company: 'Berkshire Hathaway',
      specialty: 'Finance, Investing, Strategy',
    },
    'Peter Lynch': {
      title: 'Legendary Investor',
      company: 'Independent',
      specialty: 'Stock Picking, Value Investing',
    },
    'Janet Yellen': {
      title: 'Former Federal Reserve Chair',
      company: 'U.S. Government',
      specialty: 'Economics, Finance, Policy',
    },
    'Atul Gawande': {
      title: 'Surgeon & Author',
      company: 'Brigham & Women\'s Hospital',
      specialty: 'Healthcare, Quality Improvement',
    },
    'Eric Topol': {
      title: 'Cardiologist & Innovator',
      company: 'Scripps Research',
      specialty: 'Digital Health, Medicine',
    },
    'Sanjay Gupta': {
      title: 'Medical Correspondent',
      company: 'CNN',
      specialty: 'Healthcare, Communication',
    },
    'Sheryl Sandberg': {
      title: 'Former COO',
      company: 'Meta',
      specialty: 'Leadership, Women in Tech',
    },
    'Marissa Mayer': {
      title: 'Former CEO',
      company: 'Yahoo',
      specialty: 'Technology, Product',
    },
    'Ben Horowitz': {
      title: 'VC & Author',
      company: 'Andreessen Horowitz',
      specialty: 'Startup Strategy, Leadership',
    },
    'Narendra Modi': {
      title: 'Prime Minister',
      company: 'Government of India',
      specialty: 'Public Policy, Governance',
    },
    'Rajeev Chandrashekhar': {
      title: 'Minister',
      company: 'Government of India',
      specialty: 'IT Policy, Digital India',
    },
    'Priti Patel': {
      title: 'Home Secretary',
      company: 'UK Government',
      specialty: 'Public Administration, Policy',
    },
  }

  const allMentors = Array.from(
    new Set(
      recommendations
        .filter((r) => r.matchPercentage > 50)
        .flatMap((r) => r.mentors)
    )
  )

  return (
    <div className="space-y-6">
      {/* Mentor Overview */}
      <Card className="cosmic-border bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-300">
            <Users className="w-5 h-5" />
            Industry Mentor Network
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Learn from and connect with industry leaders in your recommended career paths. These mentors have shaped their respective industries.
          </p>
        </CardContent>
      </Card>

      {/* Top Mentors */}
      <Card className="cosmic-border bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-purple-300">Recommended Mentors for You</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {allMentors.map((mentor) => {
              const profile = mentorProfiles[mentor] || {
                title: 'Industry Expert',
                company: 'Technology',
                specialty: 'General',
              }

              return (
                <div
                  key={mentor}
                  className="border border-purple-500/30 rounded-lg p-4 hover:bg-purple-900/20 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{mentor}</h3>
                      <p className="text-xs text-muted-foreground">{profile.title}</p>
                    </div>
                    <Award className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">
                      <strong>Organization:</strong> {profile.company}
                    </p>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {profile.specialty.split(', ').map((spec) => (
                          <Badge key={spec} className="text-xs cosmic-border bg-purple-900/30">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Mentor Connections by Career */}
      <div className="space-y-4">
        {recommendations.map((career, idx) => (
          <Card key={idx} className="cosmic-border bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg">{career.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Learn from these industry leaders in {career.name}:
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {career.mentors.map((mentor) => {
                    const profile = mentorProfiles[mentor] || {
                      title: 'Expert',
                      company: 'Industry',
                      specialty: 'General',
                    }

                    return (
                      <div
                        key={mentor}
                        className="flex items-center justify-between p-3 bg-purple-900/20 border border-purple-500/20 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-sm">{mentor}</p>
                          <p className="text-xs text-muted-foreground">{profile.title} at {profile.company}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="cosmic-border gap-1 bg-transparent"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Learn
                        </Button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mentorship Tips */}
      <Card className="cosmic-border bg-gradient-to-r from-purple-900/30 to-purple-800/20 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-purple-300">How to Learn from Mentors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2 text-sm">
            <div className="flex gap-3">
              <span className="text-purple-400 font-bold">1.</span>
              <p>Follow their work: Read books, watch talks, follow on social media</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-400 font-bold">2.</span>
              <p>Study their journey: Understand how they achieved success</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-400 font-bold">3.</span>
              <p>Apply their principles: Implement lessons in your career</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-400 font-bold">4.</span>
              <p>Build your network: Connect with community members in your field</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
