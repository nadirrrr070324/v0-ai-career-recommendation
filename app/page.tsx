'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import UserInputForm from '@/components/UserInputForm'
import RecommendationResults from '@/components/RecommendationResults'
import CareerComparison from '@/components/CareerComparison'
import SkillTracker from '@/components/SkillTracker'
import JobMarketTrends from '@/components/JobMarketTrends'
import MentorConnections from '@/components/MentorConnections'
import InterviewPrepGuide from '@/components/InterviewPrepGuide'
import CareerChatbot from '@/components/CareerChatbot'
import CareerDetailsModal from '@/components/CareerDetailsModal'
import SalaryNegotiationGuide from '@/components/SalaryNegotiationGuide'
import ExportReport from '@/components/ExportReport'
import AISystemManager from '@/components/AISystemManager'
import PersonalityMatcher from '@/components/PersonalityMatcher'
import CareerPathPrediction from '@/components/CareerPathPrediction'
import PremiumReports from '@/components/PremiumReports'
import MentorConsulting from '@/components/MentorConsulting'
import { Sparkles, Zap, Download, TrendingUp, MessageSquare, Bookmark, Brain, CreditCard } from 'lucide-react'

interface UserProfile {
  education: string
  skills: string[]
  interests: string[]
  industry: string
  personality: string
}

interface CareerRecommendation {
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

export default function Page() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([])
  const [activeTab, setActiveTab] = useState('input')
  const [overallReadiness, setOverallReadiness] = useState(0)
  const [selectedCareer, setSelectedCareer] = useState<CareerRecommendation | null>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [savedCareers, setSavedCareers] = useState<string[]>([])
  const [showAIMenu, setShowAIMenu] = useState(false)

  const careerDatabase = [
    {
      name: 'Software Developer',
      skills: 'programming, problem-solving, debugging, version control',
      interests: 'technology, coding, innovation, automation',
      education: ['Diploma', 'Graduate', 'Postgraduate'],
      industry: 'IT',
      description: 'Build and maintain software applications using various programming languages and frameworks.',
      salaryRange: '₹8-25 LPA',
      mentors: 'Linus Torvalds, Guido van Rossum, Satya Nadella',
    },
    {
      name: 'Data Analyst',
      skills: 'data analysis, SQL, Excel, visualization, Python',
      interests: 'data, insights, analytics, statistics',
      education: ['Diploma', 'Graduate', 'Postgraduate'],
      industry: 'IT',
      description: 'Analyze complex data sets to help organizations make informed business decisions.',
      salaryRange: '₹6-18 LPA',
      mentors: 'Hilary Mason, DJ Patil, Cassie Kozyrkov',
    },
    {
      name: 'UI/UX Designer',
      skills: 'design thinking, Figma, prototyping, user research, creativity',
      interests: 'design, user experience, aesthetics, creativity',
      education: ['Diploma', 'Graduate', 'Postgraduate'],
      industry: 'Design',
      description: 'Create intuitive and beautiful user interfaces for web and mobile applications.',
      salaryRange: '₹5-16 LPA',
      mentors: 'Don Norman, Jared Spool, Sarah Drasner',
    },
    {
      name: 'Digital Marketer',
      skills: 'SEO, social media, analytics, copywriting, strategy',
      interests: 'marketing, social media, trends, creativity',
      education: ['High School', 'Diploma', 'Graduate', 'Postgraduate'],
      industry: 'Marketing',
      description: 'Develop and execute digital marketing strategies to promote brands and products.',
      salaryRange: '₹4-14 LPA',
      mentors: 'Neil Patel, Amy Porterfield, Gary Vaynerchuk',
    },
    {
      name: 'Business Analyst',
      skills: 'analysis, communication, problem-solving, business acumen, documentation',
      interests: 'business, strategy, process improvement, data',
      education: ['Graduate', 'Postgraduate'],
      industry: 'Finance',
      description: 'Bridge the gap between business needs and technical solutions through analysis and strategy.',
      salaryRange: '₹7-22 LPA',
      mentors: 'Marty Cagan, Jeff Gothelf, Roman Pichler',
    },
    {
      name: 'Cybersecurity Analyst',
      skills: 'networking, Linux, security protocols, programming, threat analysis',
      interests: 'security, technology, problem-solving, protection',
      education: ['Diploma', 'Graduate', 'Postgraduate'],
      industry: 'IT',
      description: 'Protect organizational systems and data from cyber threats and attacks.',
      salaryRange: '₹8-28 LPA',
      mentors: 'Kevin Mitnick, Troy Hunt, Bryce Glass',
    },
    {
      name: 'Financial Analyst',
      skills: 'financial modeling, Excel, data analysis, accounting, communication',
      interests: 'finance, markets, investing, numbers',
      education: ['Graduate', 'Postgraduate'],
      industry: 'Finance',
      description: 'Analyze financial data and provide insights for investment and business decisions.',
      salaryRange: '₹6-24 LPA',
      mentors: 'Charlie Munger, Peter Lynch, Janet Yellen',
    },
    {
      name: 'Healthcare Administrator',
      skills: 'organization, communication, healthcare knowledge, compliance, leadership',
      interests: 'healthcare, organization, helping others, administration',
      education: ['Graduate', 'Postgraduate'],
      industry: 'Healthcare',
      description: 'Manage healthcare facilities and ensure efficient, compliant operations.',
      salaryRange: '₹5-18 LPA',
      mentors: 'Atul Gawande, Eric Topol, Sanjay Gupta',
    },
    {
      name: 'Product Manager',
      skills: 'strategy, leadership, analytics, communication, user empathy',
      interests: 'innovation, strategy, business, user needs',
      education: ['Graduate', 'Postgraduate'],
      industry: 'IT',
      description: 'Lead product development and strategy from conception to market launch.',
      salaryRange: '₹10-30 LPA',
      mentors: 'Sheryl Sandberg, Marissa Mayer, Ben Horowitz',
    },
    {
      name: 'Government Officer',
      skills: 'administration, communication, policy knowledge, ethics, leadership',
      interests: 'government, policy, public service, administration',
      education: ['Graduate', 'Postgraduate'],
      industry: 'Government',
      description: 'Serve the public and implement government policies and programs.',
      salaryRange: '₹4.5-15 LPA',
      mentors: 'Narendra Modi, Rajeev Chandrashekhar, Priti Patel',
    },
  ]

