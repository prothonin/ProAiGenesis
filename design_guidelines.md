# Prothon Website Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from **Linear** (clean, modern tech aesthetic), **Apple** (minimalism and sophistication), and **Stripe** (professional gradients and depth). This creates a futuristic, premium feel for an AI technology platform.

## Core Design Principles
- **Futuristic Tech Aesthetic**: Glass-morphism, subtle gradients, and depth
- **Professional Sophistication**: Clean, minimal interface with purposeful animations
- **Premium AI Platform**: High-end visual treatment befitting advanced AI capabilities

## Typography
- **Primary Font**: Inter or DM Sans via Google Fonts
- **Hierarchy**:
  - Hero Title: text-5xl to text-7xl, font-bold
  - Section Headers: text-3xl to text-4xl, font-semibold
  - Body Text: text-base to text-lg, font-normal
  - AI Chat Messages: text-sm to text-base, font-medium

## Layout System
**Spacing Units**: Consistent use of Tailwind's 4, 8, 12, 16, 24, 32 units (p-4, mb-8, gap-12, etc.)
- Section padding: py-24 to py-32 (desktop), py-12 to py-16 (mobile)
- Component gaps: gap-8 to gap-12
- Container: max-w-7xl with px-6 to px-8

## Landing Page Structure

### 1. Hero Section
- Full viewport height (min-h-screen) with 3D animated background
- Large hero image as backdrop with dark overlay (opacity-40)
- Centered content: "High Intelligence Technology" tagline, "Prothon" title, description
- Two primary CTAs: "Explore Our Apps" and "Try ProAi" (prominent, animated)
- **3D Elements**: Floating geometric shapes (dodecahedrons, toruses), particle systems, slow rotation and drift animations

### 2. Stats Section
- Two-column grid (grid-cols-2 gap-8) centered below hero
- Cards with glass-morphism effect (backdrop-blur-lg, bg-white/10)
- Large numbers with descriptions
- Subtle 3D hover effects

### 3. Community Connect Section
- Section header: "Connect With Us" with supporting text
- Three-column grid (lg:grid-cols-3 gap-8) for social platforms
- Each card: Platform icon, name, description, "Follow/Join" CTA
- Cards with hover lift effect and border glow
- Icons from Heroicons (brand icons)

### 4. Footer
- Developer support message with Telegram link
- Minimal, centered layout

## 3D Animation Strategy
**Technology**: Three.js via React Three Fiber
- **Background Layer**: Animated particle field with subtle movement
- **Geometric Objects**: 5-8 floating abstract shapes (icosahedrons, octahedrons, toruses)
- **Motion**: Slow continuous rotation, gentle floating (sin wave movement)
- **Interaction**: Subtle mouse parallax effect on scroll
- **Performance**: Optimized rendering, reduced particle count on mobile
- **Visual Treatment**: Semi-transparent materials, subtle glow effects, depth of field

## Chat Interface Design ("Try ProAi")

### Chat Page Layout
**Full-Screen Experience**: Dedicated chat page with immersive design

#### Header Section
- Fixed top bar with "ProAi" branding and animated logo
- Subtitle: "Your Advanced AI Assistant by Prothon"
- Back button to return to landing page
- Gradient background (purple to blue gradient)

#### Chat Container
- Centered max-w-4xl with full height
- Glass-morphism container (backdrop-blur-xl, bg-gradient)
- **3D Background**: Floating geometric shapes specific to chat page
- Smooth particle effects behind messages

#### Message Area
- Scrollable message container with custom scrollbar
- **User Messages**: Right-aligned, rounded-2xl bubbles with gradient background (blue/purple), shadow-lg
- **ProAi Messages**: Left-aligned, rounded-2xl with glass effect, border glow
- **ProAi Avatar**: Animated circular avatar with pulsing glow effect
- Message timestamps (text-xs, opacity-60)
- **Animation**: Messages slide in with fade + scale effect
- Typing indicator: Three animated dots with wave motion

#### Input Area
- Fixed bottom position with backdrop-blur
- Large text area with glass-morphism styling
- Send button with icon, gradient background, hover scale effect
- Character count indicator
- Microphone icon for voice input placeholder

### Chat-Specific 3D Elements
- Floating rings and geometric shapes in chat background
- Particles that react to new messages (burst effect)
- Ambient rotation and depth creating immersive environment
- Lower opacity than landing page to maintain readability

## Component Library

### Buttons
- **Primary CTA**: px-8 py-4, rounded-full, gradient background, shadow-xl, hover:scale-105 transition
- **Secondary**: Border style with glass effect, hover glow
- **Chat Send**: Circular or rounded-lg, icon-only, gradient with pulse animation

### Cards (Community)
- Glass-morphism: backdrop-blur-lg, bg-white/5, border border-white/10
- Padding: p-8
- Hover: scale-105, border glow intensifies
- Rounded: rounded-2xl

### Chat Bubbles
- User: bg-gradient-to-br from-blue-500 to-purple-600, shadow-lg
- AI: backdrop-blur-md, bg-white/10, border border-white/20
- Padding: px-6 py-4
- Max-width: max-w-2xl
- Animation: fade-in-up with 300ms duration

## Images
**Hero Background**: Large AI/technology themed image (circuit boards, digital abstract, neural networks). Dark overlay for text contrast. Full-width, optimized for performance.

## Accessibility
- WCAG AA contrast ratios maintained despite glass effects
- Focus states on all interactive elements
- Keyboard navigation for chat interface
- Screen reader labels for 3D decorative elements (aria-hidden)