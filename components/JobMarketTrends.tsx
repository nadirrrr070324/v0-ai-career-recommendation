'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown, Zap } from 'lucide-react'

interface Recommendation {
  name: string
  matchPercentage: number
  salaryRange: string
}

interface JobMarketTrendsProps {
  recommendations: Recommendation[]
}

export default function JobMarketTrends({ recommendations }: JobMarketTrendsProps) {
  const marketData: Record<string, { growth: number; demand: string; salaryGrowth: number }> = {
    'Software Developer': { growth: 22, demand: 'Very High', salaryGrowth: 12 },
    'Data Analyst': { growth: 28, demand: 'Very High', salaryGrowth: 15 },
    'UI/UX Designer': { growth: 18, demand: 'High', salaryGrowth: 10 },
    'Digital Marketer': { growth: 15, demand: 'High', salaryGrowth: 8 },
    'Business Analyst': { growth: 14, demand: 'High', salaryGrowth: 9 },
    'Cybersecurity Analyst': { growth: 33, demand: 'Critical', salaryGrowth: 18 },
    'Financial Analyst': { growth: 16, demand: 'High', salaryGrowth: 11 },
    'Healthcare Administrator': { growth: 16, demand: 'High', salaryGrowth: 7 },
    'Product Manager': { growth: 12, demand: 'High', salaryGrowth: 14 },
    'Government Officer': { growth: 8, demand: 'Moderate', salaryGrowth: 5 },
  }

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'Critical':
        return 'bg-red-900 text-red-200'
      case 'Very High':
        return 'bg-green-900 text-green-200'
      case 'High':
        return 'bg-blue-900 text-blue-200'
      default:
        return 'bg-yellow-900 text-yellow-200'
    }
  }

  return (
    <div className="space-y-6">
      {/* Market Overview */}
      <Card className="cosmic-border bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-purple-300">Job Market Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Explore current market trends for your recommended careers. Data based on 2025 industry analysis.
          </p>
        </CardContent>
      </Card>

      {/* Trends by Career */}
      <div className="grid gap-4">
        {recommendations.map((career, index) => {
          const data = marketData[career.name] || {
            growth: 12,
            demand: 'Moderate',
            salaryGrowth: 8,
          }

          return (
            <Card key={index} className="cosmic-border bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="grid gap-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{career.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{career.salaryRange}</p>
                    </div>
                    <Badge className={getDemandColor(data.demand)}>{data.demand}</Badge>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {/* Growth Rate */}
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-muted-foreground">5-Year Growth</span>
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="text-2xl font-bold text-green-400">{data.growth}%</div>
                      <p className="text-xs text-muted-foreground mt-1">Projected industry growth</p>
                    </div>

                    {/* Market Demand */}
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-muted-foreground">Market Demand</span>
                        <Zap className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="text-lg font-bold text-blue-400">{data.demand}</div>
                      <p className="text-xs text-muted-foreground mt-1">Current hiring activity</p>
                    </div>

                    {/* Salary Growth */}
                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-muted-foreground">Salary Growth</span>
                        <TrendingUp className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div className="text-2xl font-bold text-yellow-400">{data.salaryGrowth}%</div>
                      <p className="text-xs text-muted-foreground mt-1">Annual salary increase</p>
                    </div>
                  </div>

                  {/* Insights */}
                  <div className="border-t border-purple-500/20 pt-3">
                    <p className="text-xs text-muted-foreground">
                      {data.growth > 20 && '🚀 High growth potential - strong future prospects'}
                      {data.growth > 15 && data.growth <= 20 && '📈 Steady growth with good opportunities'}
                      {data.growth <= 15 && '💼 Stable market with consistent opportunities'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Market Summary */}
      <Card className="cosmic-border bg-gradient-to-r from-purple-900/30 to-purple-800/20 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-purple-300">Industry Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm">High-Growth Sectors</p>
              <p className="text-xs text-muted-foreground">Data Science, Cybersecurity, and AI/ML roles show 25%+ growth</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm">Salary Trends</p>
              <p className="text-xs text-muted-foreground">Tech roles leading with 10-15% annual salary increases</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Badge className="bg-purple-600 text-white text-xs">Tip</Badge>
            <div>
              <p className="font-medium text-sm">Future-Proof Skills</p>
              <p className="text-xs text-muted-foreground">Focus on AI literacy, data analysis, and adaptability</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
