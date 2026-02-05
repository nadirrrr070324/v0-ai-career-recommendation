# Career IQ Hub - AI-Powered Career Recommendation Engine

A stunning Next.js application featuring a cosmic theme that helps users discover their ideal career paths using AI-powered recommendations with advanced career exploration features.

## Features

### 🎯 Core Features
- **Intelligent Career Matching**: AI-powered algorithm that analyzes user profiles to recommend suitable careers
- **Hybrid Scoring System**: Combines NLP similarity with rule-based logic for accurate recommendations
- **Top 5 Career Recommendations**: Ranked by compatibility with detailed match percentages

### 🔍 Advanced Features

1. **Career Path Comparison Tool**
   - Compare up to 3 careers side-by-side
   - Detailed comparison table with salary, skills, mentors, and roadmap
   - Visual comparison with key metrics

2. **Skill Proficiency Tracker**
   - Interactive skill proficiency level adjustment
   - Skill gap analysis between current and needed skills
   - 3-phase improvement roadmap (Foundation, Development, Mastery)

3. **Job Market Trends**
   - 5-year growth projections for each career
   - Current market demand assessment
   - Salary growth predictions
   - Market insights and industry trends

4. **Mentor Connections**
   - Industry leader profiles for each career
   - 25+ renowned mentors from various fields
   - Specialties and organizations listed
   - Learning resources and connections

5. **Interview Prep Guide**
   - Role-specific common interview questions
   - Role-specific interview tips and strategies
   - STAR method explanation and guidance
   - Universal interview best practices

6. **AI Career Chatbot**
   - Interactive conversational AI assistant
   - Context-aware responses based on user profile
   - Quick prompt suggestions for common questions
   - Real-time chat with typing indicators

### 🎨 Design Features
- **Cosmic Theme**: Dark space aesthetic with purple and blue gradients
- **Glowing Effects**: Purple glow effects and animations throughout
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Modern UI**: Built with shadcn/ui components for consistency

## Tech Stack

- **Frontend**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS with custom cosmic theme
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)
- **Language**: TypeScript

## Project Structure

```
/app
  ├── layout.tsx          # Root layout with metadata
  ├── page.tsx            # Main application entry point
  └── globals.css         # Global styles with cosmic theme

/components
  ├── UserInputForm.tsx              # Career preference input form
  ├── RecommendationResults.tsx      # Displays top 5 recommendations
  ├── CareerComparison.tsx           # Compare careers side-by-side
  ├── SkillTracker.tsx               # Track and develop skills
  ├── JobMarketTrends.tsx            # Market data and trends
  ├── MentorConnections.tsx          # Mentor network and profiles
  ├── InterviewPrepGuide.tsx         # Interview preparation resources
  ├── CareerChatbot.tsx              # AI assistant chat interface
  └── /ui                            # Reusable UI components
```

## How to Use

### 1. **Start Your Journey**
   - Fill in your education level (High School to Postgraduate)
   - Enter your skills (comma-separated)
   - Add your interests (comma-separated)
   - Select your preferred industry
   - Choose your personality type (Logical, Creative, or Social)
   - Click "Discover My Careers"

### 2. **Review Results**
   - See your overall career readiness percentage
   - View top 5 recommended careers with match percentages
   - Read explanations for why each career is recommended
   - Learn about salary ranges and career descriptions

### 3. **Compare Careers**
   - Select up to 3 careers to compare
   - View side-by-side comparison table
   - Analyze salary, skills, mentors, and roadmaps

### 4. **Track Your Skills**
   - Adjust proficiency levels for each skill
   - View skills gap analysis
   - Follow a 12-month improvement roadmap

### 5. **Explore Market Trends**
   - Review growth projections
   - Understand market demand
   - See salary growth expectations
   - Get industry insights

### 6. **Connect with Mentors**
   - Discover industry mentors
   - Learn their specialties
   - Follow their work and insights

### 7. **Prepare for Interviews**
   - Review role-specific questions
   - Learn interview tips
   - Master the STAR method

### 8. **Chat with AI Advisor**
   - Ask questions about your career
   - Get personalized advice
   - Explore alternative paths

## Cosmic Theme Colors

- **Primary**: Purple (`#a855f7`)
- **Secondary**: Deep Purple (`#7c3aed`)
- **Accent**: Violet (`#6366f1`)
- **Background**: Deep Slate (`#0f172a`)
- **Text**: Light Gray (`#f1f5f9`)

## Key Features Breakdown

### AI Matching Algorithm
- **60% NLP Similarity**: Uses TF-IDF vectorization concept
- **40% Rule-Based Scoring**:
  - +2 for each matching skill
  - +1 for matching interest
  - +1 for education match
  - +1 for industry match
  - +1 for personality match

### Career Database
10+ careers covering:
- Software Developer
- Data Analyst
- UI/UX Designer
- Digital Marketer
- Business Analyst
- Cybersecurity Analyst
- Financial Analyst
- Healthcare Administrator
- Product Manager
- Government Officer

Each with:
- Required skills
- Related interests
- Education requirements
- Industry classification
- Salary range
- Mentor recommendations
- Learning roadmap

## Getting Started

1. **Clone or Download** the project
2. **Install Dependencies**: `npm install`
3. **Run Development Server**: `npm run dev`
4. **Open Browser**: Visit `http://localhost:3000`
5. **Fill the Form**: Start your career discovery journey!

## Features Highlight

✅ **10+ Pre-loaded Careers** with real industry data
✅ **AI-Powered Recommendations** using hybrid scoring
✅ **Career Comparison Tool** for detailed analysis
✅ **Skill Proficiency Tracking** with visual sliders
✅ **Job Market Trends** with growth predictions
✅ **Mentor Network** with 25+ industry leaders
✅ **Interview Prep Guide** with role-specific questions
✅ **Conversational AI Chatbot** for career advice
✅ **Responsive Design** works on all devices
✅ **Cosmic Theme** with glowing effects and animations

## Future Enhancements

- [ ] User authentication and profile saving
- [ ] Resume analyzer for skill extraction
- [ ] Real-time job market API integration
- [ ] Video interviews with mentors
- [ ] Gamified learning paths
- [ ] Integration with job boards
- [ ] Certification tracking
- [ ] Networking platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized for fast load times
- Responsive design for all screen sizes
- Smooth animations and transitions
- Efficient state management

## Accessibility

- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## License

Free to use and modify for personal and commercial projects.

## Support

For questions or issues, refer to the comprehensive guides within the application or reach out to the development team.

---

**Celestial Career Hub** - Where your career dreams meet cosmic possibilities ✨
