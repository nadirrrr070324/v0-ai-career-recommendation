# Visual Guide - Celestial Career Hub

## 🎨 Design System

### Color Palette

```
Primary Purple:       #a855f7 (Glowing accent)
Secondary Purple:     #7c3aed (Interactive elements)
Accent Violet:        #6366f1 (Highlights)
Deep Slate (BG):      #0f172a (Main background)
Card Background:      #1a2141 (Semi-transparent)
Text Primary:         #f1f5f9 (Off-white)
Text Secondary:       #94a3b8 (Gray)
Border/Glow:          rgba(139, 92, 246, 0.4)
```

### Typography

```
Headings:     Geist Sans (Bold, 24-32px)
Body Text:    Geist Sans (Regular, 14-16px)
Code/Tech:    Geist Mono (Regular, 12-14px)
```

### Spacing Scale

```
xs:  0.25rem (4px)
sm:  0.5rem  (8px)
md:  1rem    (16px)
lg:  1.5rem  (24px)
xl:  2rem    (32px)
2xl: 3rem    (48px)
```

---

## 📐 Layout Structure

### Main Container
```
┌─────────────────────────────────────────┐
│          HEADER (60px)                   │
├─────────────────────────────────────────┤
│                                          │
│  TAB NAVIGATION (Multi-row on mobile)   │
│                                          │
├─────────────────────────────────────────┤
│                                          │
│  MAIN CONTENT (Responsive Grid)         │
│  - Desktop: Max 1200px                  │
│  - Tablet: 768px                        │
│  - Mobile: Full width with padding      │
│                                          │
├─────────────────────────────────────────┤
│          FOOTER (40px)                   │
└─────────────────────────────────────────┘
```

### Responsive Breakpoints

```
Mobile:  < 640px   (Single column)
Tablet:  640-1024px (2 columns)
Desktop: > 1024px   (3-4 columns)
```

---

## 🎯 Tab Navigation

```
TAB BAR (8 Tabs - Responsive Grid)
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│Start│Rslt │Cmp  │Skil │Trnd │Mntr │Int  │Chat │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
│ ✓ Enabled    ○ Disabled (After form submit)  │
```

---

## 📋 Feature Layouts

### Feature 1: Input Form Layout

```
┌──────────────────────────────────────┐
│ Career Discovery Journey              │
│ Share your profile to discover paths  │
├──────────────────────────────────────┤
│                                       │
│ ┌────────────────────────────────┐  │
│ │ Education Level ▼              │  │
│ └────────────────────────────────┘  │
│                                       │
│ ┌────────────────────────────────┐  │
│ │ Skills (comma-separated)       │  │
│ │ Python, Web Design, Communication
│ └────────────────────────────────┘  │
│                                       │
│ ┌────────────────────────────────┐  │
│ │ Interests (comma-separated)    │  │
│ │ Technology, Healthcare         │
│ └────────────────────────────────┘  │
│                                       │
│ ┌────────────────────────────────┐  │
│ │ Preferred Industry ▼           │  │
│ └────────────────────────────────┘  │
│                                       │
│ ┌─────────┬──────────┬──────────┐  │
│ │ Logical │ Creative │ Social   │  │
│ └─────────┴──────────┴──────────┘  │
│                                       │
│  [  Discover My Careers (Glowing)  ] │
│                                       │
└──────────────────────────────────────┘
```

### Feature 2: Results Layout

```
┌──────────────────────────────────────┐
│ Your Career Readiness: 78% ████████  │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐ × 5
│ #1 Match - 89% ████████████          │
│ ┌──────────────────────────────────┐ │
│ │ Software Developer               │ │
│ │ Build and maintain software...   │ │
│ │ ₹8-25 LPA                        │ │
│ ├──────────────────────────────────┤ │
│ │ Why: Strong match based on skills│ │
│ │ Missing: DevOps, Cloud, Security │ │
│ │ Roadmap:                         │ │
│ │  [Beginner] [Intermediate] [Adv] │ │
│ │ Mentors: Linus, Guido, Satya    │ │
│ └──────────────────────────────────┘ │
└──────────────────────────────────────┘
```

### Feature 3: Comparison Layout

