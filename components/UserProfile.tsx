'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { User, Mail, Phone, Calendar, Edit2, Save, X, MapPin, Briefcase } from 'lucide-react'

interface ProfileData {
  name: string
  email: string
  phone: string
  dob: string
  education: string
  industry: string
  joinDate: string
}

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState<ProfileData>({
    name: 'John Developer',
    email: 'john@careerig.com',
    phone: '+91 98765 43210',
    dob: '1998-05-15',
    education: 'Bachelor of Technology',
    industry: 'Information Technology',
    joinDate: '2026-01-15',
  })

  const [editForm, setEditForm] = useState(profile)

  const handleEdit = () => {
    setIsEditing(true)
    setEditForm(profile)
  }

  const handleSave = () => {
    setProfile(editForm)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleChange = (field: keyof ProfileData, value: string) => {
    setEditForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <Card className="cosmic-border bg-card/50 backdrop-blur scale-up">
        <CardHeader className="bounce-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="glow-text text-purple-300">{profile.name}</CardTitle>
                <CardDescription>{profile.email}</CardDescription>
              </div>
            </div>
            {!isEditing && (
              <Button onClick={handleEdit} className="bg-purple-600 hover:bg-purple-700">
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </CardHeader>
      </Card>

      <Card className="cosmic-border bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="glow-text text-purple-300">Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isEditing ? (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4" /> Full Name
                </label>
                <Input
                  value={editForm.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="bg-background/50 border-purple-500/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </label>
                <Input
                  value={editForm.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="bg-background/50 border-purple-500/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Phone
                </label>
                <Input
                  value={editForm.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="bg-background/50 border-purple-500/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Date of Birth
                </label>
                <Input
                  type="date"
                  value={editForm.dob}
                  onChange={(e) => handleChange('dob', e.target.value)}
                  className="bg-background/50 border-purple-500/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Education
                </label>
                <Input
                  value={editForm.education}
                  onChange={(e) => handleChange('education', e.target.value)}
                  className="bg-background/50 border-purple-500/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Industry
                </label>
                <Input
                  value={editForm.industry}
                  onChange={(e) => handleChange('industry', e.target.value)}
                  className="bg-background/50 border-purple-500/30"
                />
              </div>

              <div className="flex gap-2 mt-6">
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
                <Button onClick={handleCancel} variant="outline" className="cosmic-border bg-transparent">
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <User className="w-4 h-4" /> Full Name
                </p>
                <p className="text-lg font-semibold">{profile.name}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </p>
                <p className="text-lg font-semibold">{profile.email}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Phone
                </p>
                <p className="text-lg font-semibold">{profile.phone}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Date of Birth
                </p>
                <p className="text-lg font-semibold">{profile.dob}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Education
                </p>
                <p className="text-lg font-semibold">{profile.education}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Industry
                </p>
                <p className="text-lg font-semibold">{profile.industry}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Member Since
                </p>
                <p className="text-lg font-semibold">{profile.joinDate}</p>
              </div>

              <div>
                <Badge className="bg-purple-600 text-white">Active Member</Badge>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
