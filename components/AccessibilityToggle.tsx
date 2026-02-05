'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Volume2, Eye, Type, Lightbulb, Contrast, Settings } from 'lucide-react'

interface AccessibilitySettings {
  screenReader: boolean
  highContrast: boolean
  dyslexiaFont: boolean
  largeText: boolean
  reduceMotion: boolean
  textSize: 'normal' | 'large' | 'extra-large'
  soundNotifications: boolean
}

export default function AccessibilityToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState<AccessibilitySettings>({
    screenReader: false,
    highContrast: false,
    dyslexiaFont: false,
    largeText: false,
    reduceMotion: false,
    textSize: 'normal',
    soundNotifications: false,
  })

  const handleToggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleTextSizeChange = (size: 'normal' | 'large' | 'extra-large') => {
    setSettings((prev) => ({
      ...prev,
      textSize: size,
    }))
  }

  const textSizeClass = {
    normal: 'text-base',
    large: 'text-lg',
    'extra-large': 'text-2xl',
  }[settings.textSize]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="cosmic-border bg-card/90 backdrop-blur-lg mb-4 w-80 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 glow-text text-purple-300">
              <Settings className="w-5 h-5" />
              Accessibility options
            </CardTitle>
            <CardDescription>Customize your experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-purple-400" />
                  <span>Screen reader support</span>
                </div>
                <button
                  onClick={() => handleToggleSetting('screenReader')}
                  className={`w-10 h-6 rounded-full transition-colors ${
                    settings.screenReader ? 'bg-green-600' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      settings.screenReader ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Contrast className="w-4 h-4 text-purple-400" />
                  <span>High contrast mode</span>
                </div>
                <button
                  onClick={() => handleToggleSetting('highContrast')}
                  className={`w-10 h-6 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-green-600' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4 text-purple-400" />
                  <span>Dyslexia-friendly font</span>
                </div>
                <button
                  onClick={() => handleToggleSetting('dyslexiaFont')}
                  className={`w-10 h-6 rounded-full transition-colors ${
                    settings.dyslexiaFont ? 'bg-green-600' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      settings.dyslexiaFont ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-400" />
                  <span>Large text</span>
                </div>
                <button
                  onClick={() => handleToggleSetting('largeText')}
                  className={`w-10 h-6 rounded-full transition-colors ${
                    settings.largeText ? 'bg-green-600' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      settings.largeText ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-purple-400" />
                  <span>Reduce motion</span>
                </div>
                <button
                  onClick={() => handleToggleSetting('reduceMotion')}
                  className={`w-10 h-6 rounded-full transition-colors ${
                    settings.reduceMotion ? 'bg-green-600' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      settings.reduceMotion ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="pt-3 border-t border-purple-900/30">
                <p className="text-sm font-medium mb-2">Text size</p>
                <div className="grid grid-cols-3 gap-2">
                  {(['normal', 'large', 'extra-large'] as const).map((size) => (
                    <Button
                      key={size}
                      onClick={() => handleTextSizeChange(size)}
                      variant={settings.textSize === size ? 'default' : 'outline'}
                      size="sm"
                      className="text-xs"
                    >
                      {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
        title="Accessibility options"
      >
        <Settings className="w-6 h-6" />
      </Button>
    </div>
  )
}
