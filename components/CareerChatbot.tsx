'use client'

import React from "react"

import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Send, Sparkles } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface UserProfile {
  education: string
  skills: string[]
  interests: string[]
  industry: string
  personality: string
}

interface Recommendation {
  name: string
  matchPercentage: number
  description: string
}

interface CareerChatbotProps {
  userProfile: UserProfile
  recommendations: Recommendation[]
}

export default function CareerChatbot({ userProfile, recommendations }: CareerChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hello! I'm your AI Career Advisor. I'm here to help you explore your career path based on your profile and the recommendations we've generated. Feel free to ask me anything about ${recommendations[0]?.name || 'your career'}, skill development, job market trends, or interview preparation. How can I assist you today?`,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    // Career-specific responses
    if (lowerMessage.includes('how to') || lowerMessage.includes('way to') || lowerMessage.includes('steps')) {
      const career = recommendations[0]?.name || 'your career'
      return `To get into ${career}, I recommend: 1) Build a strong foundation in the key skills like ${userProfile.skills.slice(0, 2).join(' and ')}. 2) Create a portfolio of projects showcasing your abilities. 3) Network with professionals in the field and learn from mentors. 4) Stay updated with industry trends and continuously improve. 5) Apply to entry-level positions and be persistent. Would you like specific guidance on any of these steps?`
    }

    if (lowerMessage.includes('skill') || lowerMessage.includes('learn')) {
      return `Based on your profile, your strong skills are ${userProfile.skills.slice(0, 3).join(', ')}. To advance your career, focus on: 1) Deepening expertise in your current strengths 2) Learning complementary skills that align with your interests 3) Getting certifications relevant to your target roles. What specific skill would you like to develop further?`
    }

    if (lowerMessage.includes('salary') || lowerMessage.includes('money') || lowerMessage.includes('pay')) {
      const topCareer = recommendations[0]
      return `Salary ranges vary based on experience level, location, and company size. For ${topCareer?.name || 'your recommended roles'}, typical ranges are competitive with growth potential. The fastest salary growth typically comes from gaining specialized skills and taking on leadership roles. Would you like to know about high-paying specializations in your field?`
    }

    if (lowerMessage.includes('interview') || lowerMessage.includes('prepare') || lowerMessage.includes('question')) {
      return `Great question! For interviews in your target roles, I recommend: 1) Use the STAR method for behavioral questions 2) Practice technical/role-specific questions 3) Research the company thoroughly 4) Prepare thoughtful questions to ask the interviewer 5) Do mock interviews to build confidence. I have a detailed interview guide with specific questions for your roles. Would you like specific preparation tips?`
    }

    if (lowerMessage.includes('alternative') || lowerMessage.includes('other') || lowerMessage.includes('similar')) {
      const otherCareers = recommendations.slice(1, 3)
      const careers = otherCareers.map((c) => c.name).join(' or ')
      return `Based on your profile, other great options include ${careers}. These align well with your interests in ${userProfile.interests.slice(0, 2).join(' and ')} and your ${userProfile.personality} personality type. Would you like to compare any of these with your top recommendation?`
    }

    if (lowerMessage.includes('time') || lowerMessage.includes('how long') || lowerMessage.includes('timeline')) {
      return `The timeline depends on your starting point and commitment level. Typically: Entry-level positions: 6-12 months of focused learning and projects. Building expertise: 2-3 years of hands-on experience. Senior roles: 5+ years of progressive experience. Specialized roles: Additional certifications (3-12 months). Would you like a personalized roadmap based on your current skills?`
    }

    if (lowerMessage.includes('mentor') || lowerMessage.includes('learn from')) {
      const mentors = recommendations[0]?.name || ''
      return `I've provided a list of industry mentors you can learn from. These are accomplished professionals who share insights through books, talks, and social media. The best way to learn from mentors is to: 1) Follow their work regularly 2) Read their books and articles 3) Watch their talks and podcasts 4) Apply their principles to your work 5) Network with their communities. Would you like recommendations on specific mentor resources?`
    }

    if (lowerMessage.includes('market') || lowerMessage.includes('trend') || lowerMessage.includes('demand')) {
      return `The job market is strong for tech and analytical roles. Currently in-demand areas include: AI/ML specialists, Data Scientists, Cybersecurity experts, and Product Managers. Growth opportunities are highest in tech, healthcare, and finance. Skills like Python, data analysis, and cloud computing are highly sought after. Would you like detailed market trends for your specific field?`
    }

    if (lowerMessage.includes('motivation') || lowerMessage.includes('discouraged') || lowerMessage.includes('stuck')) {
      return `It's normal to feel discouraged sometimes! Remember that every successful professional started where you are now. Focus on: 1) Taking small, consistent steps 2) Celebrating small wins 3) Connecting with communities in your field 4) Learning from failures 5) Maintaining a growth mindset. You're already on the right track by exploring and planning your career. What specific challenge are you facing?`
    }

    // Default friendly response
    return `That's a great question! Based on your background in ${userProfile.skills.slice(0, 2).join(' and ')} and your interest in ${userProfile.interests[0]}, I'd say focus on ${recommendations[0]?.name || 'your recommended careers'}. Is there a specific aspect of your career journey you'd like to explore further? I can help with career selection, skill development, interview prep, or market insights.`
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(input),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 600)
  }

  const quickPrompts = [
    "How do I start?",
    "What skills should I learn?",
    "Interview tips please",
    "What's the job market like?",
  ]

  return (
    <div className="space-y-6">
      <Card className="cosmic-border bg-card/50 backdrop-blur h-[600px] flex flex-col overflow-hidden">
        <CardHeader className="pb-3 flex-shrink-0">
          <CardTitle className="flex items-center gap-2 text-purple-300">
            <Sparkles className="w-5 h-5" />
            Career AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
          {/* Messages */}
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-purple-600 text-white rounded-br-none'
                        : 'bg-purple-900/30 border border-purple-500/50 text-muted-foreground rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-purple-900/30 border border-purple-500/50 px-4 py-2 rounded-lg rounded-bl-none">
                    <p className="text-sm text-muted-foreground">
                      <span className="inline-flex gap-1">
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100" />
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200" />
                      </span>
                    </p>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Quick Prompts */}
          {messages.length === 1 && (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <Button
                    key={prompt}
                    size="sm"
                    variant="outline"
                    className="cosmic-border text-xs bg-transparent"
                    onClick={() => {
                      setInput(prompt)
                    }}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSendMessage} className="flex gap-2 flex-shrink-0">
            <Input
              placeholder="Ask me anything about your career..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="cosmic-border bg-input text-sm"
            />
            <Button
              type="submit"
              size="sm"
              disabled={isLoading || !input.trim()}
              className="bg-purple-600 hover:bg-purple-700 text-white cosmic-glow"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="cosmic-border bg-gradient-to-r from-purple-900/30 to-purple-800/20 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-sm text-purple-300">How to Use Your AI Advisor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="flex gap-2">
              <Badge className="flex-shrink-0 bg-purple-600">1</Badge>
              <p className="text-muted-foreground">Ask about career paths and opportunities</p>
            </div>
            <div className="flex gap-2">
              <Badge className="flex-shrink-0 bg-purple-600">2</Badge>
              <p className="text-muted-foreground">Get skill development recommendations</p>
            </div>
            <div className="flex gap-2">
              <Badge className="flex-shrink-0 bg-purple-600">3</Badge>
              <p className="text-muted-foreground">Ask interview and job search questions</p>
            </div>
            <div className="flex gap-2">
              <Badge className="flex-shrink-0 bg-purple-600">4</Badge>
              <p className="text-muted-foreground">Explore job market trends and demands</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
