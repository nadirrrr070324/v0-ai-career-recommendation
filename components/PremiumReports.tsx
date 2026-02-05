'use client'

import React from "react"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import PaymentGateway from './PaymentGateway'
import { Download, FileText, Zap, CheckCircle } from 'lucide-react'

interface Report {
  id: string
  name: string
  description: string
  price: number
  features: string[]
  premium?: boolean
  icon: React.ReactNode
}

interface PremiumReportsProps {
  userProfile?: {
    education: string
    skills: string[]
    interests: string[]
    industry: string
    personality: string
  }
}

export default function PremiumReports({ userProfile }: PremiumReportsProps) {
  const [selectedReport, setSelectedReport] = useState<string | null>(null)
  const [downloadedReports, setDownloadedReports] = useState<string[]>([])

  const reports: Report[] = [
    {
      id: 'basic',
      name: 'Career Summary Report',
      description: 'Quick overview of your career recommendations and match scores',
      price: 99,
      features: ['Top 5 Recommendations', 'Match Percentages', 'Quick Summary', 'PDF Format'],
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: 'detailed',
      name: 'Comprehensive Career Analysis',
      description: 'In-depth analysis with skill gaps, market trends, and growth projections',
      price: 299,
      features: [
        'Detailed Career Analysis',
        'Skill Gap Analysis',
        'Market Trends Data',
        '10-Year Projection',
        'Interview Prep Guide',
        'PDF + Excel Formats',
      ],
      premium: true,
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: 'executive',
      name: 'Executive Career Strategy',
      description: 'Premium report with personalized strategy, mentor matchings, and roadmap',
      price: 499,
      features: [
        'Custom Career Strategy',
        'Mentor Recommendations',
        'Salary Negotiation Guide',
        'Career Roadmap',
        'Action Plans',
        'Priority Support',
        'All Formats (PDF, Excel, CSV)',
      ],
      premium: true,
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ]

  const handlePaymentSuccess = (reportId: string) => {
    setDownloadedReports((prev) => [...prev, reportId])
    setSelectedReport(null)

    // Simulate download
    setTimeout(() => {
      const report = reports.find((r) => r.id === reportId)
      console.log(`[v0] Downloading ${report?.name}`)
    }, 500)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8 bounce-in">
        <h2 className="text-3xl font-bold glow-text mb-2">Premium Career Reports</h2>
        <p className="text-muted-foreground">Download detailed career analysis and personalized recommendations</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reports.map((report, index) => {
          const isDownloaded = downloadedReports.includes(report.id)
          const isSelected = selectedReport === report.id

          return (
            <div key={report.id} className="slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className={`card-professional h-full flex flex-col transition-all ${isSelected ? 'ring-2 ring-purple-500 glow-pulse' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 rounded-lg bg-purple-900/30 text-purple-300">{report.icon}</div>
                    {report.premium && <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">Premium</Badge>}
                  </div>
                  <CardTitle className="text-lg">{report.name}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="text-3xl font-bold text-purple-300">₹{report.price}</div>

                  <ul className="space-y-2">
                    {report.features.map((feature) => (
                      <li key={feature} className="text-sm flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {isDownloaded && (
                    <div className="p-2 rounded-lg bg-green-900/20 border border-green-500/30 text-center">
                      <p className="text-sm text-green-300">Downloaded</p>
                    </div>
                  )}
                </CardContent>

                <div className="p-4 border-t border-purple-900/30">
                  {!isDownloaded && (
                    <Button
                      onClick={() => setSelectedReport(isSelected ? null : report.id)}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {isSelected ? 'Cancel' : 'Download Now'}
                    </Button>
                  )}
                </div>
              </Card>

              {isSelected && (
                <div className="mt-4 fade-in">
                  <PaymentGateway
                    type="report"
                    amount={report.price}
                    description={`Download ${report.name}`}
                    onSuccess={() => handlePaymentSuccess(report.id)}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