  const calculateRecommendations = (profile: UserProfile) => {
    const recommendations: CareerRecommendation[] = careerDatabase.map((career) => {
      const skillMatches = profile.skills.filter((skill) =>
        career.skills.toLowerCase().includes(skill.toLowerCase())
      ).length
      const interestMatches = profile.interests.filter((interest) =>
        career.interests.toLowerCase().includes(interest.toLowerCase())
      ).length
      const educationMatch = career.education.includes(profile.education) ? 1 : 0
      const industryMatch = career.industry === profile.industry || profile.industry === 'Any' ? 1 : 0

      const ruleScore =
        skillMatches * 2 + interestMatches * 1 + educationMatch * 1 + industryMatch * 1
      const baseScore = Math.min((ruleScore / 15) * 100, 100)
      const matchPercentage = Math.round(baseScore)

      return {
        name: career.name,
        matchPercentage,
        description: career.description,
        salaryRange: career.salaryRange,
        whyRecommended: `Strong match based on your ${skillMatches} relevant skills and ${interestMatches} shared interests. Your ${profile.education} education aligns well with this career path.`,
        missingSkills: career.skills
          .split(', ')
          .filter(
            (skill) =>
              !profile.skills.some((s) => s.toLowerCase().includes(skill.toLowerCase()))
          )
          .slice(0, 3),
        learningRoadmap: {
          beginner: [
            `Learn ${career.skills.split(',')[0].trim()}`,
            `Understand ${career.name} fundamentals`,
            'Complete online courses',
          ],
          intermediate: [
            'Build practical projects',
            'Gain hands-on experience',
            'Develop specialized skills',
          ],
          advanced: [
            'Master complex concepts',
            'Lead projects independently',
            'Mentor junior professionals',
          ],
        },
        mentors: career.mentors.split(', '),
      }
    })

    return recommendations.sort((a, b) => b.matchPercentage - a.matchPercentage).slice(0, 5)
  }

