'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { User, LogOut, Settings, Shield } from 'lucide-react'

interface ProfileDropdownProps {
  onProfileClick?: () => void
  onSettingsClick?: () => void
  onLogoutClick?: () => void
}

export default function ProfileDropdown({
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
}: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    setIsOpen(false)
    onLogoutClick?.()
  }

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex items-center gap-2"
      >
        <User className="w-4 h-4" />
        Profile
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card border cosmic-border rounded-lg shadow-lg z-50">
          <div className="p-2 space-y-1">
            <button
              onClick={() => {
                onProfileClick?.()
                setIsOpen(false)
              }}
              className="w-full text-left px-3 py-2 rounded hover:bg-purple-900/30 text-sm flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              View Profile
            </button>
            <button
              onClick={() => {
                onSettingsClick?.()
                setIsOpen(false)
              }}
              className="w-full text-left px-3 py-2 rounded hover:bg-purple-900/30 text-sm flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button
              onClick={() => {
                onSettingsClick?.()
                setIsOpen(false)
              }}
              className="w-full text-left px-3 py-2 rounded hover:bg-purple-900/30 text-sm flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              Security
            </button>
            <hr className="my-1 border-purple-900/30" />
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 rounded hover:bg-red-900/30 text-sm flex items-center gap-2 text-red-400"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
