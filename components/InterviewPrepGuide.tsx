'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, HelpCircle, Lightbulb } from 'lucide-react'

interface Recommendation {
  name: string
  matchPercentage: number
  description: string
}

interface InterviewPrepGuideProps {
  recommendations: Recommendation[]
}

export default function InterviewPrepGuide({ recommendations }: InterviewPrepGuideProps) {
  const interviewQuestions: Record<string, string[]> = {
    'Software Developer': [
      'Tell me about a complex coding problem you solved and your approach.',
      'What programming languages are you most proficient in?',
      'How do you approach debugging and troubleshooting?',
      'Describe your experience with version control systems.',
      'How do you stay updated with new programming trends?',
      'Tell me about a project you\'re proud of.',
      'What is your experience with software testing?',
      'How do you handle code reviews?',
    ],
    'Data Analyst': [
      'Walk me through your experience with data analysis tools.',
      'Tell me about a dataset you analyzed and key insights found.',
      'How do you approach data cleaning and preparation?',
      'What\'s your experience with SQL and databases?',
      'How do you visualize data for different audiences?',
      'Describe a time you had to present data findings.',
      'What statistical concepts are you familiar with?',
      'How do you validate your analysis results?',
    ],
    'UI/UX Designer': [
      'Walk me through your design process.',
      'Tell me about a design project and your role.',
      'How do you approach user research?',
      'What design tools are you proficient with?',
      'How do you handle design feedback and iterations?',
      'Describe a time you had to make a difficult design decision.',
      'How do you ensure accessibility in your designs?',
      'What\'s your experience with prototyping?',
    ],
    'Digital Marketer': [
      'Tell me about a successful marketing campaign you\'ve run.',
      'How do you measure marketing ROI?',
      'What\'s your experience with SEO and SEM?',
      'How do you develop a content strategy?',
      'Describe your social media management experience.',
      'How do you stay updated with marketing trends?',
      'Tell me about your analytics and reporting skills.',
      'How do you segment audiences for targeting?',
    ],
    'Business Analyst': [
      'Describe your experience gathering and analyzing requirements.',
      'Walk me through how you\'ve documented business processes.',
      'Tell me about a time you identified process improvements.',
      'How do you prioritize competing business needs?',
      'What\'s your experience with stakeholder management?',
      'Describe your experience with data analysis.',
      'How do you translate business needs into technical requirements?',
      'Tell me about your reporting and presentation skills.',
    ],
    'Cybersecurity Analyst': [
      'What\'s your experience with security protocols and standards?',
      'Describe a security incident you\'ve handled.',
      'What are your favorite cybersecurity tools?',
      'Tell me about your experience with penetration testing.',
      'How do you stay updated with security threats?',
      'Describe your experience with firewalls and networks.',
      'What\'s your approach to security awareness training?',
      'Tell me about your experience with compliance frameworks.',
    ],
    'Financial Analyst': [
      'Walk me through your experience with financial modeling.',
      'Tell me about a financial analysis you\'ve performed.',
      'What\'s your experience with Excel and financial tools?',
      'Describe your knowledge of accounting principles.',
      'How do you analyze investment opportunities?',
      'Tell me about your stock or market analysis experience.',
      'Describe your experience with financial forecasting.',
      'What\'s your approach to valuation analysis?',
    ],
    'Healthcare Administrator': [
      'Describe your experience in healthcare operations.',
      'Tell me about healthcare compliance and regulations you know.',
      'How have you improved patient experience or outcomes?',
      'What\'s your experience with healthcare IT systems?',
      'Describe your experience managing budgets.',
      'Tell me about your experience with staff management.',
      'How do you handle healthcare quality improvements?',
      'What\'s your experience with insurance and billing?',
    ],
    'Product Manager': [
      'Walk me through your product development experience.',
      'Tell me about a product you brought to market.',
      'How do you approach user research and feedback?',
      'Describe your experience with product strategy.',
      'How do you prioritize product features?',
      'Tell me about your experience with cross-functional teams.',
      'How do you measure product success?',
      'Describe your competitive analysis approach.',
    ],
    'Government Officer': [
      'Why are you interested in public service?',
      'Tell me about your knowledge of government policies.',
      'Describe your experience with public administration.',
      'How have you served the community?',
      'Tell me about your experience with compliance.',
      'How do you approach problem-solving in bureaucratic settings?',
      'Describe your experience with stakeholder management.',
      'Tell me about your integrity and ethics approach.',
    ],
  }

  const tipsByRole: Record<string, string[]> = {
    'Software Developer': [
      'Be prepared for technical coding questions',
      'Show your GitHub projects or portfolio',
      'Demonstrate problem-solving approach',
      'Discuss your learning journey',
      'Show enthusiasm for technology',
    ],
    'Data Analyst': [
      'Prepare specific data project examples',
      'Understand SQL query optimization',
      'Be ready to discuss visualization choices',
      'Know your metrics and KPIs',
      'Show analytical thinking',
    ],
    'UI/UX Designer': [
      'Bring a strong portfolio',
      'Be ready to discuss design decisions',
      'Show user research understanding',
      'Demonstrate design thinking process',
      'Know current design trends',
    ],
    'Digital Marketer': [
      'Have metrics-focused examples ready',
      'Know your marketing tools well',
      'Show creative thinking',
      'Be data-driven in explanations',
      'Demonstrate trend awareness',
    ],
    'Business Analyst': [
      'Have requirement documentation examples',
      'Show process improvement thinking',
      'Understand stakeholder management',
      'Be able to bridge business and tech',
      'Have clear communication examples',
    ],
    'Cybersecurity Analyst': [
      'Show security certifications',
      'Have incident response examples',
      'Know compliance frameworks',
      'Demonstrate threat analysis',
      'Show proactive security thinking',
    ],
    'Financial Analyst': [
      'Know Excel advanced functions',
      'Have financial modeling examples',
      'Understand valuation methods',
      'Be able to explain markets clearly',
      'Show attention to detail',
    ],
    'Healthcare Administrator': [
      'Know healthcare regulations',
      'Have operational improvement examples',
      'Show patient care focus',
      'Understand healthcare technology',
      'Demonstrate ethical leadership',
    ],
    'Product Manager': [
      'Have product strategy examples',
      'Show user-centric thinking',
      'Understand metrics and analytics',
      'Have roadmap planning experience',
      'Know competitive landscape',
    ],
    'Government Officer': [
      'Show public service commitment',
      'Know current government policies',
      'Have community work examples',
      'Demonstrate ethical standards',
      'Show systems thinking ability',
    ],
  }

  return (
    <div className="space-y-6">
      {/* Preparation Overview */}
      <Card className="cosmic-border bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-300">
            <Lightbulb className="w-5 h-5" />
            Interview Preparation Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Prepare effectively for interviews with role-specific questions, tips, and strategies to showcase your best self.
          </p>
        </CardContent>
      </Card>

      {/* Interview Guide by Career */}
      <div className="space-y-4">
        {recommendations.map((career, idx) => {
          const questions = interviewQuestions[career.name] || []
          const tips = tipsByRole[career.name] || []

          return (
            <Card key={idx} className="cosmic-border bg-card/50 backdrop-blur overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-purple-300">{career.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Common Questions */}
                <div>
                  <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-400" />
                    Common Interview Questions
                  </h4>
                  <ul className="space-y-2">
                    {questions.slice(0, 4).map((q, i) => (
                      <li
                        key={i}
                        className="p-3 bg-purple-900/20 border border-purple-500/20 rounded-lg text-sm"
                      >
                        <p className="text-purple-300 font-medium mb-1">Q{i + 1}:</p>
                        <p className="text-muted-foreground">{q}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interview Tips */}
                <div>
                  <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Role-Specific Tips
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {tips.map((tip, i) => (
                      <div
                        key={i}
                        className="p-3 bg-green-900/20 border border-green-500/20 rounded-lg flex gap-2"
                      >
                        <span className="text-green-400 font-bold text-sm">✓</span>
                        <p className="text-sm text-muted-foreground">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Answer Strategy */}
                <div className="border-t border-purple-500/20 pt-4">
                  <h4 className="font-semibold text-sm mb-2">Answer Strategy: STAR Method</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex gap-2">
                      <Badge className="bg-purple-600">S</Badge>
                      <p><strong>Situation:</strong> Set the context for your story</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-purple-600">T</Badge>
                      <p><strong>Task:</strong> Describe the challenge or objective</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-purple-600">A</Badge>
                      <p><strong>Action:</strong> Explain what you did specifically</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-purple-600">R</Badge>
                      <p><strong>Result:</strong> Share the positive outcomes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* General Interview Tips */}
      <Card className="cosmic-border bg-gradient-to-r from-purple-900/30 to-purple-800/20 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-purple-300">Universal Interview Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex gap-3">
              <span className="text-green-400">✓</span>
              <p>Research the company thoroughly beforehand</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400">✓</span>
              <p>Practice your answers with a mock interview</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400">✓</span>
              <p>Arrive early (or log in early for virtual)</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400">✓</span>
              <p>Maintain professional body language</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400">✓</span>
              <p>Ask thoughtful questions at the end</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400">✓</span>
              <p>Follow up with a thank you email</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