  const handleFormSubmit = (profile: UserProfile) => {
    setUserProfile(profile)
    const recs = calculateRecommendations(profile)
    setRecommendations(recs)
    const avgReadiness = Math.round(
      recs.reduce((sum, r) => sum + r.matchPercentage, 0) / recs.length
    )
    setOverallReadiness(avgReadiness)
    
    // Auto-shift with animation
    setTimeout(() => {
      setActiveTab('results')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 300)
  }

  const handleCareerDetailsClick = (career: CareerRecommendation) => {
    setSelectedCareer(career)
    setShowDetailsModal(true)
  }

  const toggleSaveCareer = (careerName: string) => {
    setSavedCareers((prev) =>
      prev.includes(careerName) ? prev.filter((c) => c !== careerName) : [...prev, careerName]
    )
  }

  return (
    <div className="min-h-screen stars-background bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Professional Header */}
      <header className="border-b border-purple-900/30 bg-background/50 backdrop-blur-sm sticky top-0 z-40 slide-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <div className="p-2 rounded-lg cosmic-glow glow-pulse">
                <Sparkles className="w-6 h-6 text-purple-400 animate-spin" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold glow-text">CareerIQ</h1>
                <p className="text-xs md:text-sm text-muted-foreground">AI-powered career intelligence platform</p>
              </div>
            </div>
            
            {/* AI Quick Commands */}
            <div className="relative">
              <Button
                onClick={() => setShowAIMenu(!showAIMenu)}
                className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                AI Shortcuts
              </Button>
              
              {showAIMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-card border cosmic-border rounded-lg shadow-lg z-50">
                  <div className="p-2 space-y-1">
                    <button
                      onClick={() => {
                        setActiveTab('chat')
                        setShowAIMenu(false)
                      }}
                      className="w-full text-left px-3 py-2 rounded hover:bg-purple-900/30 text-sm flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Ask Career Questions
                    </button>
                    <button
                      onClick={() => {
                        if (recommendations.length > 0) {
                          setActiveTab('comparison')
                          setShowAIMenu(false)
                        }
                      }}
                      className="w-full text-left px-3 py-2 rounded hover:bg-purple-900/30 text-sm flex items-center gap-2"
                    >
                      <TrendingUp className="w-4 h-4" />
                      Compare Careers
                    </button>
                    <button
                      onClick={() => {
                        if (recommendations.length > 0) {
                          setActiveTab('interview')
                          setShowAIMenu(false)
                        }
                      }}
                      className="w-full text-left px-3 py-2 rounded hover:bg-purple-900/30 text-sm flex items-center gap-2"
                    >
                      <Bookmark className="w-4 h-4" />
                      Interview Prep
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pb-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 lg:grid-cols-12 mb-8 bg-background/30 backdrop-blur">
            <TabsTrigger value="input">Start</TabsTrigger>
            <TabsTrigger value="results" disabled={!userProfile}>
              Results
            </TabsTrigger>
            <TabsTrigger value="comparison" disabled={!userProfile}>
              Compare
            </TabsTrigger>
            <TabsTrigger value="skills" disabled={!userProfile}>
              Skills
            </TabsTrigger>
            <TabsTrigger value="trends" disabled={!userProfile}>
              Trends
            </TabsTrigger>
            <TabsTrigger value="mentors" disabled={!userProfile}>
              Mentors
            </TabsTrigger>
            <TabsTrigger value="interview" disabled={!userProfile}>
              Interview
            </TabsTrigger>
            <TabsTrigger value="salary" disabled={!userProfile}>
              Salary
            </TabsTrigger>
            <TabsTrigger value="export" disabled={!userProfile}>
              Export
            </TabsTrigger>
            <TabsTrigger value="chat" disabled={!userProfile}>
              Chat
            </TabsTrigger>
            <TabsTrigger value="details" disabled={!selectedCareer}>
              Details
            </TabsTrigger>
            <TabsTrigger value="ai" disabled={!userProfile} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20">
              AI Analysis
            </TabsTrigger>
            <TabsTrigger value="premium" disabled={!userProfile} className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20">
              Reports
            </TabsTrigger>
            <TabsTrigger value="mentors-paid" disabled={!userProfile} className="bg-gradient-to-r from-green-600/20 to-emerald-600/20">
              Mentors
            </TabsTrigger>
          </TabsList>

          {/* Input Form Tab */}
          <TabsContent value="input" className="space-y-6 fade-in">
            <Card className="cosmic-border bg-card/50 backdrop-blur scale-up">
              <CardHeader className="bounce-in">
                <CardTitle className="glow-text text-purple-300">Career discovery journey</CardTitle>
                <CardDescription>
                  Share your education, skills, and interests to discover your ideal career path
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UserInputForm onSubmit={handleFormSubmit} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6 fade-in">
            {userProfile && (
              <>
                <Card className="cosmic-border bg-card/50 backdrop-blur scale-up">
                  <CardHeader className="bounce-in">
                    <CardTitle className="glow-text text-purple-300">Your career readiness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Overall career readiness</span>
                        <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white animate-pulse">{overallReadiness}%</Badge>
                      </div>
                      <Progress value={overallReadiness} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
                <RecommendationResults 
                  recommendations={recommendations} 
                  userProfile={userProfile}
                  onSelectCareer={handleCareerDetailsClick}
                />
              </>
            )}
          </TabsContent>

          {/* Comparison Tab */}
          <TabsContent value="comparison" className="space-y-6">
            {userProfile && <CareerComparison recommendations={recommendations} />}
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            {userProfile && (
              <SkillTracker userProfile={userProfile} recommendations={recommendations} />
            )}
          </TabsContent>

          {/* Trends Tab */}
          <TabsContent value="trends" className="space-y-6">
            {userProfile && <JobMarketTrends recommendations={recommendations} />}
          </TabsContent>

          {/* Mentors Tab */}
          <TabsContent value="mentors" className="space-y-6">
            {userProfile && <MentorConnections recommendations={recommendations} />}
          </TabsContent>

          {/* Interview Tab */}
          <TabsContent value="interview" className="space-y-6">
            {userProfile && (
              <InterviewPrepGuide recommendations={recommendations} />
            )}
          </TabsContent>

          {/* Salary & Negotiation Tab */}
          <TabsContent value="salary" className="space-y-6">
            {userProfile && <SalaryNegotiationGuide recommendations={recommendations} />}
          </TabsContent>

          {/* Export & Reports Tab */}
          <TabsContent value="export" className="space-y-6">
            {userProfile && (
              <ExportReport
                userProfile={userProfile}
                recommendations={recommendations}
                savedCareers={savedCareers}
              />
            )}
          </TabsContent>

          {/* Career Details Modal Tab */}
          <TabsContent value="details" className="space-y-6">
            {selectedCareer && (
              <CareerDetailsModal
                career={selectedCareer}
                isSaved={savedCareers.includes(selectedCareer.name)}
                onToggleSave={() => toggleSaveCareer(selectedCareer.name)}
              />
            )}
          </TabsContent>

          {/* Chat Tab */}
          <TabsContent value="chat" className="space-y-6">
            {userProfile && <CareerChatbot userProfile={userProfile} recommendations={recommendations} />}
          </TabsContent>

          {/* AI Analysis Tab - After All Analysis */}
          <TabsContent value="ai" className="space-y-6 fade-in">
            {userProfile && (
              <>
                <Card className="cosmic-border bg-card/50 backdrop-blur scale-up border-2 border-purple-500/50">
                  <CardHeader className="bounce-in">
                    <CardTitle className="glow-text text-purple-300">AI-powered deep analysis</CardTitle>
                    <CardDescription>
                      Comprehensive AI insights based on all your career analysis results
                    </CardDescription>
                  </CardHeader>
                </Card>
                <AISystemManager userProfile={userProfile} recommendations={recommendations} />
                <CareerPathPrediction recommendations={recommendations} />
                <PersonalityMatcher userProfile={userProfile} recommendations={recommendations} />
              </>
            )}
          </TabsContent>

          {/* Premium Reports Tab */}
          <TabsContent value="premium" className="space-y-6 fade-in">
            {userProfile && <PremiumReports userProfile={userProfile} />}
          </TabsContent>

          {/* Mentor Consulting Tab */}
          <TabsContent value="mentors-paid" className="space-y-6 fade-in">
            {userProfile && <MentorConsulting recommendations={recommendations} />}
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-900/30 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>CareerIQ © 2026 | Powered by AI • Guided by Data • Inspired by Your Future</p>
        </div>
      </footer>
    </div>
  )
}
