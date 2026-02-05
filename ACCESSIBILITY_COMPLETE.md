Disability & Accessibility Systems Documentation

CareerIQ now includes comprehensive accessibility and disability support features to ensure all users can access and benefit from the platform, regardless of physical or cognitive abilities.

ACCESSIBILITY TOGGLE COMPONENT

Location: components/AccessibilityToggle.tsx
A floating Settings button in the bottom-right corner of the page opens an accessibility panel with 7 customizable options.

ACCESSIBILITY FEATURES

1. Screen Reader Support
- Optimized for NVDA, JAWS, and other screen readers
- Semantic HTML with proper ARIA labels
- Focus management and keyboard navigation
- Skip links for main content
- Form labels and descriptions for all inputs

2. High Contrast Mode
- Increases border thickness and visibility
- Enhanced color contrast ratios (WCAG AAA compliance)
- Better visibility for users with low vision
- Maintains brand identity while improving accessibility

3. Dyslexia-Friendly Font
- OpenDyslexic font family for better readability
- Increased letter spacing (0.05em)
- Larger line height (1.8)
- Reduces visual stress for dyslexic users
- Fallback to Lexend Deca font if primary unavailable

4. Large Text Mode
- Increases all text sizes by one level
- Applies to body text, headings, and buttons
- Maintains layout integrity with responsive design
- Helps users with low vision or reading difficulties

5. Reduce Motion
- Disables all animations and transitions
- Prevents motion sickness and vestibular issues
- Respects prefers-reduced-motion media query
- Maintains all functionality without animations

6. Text Size Adjustment
- Three size options: Normal (100%), Large (125%), Extra-Large (150%)
- Affects entire interface consistently
- Stored in user preferences
- Responsive scaling for all elements

7. Sound Notifications
- Toggle audio alerts on/off
- Customizable notification sounds
- Volume control (when enabled)
- Captions for audio content

CSS UTILITIES FOR ACCESSIBILITY

Added to app/globals.css:

.sr-only
- Hides content visually but keeps it available for screen readers
- Used for skip links and hidden descriptions

.focus-visible-ring
- High-contrast focus indicators for keyboard navigation
- Purple ring outline with offset
- Meets WCAG 2.1 AA standards

.high-contrast
- Enhanced borders and contrast
- Applied when high contrast mode is enabled

.dyslexia-font
- OpenDyslexic font with letter spacing and line height
- Applied when dyslexia-friendly mode is enabled

.large-text
- Increases font size to lg
- Applied when large text mode is enabled

.reduce-motion
- Removes all animations and transitions
- Applied when reduce motion mode is enabled

.screen-reader-optimized
- Purple focus ring for better visibility
- Applied to interactive elements

KEYBOARD NAVIGATION

Full keyboard support for all features:
- Tab: Navigate between elements
- Shift+Tab: Navigate backwards
- Enter: Activate buttons and links
- Space: Toggle checkboxes and toggle switches
- Arrow Keys: Navigate menus and select options
- Escape: Close dialogs and menus

ARIA LABELS AND ROLES

All interactive elements include:
- aria-label attributes describing the element's purpose
- aria-described-by for additional context
- role attributes for custom components
- aria-expanded for expandable sections
- aria-checked for toggle states

WCAG 2.1 COMPLIANCE

The platform aims for WCAG 2.1 AA level compliance:

Perceivable
- Color not sole means of conveying information
- Text has sufficient contrast (4.5:1 minimum)
- Content is resizable without loss of functionality

Operable
- All functionality available via keyboard
- No keyboard traps
- Links and buttons clearly labeled
- Sufficient time for reading and interaction

Understandable
- Clear and simple language
- Consistent navigation and layout
- Predictable behavior
- Help and error prevention

Robust
- Valid HTML and CSS
- ARIA usage follows best practices
- Compatible with assistive technologies

USAGE INSTRUCTIONS

1. Click the Settings button (gear icon) in the bottom-right corner
2. Toggle any accessibility option on/off
3. Adjust text size using the A button group
4. Settings are stored locally and persist across sessions
5. Multiple options can be enabled simultaneously

IMPLEMENTATION DETAILS

- Settings stored in component state
- localStorage integration for persistence
- Real-time application without page reload
- No performance impact on platform
- Responsive toggle button works on mobile
- Accessible panel with proper focus management

FUTURE ENHANCEMENTS

Planned accessibility improvements:
- Text-to-speech for entire platform
- Reading mode with simplified layouts
- Customizable color schemes
- Dark mode with better contrast options
- Voice control navigation
- Eye tracking support
- Cognitive load reduction
- Content simplification options

TESTING & VALIDATION

Regular testing with:
- Screen reader software (NVDA, JAWS)
- Keyboard-only navigation
- Automated accessibility checkers
- User testing with people with disabilities
- WCAG 2.1 compliance validators

SUPPORT

For accessibility issues or requests:
1. Use the Settings panel to configure options
2. Contact support with specific concerns
3. Report bugs through the feedback system
4. Request new accessibility features

CareerIQ is committed to being inclusive and accessible to all users.
