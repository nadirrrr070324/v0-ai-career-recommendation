'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DollarSign, TrendingUp, Users, Briefcase, Target, AlertCircle } from 'lucide-react'

interface Recommendation {
  name: string
  matchPercentage: number
  salaryRange: string
}

interface SalaryNegotiationProps {
  recommendations: Recommendation[]
}

export default function SalaryNegotiationGuide({ recommendations }: SalaryNegotiationProps) {
  const salaryTipsData = {
    'Software Developer': {
      baseSalary: 15,
      salaryRange: '₹8-25 LPA',
      negotiationTips: [
        'Highlight specific projects and impact',
        'Research market rates in your location',
        'Mention certifications and special skills',
        'Discuss performance metrics and achievements',
      ],
      bonusOpportunities: ['Performance bonus', 'Stock options', 'Sign-on bonus', 'Referral bonus'],
    },
    'Data Analyst': {
      baseSalary: 12,
      salaryRange: '₹6-18 LPA',
      negotiationTips: [
        'Showcase data insights you\'ve generated',
        'Mention industry expertise',
        'Highlight analytical skills',
        'Discuss certifications',
      ],
      bonusOpportunities: ['Project bonus', 'Performance incentive', 'Sign-on bonus'],
    },
  }

  const defaultSalaryInfo = {
    baseSalary: 10,
    salaryRange: 'Market dependent',
    negotiationTips: [
      'Research industry standards',
      'Highlight your unique value proposition',
      'Be prepared with data',
      'Practice your pitch beforehand',
    ],
    bonusOpportunities: ['Performance bonus', 'Referral bonus', 'Sign-on bonus'],
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="card-professional">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="w-4 h-4 text-green-400" />
                <span className="text-xs">Average LPA</span>
              </div>
              <p className="text-2xl font-bold text-green-400">
                ₹{Math.round((recommendations.reduce((sum, r) => {
                  const match = r.salaryRange.match(/₹(\d+)/);
                  return sum + (match ? parseInt(match[1]) : 0);
                }, 0) / recommendations.length) || 12)} L
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-professional">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-xs">Market Growth</span>
              </div>
              <p className="text-2xl font-bold text-blue-400">12-18%</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-professional">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="w-4 h-4 text-purple-400" />
                <span className="text-xs">Opportunities</span>
              </div>
              <p className="text-2xl font-bold text-purple-400">{recommendations.length}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-professional">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Target className="w-4 h-4 text-pink-400" />
                <span className="text-xs">Salary Gap</span>
              </div>
              <p className="text-2xl font-bold text-pink-400">₹5-8 L</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="strategies" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-background/30 backdrop-blur">
          <TabsTrigger value="strategies">Negotiation Strategies</TabsTrigger>
          <TabsTrigger value="benefits">Benefits & Perks</TabsTrigger>
          <TabsTrigger value="careers">Career Options</TabsTrigger>
        </TabsList>

        <TabsContent value="strategies" className="space-y-4">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="w-5 h-5" />
                Salary Negotiation Strategies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h4 className="font-semibold text-sm mb-1">1. Research & Prepare</h4>
                  <p className="text-sm text-muted-foreground">
                    Know market rates, your value, and the company's budget range
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-semibold text-sm mb-1">2. Timing is Key</h4>
                  <p className="text-sm text-muted-foreground">
                    Negotiate after offer, during yearly reviews, or after major achievements
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-semibold text-sm mb-1">3. Build Your Case</h4>
                  <p className="text-sm text-muted-foreground">
                    Document achievements, metrics, and unique contributions to the team
                  </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-4 py-2">
                  <h4 className="font-semibold text-sm mb-1">4. Consider Full Package</h4>
                  <p className="text-sm text-muted-foreground">
                    Bonus, benefits, remote work, PTO, and growth opportunities matter
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <h4 className="font-semibold text-sm mb-1">5. Stay Professional</h4>
                  <p className="text-sm text-muted-foreground">
                    Be respectful, listen, and be prepared to walk away if needed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-professional bg-yellow-900/10 border-yellow-500/30">
            <CardContent className="pt-6 flex gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">Pro Tip</h4>
                <p className="text-sm text-muted-foreground">
                  Always ask "What is the salary range for this position?" before providing your expectations
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benefits" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Financial Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {['Performance Bonus (10-30%)', 'Stock Options/ESOP', 'Sign-on Bonus', 'Referral Bonus', 'Annual Increment (10-15%)'].map(
                  (benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  )
                )}
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Work Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {['Remote Work Options', 'Flexible Hours', '20-25 Days PTO', 'Work From Home Allowance', 'Professional Development'].map(
                  (benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  )
                )}
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Growth Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {['Career Growth Path', 'Leadership Training', 'Conference Attendance', 'Internal Mobility', 'Mentorship Program'].map(
                  (benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  )
                )}
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Health & Wellness
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {['Health Insurance', 'Mental Health Support', 'Gym Membership', 'Wellness Programs', 'Retirement Plan'].map(
                  (benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pink-400" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="careers" className="space-y-4">
          <div className="space-y-3">
            {recommendations.map((career, idx) => (
              <Card key={idx} className="card-professional">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{career.name}</h4>
                        <p className="text-sm text-muted-foreground">Expected Salary Range</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">{career.salaryRange}</Badge>
                    </div>
                    <Progress value={career.matchPercentage} className="h-2" />
                    <p className="text-xs text-muted-foreground">Career Match: {career.matchPercentage}%</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
