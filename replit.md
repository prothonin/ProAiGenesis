# Prothon - AI Platform Website

## Overview

Prothon is a futuristic AI technology platform showcasing cutting-edge applications and an advanced AI assistant called ProAi. The website features a modern, premium design with 3D animations, glassmorphism effects, and a chat interface powered by Google's Gemini AI. Built as a marketing platform to highlight Prothon's AI capabilities and community, it combines stunning visual design with practical AI interaction.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (Home, Chat, 404 pages)

**UI Component System**
- **shadcn/ui** component library (New York style variant) built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component library includes 40+ pre-built accessible components (buttons, cards, dialogs, forms, etc.)
- Path aliases configured: `@/` for client src, `@shared/` for shared types, `@assets/` for static assets

**Styling & Design System**
- Custom CSS variables for light/dark theme support (though currently light-theme focused)
- Design inspired by Linear, Apple, and Stripe - emphasizing minimalism, glassmorphism, and depth
- Typography using Google Fonts: Inter, DM Sans, Fira Code, and Geist Mono
- Consistent spacing system based on Tailwind's 4/8/12/16/24/32 unit scale
- Custom animations using Framer Motion for 3D effects, particles, and smooth transitions

**Key Pages & Components**
- **Home Page**: Full-screen hero with 3D animated background, stats section, and community links
- **Chat Page**: Real-time AI chat interface with message history and typing indicators
- **Background3D Component**: Procedurally generated 3D shapes and particle systems for visual depth
- **Reusable UI**: ChatMessage, TypingIndicator, StatsSection, CommunitySection components

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- Separate entry points for development (`index-dev.ts`) and production (`index-prod.ts`)
- Development mode integrates Vite middleware for HMR and live reloading
- Production mode serves pre-built static assets from dist/public

**API Structure**
- RESTful API endpoint: `POST /api/chat` for ProAi conversations
- Request/response handling with proper error handling and logging
- Raw body capture for webhook support (configured but not actively used)
- Request timing and logging middleware for monitoring

**Session & State Management**
- In-memory storage implementation (`MemStorage`) for user data
- Interface-based storage abstraction (`IStorage`) allows easy swapping to database
- Currently stores users with username/password (authentication not implemented in UI)

### Data Storage

**Database Setup (Configured but Minimal Use)**
- **Drizzle ORM** configured with PostgreSQL dialect
- **Neon Database** serverless Postgres as the target (via `@neondatabase/serverless`)
- Schema defines two tables:
  - `users`: id, username, password (UUID primary keys)
  - `chat_messages`: id, role, content, timestamp (not currently used - messages stored client-side)
- Zod schemas for runtime validation of database insertions
- Migrations folder configured but application uses in-memory storage primarily

**Current Storage Strategy**
- Chat messages stored client-side in React component state (not persisted)
- User data exists in schema but no active authentication flow implemented
- Database infrastructure ready for future persistence layer

### External Dependencies

**AI Integration**
- **Google Gemini API** (`@google/genai` v1.30.0) as the AI backend
- Uses Developer API Key (not Vertex AI)
- Custom system prompt configures ProAi's personality and brand identity
- ProAi instructed to identify as built by Prothon, avoid mentioning competitors
- Configured to be helpful, confident, and capable across multiple domains

**UI Component Libraries**
- **Radix UI** primitives (20+ packages) for accessible, unstyled component foundations
- **Framer Motion** for complex animations and 3D effects
- **React Icons** (specifically `react-icons/si` for social media brand icons)
- **TanStack Query** (React Query) for async state management and data fetching

**Development Tools**
- **Replit-specific plugins**: cartographer (code navigation), dev-banner, runtime error overlay
- **TypeScript** with strict mode for type safety
- **ESBuild** for production server bundling (fast, minimal configuration)
- **PostCSS** with Autoprefixer for CSS compatibility

**Styling & Utilities**
- **tailwind-merge** and **clsx** for conditional class composition
- **class-variance-authority** for type-safe component variants
- **date-fns** for date formatting and manipulation
- **cmdk** for command palette UI patterns (available but not currently used)

**Social Platform Links**
- Instagram: @Prothonai
- YouTube: Prothon channel
- Telegram: Support channel for developer community

**Environment Requirements**
- `GEMINI_API_KEY`: Google Gemini Developer API key (required for chat functionality)
- `DATABASE_URL`: PostgreSQL connection string (configured but optional given in-memory storage)