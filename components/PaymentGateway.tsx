'use client'

import React from "react"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertCircle, CreditCard, Lock, Zap } from 'lucide-react'

interface PaymentGatewayProps {
  type: 'report' | 'mentor'
  amount: number
  description: string
  onSuccess?: () => void
}

export default function PaymentGateway({ type, amount, description, onSuccess }: PaymentGatewayProps) {
  const [loading, setLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle')
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    name: '',
  })

  const handlePaymentClick = () => {
    setShowPaymentForm(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validatePaymentForm = () => {
    if (!cardDetails.cardNumber || cardDetails.cardNumber.length < 13) return false
    if (!cardDetails.expiry || cardDetails.expiry.length < 5) return false
    if (!cardDetails.cvc || cardDetails.cvc.length < 3) return false
    if (!cardDetails.name) return false
    return true
  }

  const handlePaymentSubmit = async () => {
    if (!validatePaymentForm()) {
      setPaymentStatus('error')
      return
    }

    setLoading(true)
    setPaymentStatus('processing')

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setPaymentStatus('success')
    setLoading(false)
    setShowPaymentForm(false)

    // Reset form
    setCardDetails({ cardNumber: '', expiry: '', cvc: '', name: '' })

    // Call success callback
    if (onSuccess) {
      setTimeout(onSuccess, 1500)
    }
  }

  const handleCancel = () => {
    setShowPaymentForm(false)
    setPaymentStatus('idle')
    setCardDetails({ cardNumber: '', expiry: '', cvc: '', name: '' })
  }

  return (
    <div className="space-y-4">
      {paymentStatus === 'success' && (
        <Card className="border-green-500/50 bg-green-900/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <p className="font-semibold text-green-300">Payment Successful!</p>
                <p className="text-sm text-green-300/70">₹{amount.toFixed(2)} charged</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {paymentStatus === 'error' && (
        <Card className="border-red-500/50 bg-red-900/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-400" />
              <div>
                <p className="font-semibold text-red-300">Payment Failed</p>
                <p className="text-sm text-red-300/70">Please check your details and try again</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {!showPaymentForm && paymentStatus !== 'success' && (
        <Card className="cosmic-border bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{type === 'report' ? 'Download Career Report' : 'Book Mentor Consultation'}</span>
              <Badge className="bg-purple-600">{type === 'report' ? 'Report' : 'Consultation'}</Badge>
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-purple-900/20 border border-purple-500/30">
              <span className="text-sm font-medium">Total Amount</span>
              <span className="text-2xl font-bold text-purple-300">₹{amount.toFixed(2)}</span>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-green-400" />
                <span>Secure encrypted payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Instant access after payment</span>
              </div>
            </div>

            <Button onClick={handlePaymentClick} className="w-full bg-purple-600 hover:bg-purple-700 text-white" size="lg">
              <CreditCard className="w-4 h-4 mr-2" />
              Proceed to Payment
            </Button>
          </CardContent>
        </Card>
      )}

      {showPaymentForm && paymentStatus !== 'success' && (
        <Card className="cosmic-border bg-card/50 backdrop-blur scale-up">
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
            <CardDescription>Enter your payment information to complete the transaction</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Card Holder Name */}
            <div>
              <label className="text-sm font-medium mb-2 block">Cardholder Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={cardDetails.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg bg-background/50 border border-purple-500/30 focus:outline-none focus:border-purple-500/60"
              />
            </div>

            {/* Card Number */}
            <div>
              <label className="text-sm font-medium mb-2 block">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="4532 1234 5678 9010"
                maxLength="19"
                value={cardDetails.cardNumber}
                onChange={(e) => {
                  let value = e.target.value.replace(/\s/g, '')
                  if (value.length > 16) value = value.slice(0, 16)
                  value = value.replace(/(\d{4})/g, '$1 ').trim()
                  setCardDetails((prev) => ({ ...prev, cardNumber: value }))
                }}
                className="w-full px-3 py-2 rounded-lg bg-background/50 border border-purple-500/30 focus:outline-none focus:border-purple-500/60 font-mono"
              />
            </div>

            {/* Expiry and CVC */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  maxLength="5"
                  value={cardDetails.expiry}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, '')
                    if (value.length >= 2) {
                      value = value.slice(0, 2) + '/' + value.slice(2, 4)
                    }
                    setCardDetails((prev) => ({ ...prev, expiry: value }))
                  }}
                  className="w-full px-3 py-2 rounded-lg bg-background/50 border border-purple-500/30 focus:outline-none focus:border-purple-500/60 font-mono"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  placeholder="123"
                  maxLength="4"
                  value={cardDetails.cvc}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '')
                    setCardDetails((prev) => ({ ...prev, cvc: value }))
                  }}
                  className="w-full px-3 py-2 rounded-lg bg-background/50 border border-purple-500/30 focus:outline-none focus:border-purple-500/60 font-mono"
                />
              </div>
            </div>

            {/* Demo Card Info */}
            <div className="p-3 rounded-lg bg-blue-900/20 border border-blue-500/30 text-xs text-blue-300">
              Demo: Use any card number starting with 4, any future expiry, and any 3-digit CVC
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handlePaymentSubmit}
                disabled={loading || !validatePaymentForm()}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
              >
                {loading ? 'Processing...' : `Pay ₹${amount.toFixed(2)}`}
              </Button>
              <Button onClick={handleCancel} variant="outline" className="flex-1 bg-transparent">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
