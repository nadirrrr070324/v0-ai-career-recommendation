# CareerIQ - Technical Architecture

## System Architecture

```
┌─────────────────────────────────────────────────────┐
│             CLIENT SIDE (Browser)                    │
├─────────────────────────────────────────────────────┤
│                                                       │
│  ┌──────────────────────────────────────────────┐  │
│  │         Next.js App Router (page.tsx)        │  │
│  │  - State Management                          │  │
│  │  - Tab Navigation                            │  │
│  │  - Form Handling                             │  │
│  └──────────────────────────────────────────────┘  │
│                       ↓                              │
│  ┌──────────────────────────────────────────────┐  │
│  │           Component Layer (14 Features)      │  │
│  │  ├─ Input & Form Processing                 │  │
│  │  ├─ Results & Analytics Display             │  │
│  │  ├─ Comparison & Analysis                   │  │
│  │  ├─ AI Systems & Insights                   │  │
│  │  └─ Export & Report Generation              │  │
│  └──────────────────────────────────────────────┘  │
│                       ↓                              │
│  ┌──────────────────────────────────────────────┐  │
│  │        UI Layer (shadcn/ui + Tailwind)      │  │
│  │  - 50+ Pre-built Components                 │  │
│  │  - Responsive Design                        │  │
│  │  - Professional Styling                     │  │
│  └──────────────────────────────────────────────┘  │
│                       ↓                              │
│  ┌──────────────────────────────────────────────┐  │
│  │      Animation Layer (globals.css)           │  │
│  │  - 7 Professional Animation Classes          │  │
│  │  - 60fps Performance                         │  │
│  │  - GPU Acceleration                         │  │
│  └──────────────────────────────────────────────┘  │
│                                                       │
└─────────────────────────────────────────────────────┘
```

## Data Flow Diagram

```
User Input (Form)
    ↓
[UserProfile Object Created]
    ↓
[Career Matching Algorithm]
    ↓
[Calculate Recommendations] → [Sort by Match %]
    ↓
[Set State Variables]
    ↓
[Auto-Shift to Results Tab]
    ↓
[Display Results Dashboard]
    ↓
[Navigate Through Tabs]
    ├─ Compare (2-3 careers)
    ├─ Skills (Gap analysis)
    ├─ Trends (Market data)
    ├─ Mentors (Industry leaders)
    ├─ Interview (Questions prep)
    ├─ Salary (Negotiation)
    ├─ Export (Reports)
    ├─ Chat (AI advisor)
    ├─ Details (Career deep dive)
    └─ AI Analysis (Final synthesis)
```

## Component Hierarchy

```
App (page.tsx)
├─ Header
│  ├─ Logo & Branding
│  ├─ AI Shortcuts Menu
│  └─ Navigation Info
├─ Tabs Navigation
└─ Tab Contents
   ├─ Input Tab
   │  └─ UserInputForm
   ├─ Results Tab
   │  ├─ Career Readiness Card
   │  └─ RecommendationResults
   │     ├─ Summary Stats (4 cards)
   │     └─ Career Cards (expandable)
   ├─ Compare Tab
   │  └─ CareerComparison
   │     └─ Comparison Table
   ├─ Skills Tab
   │  └─ SkillTracker
   │     ├─ Current Skills
   │     ├─ Missing Skills
   │     └─ Learning Roadmap
   ├─ Trends Tab
   │  └─ JobMarketTrends
   │     ├─ Growth Data
   │     ├─ Salary Data
   │     └─ Demand Analysis
   ├─ Mentors Tab
   │  └─ MentorConnections
   │     ├─ Mentor Cards
   │     ├─ Specialties
   │     └─ Learning Paths
   ├─ Interview Tab
   │  └─ InterviewPrepGuide
   │     ├─ Questions by Role
   │     ├─ STAR Method
   │     └─ Tips & Tricks
   ├─ Salary Tab
   │  └─ SalaryNegotiationGuide
   │     ├─ Negotiation Tactics
   │     ├─ Benefits Breakdown
   │     └─ Market Rates
   ├─ Export Tab
   │  └─ ExportReport
   │     ├─ Download PDF
   │     ├─ Email Report
   │     └─ Copy to Clipboard
   ├─ Chat Tab
   │  └─ CareerChatbot
   │     ├─ Message Input
   │     ├─ Message History
   │     └─ Quick Prompts
   ├─ Details Tab
   │  └─ CareerDetailsModal
   │     ├─ Overview
   │     ├─ Skills
   │     ├─ Market Data
   │     └─ Mentors
   └─ AI Analysis Tab
      ├─ Header
      ├─ AISystemManager
      ├─ CareerPathPrediction
      └─ PersonalityMatcher
└─ Footer
   └─ Copyright & Info
```

## State Management Flow