```
┌──────────────────────────────────────┐
│ Select Careers to Compare (Max 3)    │
├──────────────────────────────────────┤
│ ☑ Software Developer                 │
│ ☑ Data Analyst                       │
│ ☐ UI/UX Designer                     │
│ ☐ Digital Marketer                   │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ Comparison: Software Developer vs... │
├────────────┬────────────┬────────────┤
│ Aspect     │ Dev        │ Analyst    │
├────────────┼────────────┼────────────┤
│ Match      │ 89%        │ 78%        │
│ Salary     │ ₹8-25 LPA  │ ₹6-18 LPA  │
│ Skills     │ [Badges]   │ [Badges]   │
│ Mentors    │ [Names]    │ [Names]    │
│ Roadmap    │ [Stages]   │ [Stages]   │
└────────────┴────────────┴────────────┘
```

### Feature 4: Skills Layout

```
┌──────────────────────────────────────┐
│ Your Current Skills    Skills to Dev │
│ ✓ Python               ○ DevOps      │
│ ✓ React                ○ Docker      │
│ ✓ Communication        ○ Kubernetes  │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ Skill Proficiency Levels             │
├──────────────────────────────────────┤
│ Python          [═══════════░░░░] 70%│
│ React           [═════════════░░] 85%│
│ DevOps          [═══░░░░░░░░░░░░] 15%│
│ Kubernetes      [════░░░░░░░░░░░] 20%│
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ Improvement Roadmap                  │
├──────────────────────────────────────┤
│ Phase 1 (M1-3):  [Python] [DevOps]  │
│ Phase 2 (M4-6):  [Docker] [Git]    │
│ Phase 3 (M7-12): [K8s] [Microserv] │
└──────────────────────────────────────┘
```

### Feature 5: Market Trends Layout

```
┌──────────────────────────────────────┐
│ Software Developer | ₹8-25 LPA       │
│ Demand: [Very High Badge]            │
├──────────┬──────────┬────────────────┤
│ 5-Yr     │ Demand   │ Salary Growth  │
│ Growth   │          │                │
│ ↑ 22%    │ Zap      │ ↑ 12%          │
│          │ Very High│                │
└──────────┴──────────┴────────────────┘

Market Insights:
🚀 High growth potential
📈 Steady opportunities
💼 Stable market
```

### Feature 6: Mentors Layout

```
┌──────────────────────────────────────┐
│ Recommended Mentors for You (5 shown)│
├─────────────────┬───────────────────┤
│ 🏆              │ 🏆                │
│ Linus Torvalds  │ Guido van Rossum  │
│ Creator of Linux│ Creator of Python │
│ Linux Foundation│ Independent       │
│ Specialties:    │ Specialties:      │
│ • Open-source   │ • Languages       │
│ • Architecture  │ • Python          │
└─────────────────┴───────────────────┘
```

### Feature 7: Interview Prep Layout

```
┌──────────────────────────────────────┐
│ Software Developer Interview         │
├──────────────────────────────────────┤
│ Common Questions:                    │
│ Q1: Tell me about a complex problem
│ [Explanation...]
│                                       │
│ Role-Specific Tips:                  │
│ ✓ Prepare technical questions        │
│ ✓ Show GitHub projects               │
│ ✓ Problem-solving approach           │
│ ✓ Learning journey                   │
│ ✓ Technology enthusiasm              │
│                                       │
│ STAR Method:                         │
│ [S] Situation  [T] Task              │
│ [A] Action     [R] Result            │
└──────────────────────────────────────┘
```

### Feature 8: Chatbot Layout

```
┌──────────────────────────────────────┐
│ Career AI Assistant                  │
├──────────────────────────────────────┤
│ ┌────────────────────────────────┐  │
│ │ Message history scrollable...  │  │
│ │                                │  │
│ │         [Assistant message]    │  │
│ │                                │  │
│ │                  [User message]│  │
│ │                                │  │
│ │ [Assistant typing indicator...] │  │
│ └────────────────────────────────┘  │
│                                       │
│ Quick prompts (if first message):    │
│ [How do I start?] [What skills?]    │
│ [Interview tips] [Job market?]      │
│                                       │
│ ┌──────────────────┬──────────────┐ │
│ │ Ask me anything..│ [Send Button]│ │
│ └──────────────────┴──────────────┘ │
└──────────────────────────────────────┘
```

---

## 🎭 Component Hierarchy

```
App (page.tsx)
├── Header
│   └── Logo + Title
├── Main
│   ├── TabsList (8 tabs)
│   ├── Tab: Input
│   │   └── UserInputForm
│   ├── Tab: Results
│   │   ├── Career Readiness Card
│   │   └── RecommendationResults
│   ├── Tab: Comparison
│   │   └── CareerComparison
│   ├── Tab: Skills
│   │   └── SkillTracker
│   ├── Tab: Trends
│   │   └── JobMarketTrends
│   ├── Tab: Mentors
│   │   └── MentorConnections
│   ├── Tab: Interview
│   │   └── InterviewPrepGuide
│   └── Tab: Chat
│       └── CareerChatbot
└── Footer
    └── Copyright Info
```

