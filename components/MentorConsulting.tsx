'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import PaymentGateway from './PaymentGateway'
import { Calendar, Clock, Star, Users, Video, MessageSquare } from 'lucide-react'

interface Mentor {
  id: string
  name: string
  title: string
  expertise: string[]
  bio: string
  rating: number
  reviews: number
  hourlyRate: number
  sessionTypes: string[]
  availability: string
}

interface MentorConsultingProps {
  recommendations?: {
    name: string
    mentors: string[]
  }[]
}

export default function MentorConsulting({ recommendations }: MentorConsultingProps) {
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null)
  const [bookedSessions, setBookedSessions] = useState<string[]>([])
  const [selectedDuration, setSelectedDuration] = useState<30 | 60>(60)

  const mentors: Mentor[] = [
    {
      id: 'mentor-1',
      name: 'Sarah Chen',
      title: 'Tech Career Coach',
      expertise: ['Software Development', 'Career Growth', 'Interview Prep'],
      bio: 'Former Google engineer with 10+ years of experience helping professionals navigate tech careers',
      rating: 4.9,
      reviews: 234,
      hourlyRate: 5000,
      sessionTypes: ['Video Call', 'Chat Consultation'],
      availability: 'Weekdays 2-8 PM IST',
    },
    {
      id: 'mentor-2',
      name: 'Raj Patel',
      title: 'Product Manager Coach',
      expertise: ['Product Management', 'Leadership', 'Strategy'],
      bio: 'Ex-Amazon PM helping professionals transition into product management roles',
      rating: 4.8,
      reviews: 189,
      hourlyRate: 4500,
      sessionTypes: ['Video Call', 'Chat Consultation'],
      availability: 'Flexible scheduling',
    },
    {
      id: 'mentor-3',
      name: 'Emma Johnson',
      title: 'Career Strategist',
      expertise: ['Career Planning', 'Executive Coaching', 'Negotiations'],
      bio: 'Career advisor with 15+ years helping professionals achieve their goals',
      rating: 4.9,
      reviews: 312,
      hourlyRate: 6000,
      sessionTypes: ['Video Call', 'Chat Consultation', 'Email Coaching'],
      availability: 'Weekdays & Weekends',
    },
    {
      id: 'mentor-4',
      name: 'Amit Kumar',
      title: 'Data Science Expert',
      expertise: ['Data Science', 'Machine Learning', 'Career Transition'],
      bio: 'Data science leader helping professionals break into the field',
      rating: 4.7,
      reviews: 156,
      hourlyRate: 4000,
      sessionTypes: ['Video Call', 'Chat Consultation'],
      availability: 'Evenings IST',
    },
  ]

  const handleBookSession = (mentorId: string) => {
    setBookedSessions((prev) => [...prev, mentorId])
    setSelectedMentor(null)
  }

  const calculateSessionPrice = (hourlyRate: number, duration: 30 | 60) => {
    return Math.round((hourlyRate * duration) / 60)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8 bounce-in">
        <h2 className="text-3xl font-bold glow-text mb-2">Expert Mentor Consultations</h2>
        <p className="text-muted-foreground">Book 1-on-1 sessions with industry experts to accelerate your career</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {mentors.map((mentor, index) => {
          const isBooked = bookedSessions.includes(mentor.id)
          const isSelected = selectedMentor === mentor.id
          const sessionPrice = calculateSessionPrice(mentor.hourlyRate, selectedDuration)

          return (
            <div key={mentor.id} className="slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className={`card-professional h-full flex flex-col transition-all ${isSelected ? 'ring-2 ring-purple-500 glow-pulse' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <CardTitle className="text-lg">{mentor.name}</CardTitle>
                      <CardDescription className="text-xs">{mentor.title}</CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold">{mentor.rating}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <p className="text-sm text-muted-foreground">{mentor.bio}</p>

                  <div>
                    <p className="text-xs font-semibold text-purple-300 mb-2">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{mentor.reviews} reviews</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{mentor.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MessageSquare className="w-4 h-4" />
                      <span>{mentor.sessionTypes.join(', ')}</span>
                    </div>
                  </div>

                  {isBooked && (
                    <div className="p-3 rounded-lg bg-green-900/20 border border-green-500/30 text-center">
                      <p className="text-sm text-green-300">Session Booked</p>
                    </div>
                  )}

                  {isSelected && !isBooked && (
                    <div className="p-3 rounded-lg bg-purple-900/20 border border-purple-500/30">
                      <p className="text-xs font-semibold mb-2">Session Duration</p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant={selectedDuration === 30 ? 'default' : 'outline'}
                          onClick={() => setSelectedDuration(30)}
                          className="flex-1"
                        >
                          30 min
                        </Button>
                        <Button
                          size="sm"
                          variant={selectedDuration === 60 ? 'default' : 'outline'}
                          onClick={() => setSelectedDuration(60)}
                          className="flex-1"
                        >
                          60 min
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>

                <div className="p-4 border-t border-purple-900/30 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Price for {selectedDuration} min</span>
                    <span className="text-lg font-bold text-purple-300">₹{sessionPrice}</span>
                  </div>
                  {!isBooked && (
                    <Button
                      onClick={() => setSelectedMentor(isSelected ? null : mentor.id)}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <Video className="w-4 h-4 mr-2" />
                      {isSelected ? 'Cancel' : 'Book Session'}
                    </Button>
                  )}
                </div>
              </Card>

              {isSelected && !isBooked && (
                <div className="mt-4 fade-in">
                  <PaymentGateway
                    type="mentor"
                    amount={sessionPrice}
                    description={`Consultation with ${mentor.name} - ${selectedDuration} minutes`}
                    onSuccess={() => handleBookSession(mentor.id)}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <Card className="cosmic-border bg-card/50 backdrop-blur mt-8 bounce-in" style={{ animationDelay: '0.4s' }}>
        <CardHeader>
          <CardTitle>Why Book a Mentor?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span className="text-sm">Get personalized career advice from industry experts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span className="text-sm">Learn insider tips for interviews and negotiations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span className="text-sm">Get feedback on your career strategy and goals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span className="text-sm">Build lasting professional relationships</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