```
Main App State
├─ userProfile
│  ├─ education
│  ├─ skills[]
│  ├─ interests[]
│  ├─ industry
│  └─ personality
├─ recommendations[]
│  ├─ name
│  ├─ matchPercentage
│  ├─ description
│  ├─ salaryRange
│  ├─ whyRecommended
│  ├─ missingSkills[]
│  ├─ learningRoadmap{}
│  └─ mentors[]
├─ activeTab (current tab)
├─ overallReadiness (calculated %)
├─ selectedCareer (for details view)
├─ showDetailsModal (boolean)
├─ savedCareers[] (bookmarked careers)
└─ showAIMenu (quick shortcuts menu)
```

## Algorithm Details

### Career Matching Algorithm
```
matchScore = (skillMatches * 2) + 
             (interestMatches * 1) + 
             (educationMatch * 1) + 
             (industryMatch * 1)

percentage = min((matchScore / 15) * 100, 100)

sort(percentage DESC)
return top 5
```

### Skill Gap Analysis
```
For each recommended career:
  missingSkills = career.skills - user.skills
  roadmap = {
    beginner: [basic skills],
    intermediate: [intermediate skills],
    advanced: [advanced skills]
  }
```

### Market Trend Calculation
```
For each career:
  growthRate = 8% to 33% (5-year projection)
  demandLevel = Critical|VeryHigh|High|Moderate
  salaryGrowth = 5% to 18% (annual)
  nextSalary = currentSalary + (currentSalary * growthRate/5)
```

## Animation Architecture

### CSS Animations Framework
```
Animation Class Structure:
├─ Define .animation-name
├─ Define @keyframes animation-name
├─ Apply transition delays (staggered)
└─ Use animation-delay for sequences

Performance Optimization:
├─ GPU acceleration (transform, opacity)
├─ Will-change hints
├─ Hardware acceleration enabled
└─ 60fps target
```

### Animation Timing
```
Sequence:
1. Header: Immediate (0ms)
2. Form: 300ms fade-in
3. Stats Cards: Staggered 0-300ms
4. Career Cards: Staggered per index
5. Details: Bounce-in on click
```

## Responsive Design System

### Breakpoints
```
Mobile:     Default (0px+)
Tablet:     md (768px+)
Desktop:    lg (1024px+)
UltraWide:  2xl (1536px+)
```

### Layout Adaptations
```
Mobile:
├─ Single column layouts
├─ Stacked cards
├─ Touch-optimized spacing
└─ Mobile-first approach

Desktop:
├─ Multi-column grids
├─ Side-by-side comparisons
├─ Hover effects
└─ Expanded views
```

## Performance Metrics

### Load Performance
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

### Runtime Performance
- Animation Frame Rate: 60fps
- Memory Usage: < 50MB
- Component Render: < 16ms
- Bundle Size: < 200KB (gzipped)

## Security Considerations

### Client-Side Security
- No sensitive data stored locally
- User data processed in memory
- No external API calls
- XSS protection via React

### Input Validation
- Form validation on submission
- Type checking via TypeScript
- Sanitized career database
- Safe string operations

### Data Privacy
- No user data sent to external servers
- No cookies or tracking
- No analytics collection
- WCAG accessible

## Error Handling

### Error Boundaries
- Component-level error catching
- Graceful fallbacks
- User-friendly error messages
- Console logging for debugging

### Form Validation
- Required field validation
- Type checking
- Format validation
- User feedback on errors

## Browser Compatibility

### Supported Features
- ES2020+ JavaScript
- CSS Grid & Flexbox
- CSS Variables
- CSS Animations
- LocalStorage (optional)

### Fallbacks
- Graceful degradation
- No JavaScript: Basic structure visible
- No CSS Grid: Flexbox fallback
- No Animations: Instant transitions

## Build & Deployment

### Build Process
```
Source Code
    ↓
[TypeScript Compilation]
    ↓
[Next.js Build]
    ↓
[Tailwind CSS Purging]
    ↓
[Code Minification]
    ↓
[Optimization]
    ↓
[Build Output]
    ↓
[Ready for Deployment]
```

### Deployment Targets
- Vercel (Recommended)
- Docker containers
- Node.js servers
- Static hosting
- CDN distribution

## Monitoring & Debugging

### Console Logs (Development)
- Use: `console.log("[v0] Message", variable)`
- Check: Browser DevTools Console
- Debug: State changes and data flow

### Browser DevTools
- React DevTools for component inspection
- Network tab for performance
- Performance tab for animations
- Console for errors and logs

### Production Monitoring
- Error tracking (optional: Sentry)
- Performance monitoring (optional: Vercel Analytics)
- User feedback collection
- Crash reporting

---

*Last Updated: 2025*
*Version: 1.0.0*