---

## 🎨 Card Components

### Standard Card
```
┌─────────────────────────────┐
│ Title (glow effect)         │
├─────────────────────────────┤
│ Content area                │
│ - Badges                    │
│ - Text                      │
│ - Interactive elements      │
└─────────────────────────────┘
```

### Badge Variants
```
✓ Success (Green)
! Warning (Yellow)
✗ Error (Red)
○ Info (Blue)
★ Featured (Purple)
```

---

## 🎬 Animation Effects

### Hover Effects
- Cards: Subtle shadow increase
- Buttons: Color transition (200ms)
- Links: Underline animation

### Glowing Effects
- Headers: Text glow with purple shadow
- Cards: Box glow with blur effect
- Buttons: Cosmic glow on hover

### Loading States
- Typing indicator: Animated dots
- Sliders: Smooth transitions
- Progress bars: Smooth filling

---

## 📱 Mobile Optimizations

### Stack Changes
- 2-column grid → 1 column
- Horizontal tabs → Vertical scrolling
- Large buttons → Touch-friendly (44px+)
- Form inputs → Full width

### Typography
- Headings: Reduced 1-2 sizes
- Body: Maintain 16px (prevents zoom)
- Labels: Clearer hierarchy

### Spacing
- Increase padding for touch
- Reduce gap sizes
- Full-width cards
- Bottom sheet navigation

---

## ♿ Accessibility Features

### Color Contrast
- Text on background: 4.5:1+ ratio
- Interactive elements: 3:1+ ratio
- Badges: Sufficient contrast

### Focus Indicators
- Visible focus ring (2px)
- Color + shape change
- Clear focus order

### ARIA Labels
- Form inputs: `<label>` associated
- Buttons: Descriptive text
- Cards: Semantic structure

---

## 🎯 Interactive Elements

### Buttons
```
Primary:    Purple gradient, glowing
Secondary:  Outline style
Tertiary:   Text only
Disabled:   Grayed out, no hover
```

### Form Inputs
```
Text Input:   Cosmic border, focus glow
Select:       Dropdown with icons
Checkbox:     Custom styled, large target
Slider:       Smooth handle, labels
```

### Feedback
```
Error:    Red border + message
Success:  Green checkmark
Loading:  Spinning indicator
Message:  Toast or inline
```

---

## 📊 Data Visualization

### Progress Bars
```
[████████████░░░░░░░░░░░░░░░░░] 45%
```

### Match Percentage
```
80-100%: Green (Excellent)
60-79%:  Blue (Good)
40-59%:  Yellow (Fair)
0-39%:   Orange (Low)
```

### Status Badges
```
[Very High]  [High]  [Moderate]  [Low]
```

---

## 🌟 Special Effects

### Cosmic Background
- Subtle star particles
- Nebula gradient overlay
- Animated twinkling (optional)
- Parallax scrolling (subtle)

### Glow Effects
- Purple inner glow on text
- Box shadow glow on cards
- Button glow on interaction

### Transitions
- 200ms ease for hover states
- 300ms ease for tab changes
- 600ms ease for chatbot responses

---

## 📐 Spacing Rules

### Horizontal
- Edge padding: 16-32px
- Content gap: 16px
- Column gap: 24px

### Vertical
- Section spacing: 24-32px
- Card padding: 16-24px
- Line height: 1.5-1.6

---

## 🎪 User States

### Empty State
```
"Select careers to compare their details"
[Centered, muted text, icon]
```

### Loading State
```
[Animated dots or spinner]
"Processing your profile..."
```

### Success State
```
✓ [Green checkmark]
"Career recommendations ready!"
```

### Error State
```
✗ [Red warning]
"Please fill in all fields"
```

---

## 🎨 Theme Customization

To change theme:

1. **Edit Colors** (`globals.css`):
   ```css
   :root {
     --primary: 268 74% 62%;
     /* Change to your color HSL */
   }
   ```

2. **Update Text**:
   - Search and replace app title
   - Update descriptions
   - Modify taglines

3. **Replace Background**:
   - Replace `/public/cosmic-bg.jpg`
   - Update in `page.tsx` if needed

---

**Visual System Designed for:** Cosmic Theme | Dark Mode | Accessibility | Responsiveness

---

End of Visual Guide ✨
