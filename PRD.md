# Product Requirements Document (PRD)

## **ScreenCraft Studio**
### *AI-Powered Screen Recording to 3D Animated Video Creator*

**Version:** 1.0  
**Date:** January 31, 2026  
**Author:** Product Team  
**Status:** In Development - MVP Phase

---

## 1. Executive Summary

**ScreenCraft Studio** is a full-stack SaaS web application that transforms screen recordings into professional 3D animated videos with an intuitive video editing interface. Built for creators, marketers, agencies, and indie hackers who need to produce polished product demos, app showcases, and website presentations without expensive software or professional editing skills.

The platform combines the mockup capabilities of **Shots.so** and **Rotato**, the AI-powered video editing of **Diffusion Studio** and **Odysser**, and the content creation speed of **ContentCore** into a single unified platform.

**Core Value Proposition:** Upload a screen recording → AI analyzes content → Generate stunning 3D animated mockups → Edit with AI assistance → Export professional videos in minutes, not hours.

---

## 2. Problem Statement

**Pain Points We're Solving:**

Creators building products, apps, and websites struggle to showcase their work professionally. Current solutions require purchasing multiple tools (screen recorders, mockup generators, 3D animation software, video editors). Learning curves for tools like After Effects can take months. Freelancers and agencies spend hours on repetitive tasks like adding device frames, creating zoom animations, and syncing to music. There's no unified workflow from screen recording to final polished video.

**Target Users:**

The primary audience includes indie hackers and solopreneurs launching products on Product Hunt, app developers creating App Store preview videos, SaaS founders making demo videos for landing pages, and content creators producing tutorials and walkthroughs.

The secondary audience encompasses marketing teams at startups producing promotional content, agencies creating client deliverables at scale, and video editors seeking faster workflows with AI assistance.

---

## 3. Product Vision

**Vision Statement:** Become the "Canva for product videos" where anyone can create studio-quality 3D animated videos from screen recordings without any design or video editing experience.

**Success Metrics:**

For user adoption, we target 10,000 registered users within 6 months, a 25% free-to-paid conversion rate, and an NPS score above 50. For engagement, we aim for an average of 5+ videos created per active user per month, less than 10 minutes from upload to export for standard projects, and a 40% monthly active user retention rate. Revenue targets include $50K MRR within 12 months.

---

## 4. Core Features & Functionality

### 4.1 Screen Recording Module

**Built-in Screen Recorder:**
- Browser-based screen capture using the Screen Capture API
- Record full screen, specific window, or browser tab
- Optional webcam overlay with customizable position and size
- Audio capture from system and microphone
- Real-time recording preview with pause and resume capability

**Upload Options:**
- Drag-and-drop upload interface
- Support for common formats including MP4, WebM, MOV, and AVI
- Direct URL import from cloud storage providers like Google Drive, Dropbox, and iCloud
- Batch upload for multiple recordings
- Maximum file size of 2GB with chunked upload support

### 4.2 AI Content Analysis Engine

**Automatic Scene Detection:**
- AI identifies distinct scenes and transitions in recordings
- Detects UI elements such as buttons, forms, modals, and navigation
- Recognizes app or website type for optimized animations
- Generates transcript from audio using speech-to-text
- Creates automatic chapter markers based on content changes

**Smart Suggestions:**
- Recommends optimal device frames such as iPhone, MacBook, or iPad
- Suggests animation styles based on content type
- Proposes zoom points on important UI interactions
- Identifies and flags dead air or silent sections
- Recommends background music from the library

### 4.3 3D Mockup Generator (Similar to Shots.so)

**Device Library:**
The platform includes iPhones from 12 through 16 Pro Max, Android devices like Samsung Galaxy, Pixel, and OnePlus, MacBooks including Air and Pro, iPads in all sizes, Desktop monitors such as iMac and Studio Display, and browser windows with customizable chrome.

**3D Transformation Options:**
- Perspective rotation with X, Y, and Z axis control
- Depth and parallax effects
- Realistic shadows with soft, hard, and drop options
- Reflection and surface materials
- Clay mode for neutral presentations
- Glass and metal device finishes

**Background System:**
- Solid colors with a full color picker
- Gradient backgrounds with multi-stop support
- Magic backgrounds using AI-generated contextual scenes
- Image backgrounds from uploads or Unsplash integration
- Video backgrounds with parallax movement
- HDRI environment maps for realistic reflections

### 4.4 Animation Engine

**Preset Animations (Inspired by Rotato):**
- Intro animations including fade, slide, scale, and flip
- Device rotation sequences with smooth easing
- Zoom to focus on specific screen areas
- Pan and scan for longer content
- Parallax depth effects
- Beat-synced animations that match music rhythm

**Custom Animation Builder:**
- Keyframe-based animation timeline
- Bezier curve easing controls
- Animation grouping and sequencing
- Copy and paste animations across clips
- Save custom animations as presets
- Animation duration and delay controls

**Smart Animation:**
- Auto-animate based on transcript keywords
- AI suggests zoom points on important interactions
- Automatic Ken Burns effect on static images
- Content-aware transitions between scenes

### 4.5 AI Video Editor (Inspired by Diffusion Studio & Odysser)

**Chat-to-Edit Interface:**
- Natural language commands such as "zoom in on the login button at 0:45"
- Batch operations through conversation like "add captions to all scenes"
- Style requests such as "make it more energetic" or "add corporate feel"
- Revision requests like "undo last 3 changes"

**Autonomous Editing Mode:**
- AI analyzes video and creates initial edit
- Automatic removal of dead air and silence
- Smart cuts at natural pause points
- B-roll suggestions and insertions
- Caption generation with multiple styles

**Traditional Timeline Editor:**
- Multi-track timeline with video, audio, and effects layers
- Clip trimming, splitting, and merging
- Audio waveform visualization
- Snapping and magnetic timeline
- Zoom and scroll for precision editing

### 4.6 Text & Caption System

**Auto-Captions:**
- AI-powered transcription with 95%+ accuracy
- Support for 50+ languages
- Speaker diarization for multiple voices
- Timestamp alignment with video

**Caption Styles:**
- Animated word-by-word reveal similar to trending reels style
- Karaoke-style highlighting
- Subtitle positioning options at top, center, and bottom
- Custom fonts and colors
- Emoji and icon insertions
- Background boxes with opacity controls

**Title & Text Overlays:**
- Animated title templates
- Lower thirds for speaker names
- Call-to-action overlays
- Customizable text animations

### 4.7 Audio & Music

**Music Library:**
- Royalty-free music categorized by mood
- Sound effects library
- Beat detection for animation syncing
- Volume automation and ducking

**AI Audio Features:**
- Text-to-speech voiceover generation
- Voice cloning with user consent
- Background noise removal
- Audio enhancement and normalization

**Audio Editing:**
- Multi-track audio mixing
- Fade in and out controls
- Audio trim and split
- Volume keyframes

### 4.8 Brand Kit & Templates

**Brand Kit:**
- Upload logos with automatic background removal
- Define brand colors in primary, secondary, and accent
- Set brand fonts for headings and body
- Save intros and outros
- Watermark settings

**Template System:**
- Pre-built templates for Product Hunt launches, App Store previews, social media including TikTok, Reels, and YouTube, website demos, and tutorial walkthroughs
- Community template gallery
- Save and share custom templates
- One-click template application

### 4.9 Export & Publishing

**Export Options:**
- Resolution choices of 720p, 1080p, and 4K
- Format support for MP4, WebM, MOV, and GIF
- Aspect ratios including 16:9, 9:16, 1:1, and 4:5
- Frame rate options of 24, 30, and 60 fps
- Quality and compression controls

**Direct Publishing:**
- YouTube integration
- Twitter and X video upload
- LinkedIn native video
- TikTok publishing
- Download to device

**Collaboration Features:**
- Shareable preview links
- Comment and feedback system
- Version history
- Team workspace

---

## 5. Technical Architecture

### 5.1 Technology Stack

**Frontend:**
- Framework: Next.js 14 with App Router
- UI Library: React 18 with TypeScript
- Styling: Tailwind CSS with shadcn/ui components
- 3D Rendering: Three.js with React Three Fiber
- Video Processing: FFmpeg.wasm for browser-based processing
- State Management: Zustand for global state
- Animation: Framer Motion and GSAP
- Canvas: Fabric.js for timeline and overlays

**Backend:**
- Runtime: Node.js with Bun
- API Framework: Hono.js for edge-first API
- Real-time: Socket.io for collaborative features
- Queue System: BullMQ with Redis for job processing
- File Processing: FFmpeg for server-side video processing

**AI & ML Services:**
- Speech-to-Text: OpenAI Whisper or Deepgram
- LLM for Chat-to-Edit: Claude API or GPT-4
- Scene Detection: Custom ML model or Replicate API
- Text-to-Speech: ElevenLabs or PlayHT
- Image Generation: Stable Diffusion for backgrounds

**Database:**
- Primary DB: PostgreSQL with Supabase
- Cache: Redis for sessions and real-time data
- File Storage: Cloudflare R2 or AWS S3
- Vector DB: Pinecone for AI features

**Infrastructure:**
- Hosting: Vercel for frontend, Railway for backend
- CDN: Cloudflare for media delivery
- Video Processing: Mux or Cloudflare Stream
- Monitoring: Sentry for errors, PostHog for analytics

### 5.2 System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   Next.js   │  │  Three.js   │  │  FFmpeg.wasm           │  │
│  │   Frontend  │  │  3D Engine  │  │  (Browser Processing)   │  │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         API LAYER                                │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    Hono.js API                           │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │    │
│  │  │  Auth    │ │ Projects │ │  Assets  │ │  Export  │   │    │
│  │  │  Routes  │ │  Routes  │ │  Routes  │ │  Routes  │   │    │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘   │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      SERVICE LAYER                               │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                 │
│  │    AI      │  │   Video    │  │   Asset    │                 │
│  │  Services  │  │ Processing │  │  Manager   │                 │
│  │            │  │   Queue    │  │            │                 │
│  │ - Whisper  │  │ - FFmpeg   │  │ - Upload   │                 │
│  │ - Claude   │  │ - Mux      │  │ - CDN      │                 │
│  │ - SDXL     │  │ - Render   │  │ - Storage  │                 │
│  └────────────┘  └────────────┘  └────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       DATA LAYER                                 │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                 │
│  │ PostgreSQL │  │   Redis    │  │ Cloudflare │                 │
│  │ (Supabase) │  │   Cache    │  │     R2     │                 │
│  └────────────┘  └────────────┘  └────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 Database Schema

```sql
-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  avatar_url TEXT,
  subscription_tier VARCHAR(50) DEFAULT 'free',
  subscription_status VARCHAR(50) DEFAULT 'active',
  stripe_customer_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Projects Table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  status VARCHAR(50) DEFAULT 'draft',
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Assets Table (Videos, Images, Audio)
CREATE TABLE assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL, -- 'video', 'image', 'audio'
  name VARCHAR(255),
  original_url TEXT NOT NULL,
  processed_url TEXT,
  thumbnail_url TEXT,
  duration_ms INTEGER,
  width INTEGER,
  height INTEGER,
  file_size_bytes BIGINT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Timeline Table
CREATE TABLE timelines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  name VARCHAR(255) DEFAULT 'Main Timeline',
  duration_ms INTEGER DEFAULT 0,
  tracks JSONB DEFAULT '[]',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Clips Table
CREATE TABLE clips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  timeline_id UUID REFERENCES timelines(id) ON DELETE CASCADE,
  asset_id UUID REFERENCES assets(id) ON DELETE SET NULL,
  track_index INTEGER NOT NULL,
  start_time_ms INTEGER NOT NULL,
  duration_ms INTEGER NOT NULL,
  source_start_ms INTEGER DEFAULT 0,
  source_end_ms INTEGER,
  transform JSONB DEFAULT '{}', -- position, scale, rotation
  effects JSONB DEFAULT '[]',
  animations JSONB DEFAULT '[]',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Mockup Configurations
CREATE TABLE mockup_configs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clip_id UUID REFERENCES clips(id) ON DELETE CASCADE,
  device_type VARCHAR(100) NOT NULL,
  device_color VARCHAR(50),
  perspective JSONB DEFAULT '{"x": 0, "y": 0, "z": 0}',
  shadow JSONB DEFAULT '{}',
  reflection BOOLEAN DEFAULT false,
  background JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Captions Table
CREATE TABLE captions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  start_time_ms INTEGER NOT NULL,
  end_time_ms INTEGER NOT NULL,
  speaker VARCHAR(255),
  style JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Exports Table
CREATE TABLE exports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'pending',
  format VARCHAR(50) NOT NULL,
  resolution VARCHAR(50) NOT NULL,
  output_url TEXT,
  error_message TEXT,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Brand Kits
CREATE TABLE brand_kits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  logo_url TEXT,
  colors JSONB DEFAULT '{}',
  fonts JSONB DEFAULT '{}',
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Templates
CREATE TABLE templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  category VARCHAR(100),
  is_public BOOLEAN DEFAULT false,
  is_premium BOOLEAN DEFAULT false,
  project_data JSONB NOT NULL,
  use_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- AI Chat History
CREATE TABLE ai_chat_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  messages JSONB DEFAULT '[]',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## 6. User Interface Design

### 6.1 Key Screens

**Dashboard:**
- Project grid with thumbnails and quick actions
- Recent projects section
- Template gallery quick access
- Usage stats and remaining exports
- Quick start buttons for new project or upload

**Editor Workspace:**
- Three-panel layout with preview on the left, timeline in the center/bottom, and properties on the right
- Collapsible panels for maximizing workspace
- Dark and light mode support
- Keyboard shortcuts overlay accessible via the "?" key

**Preview Panel:**
- Real-time 3D preview with device mockup
- Play, pause, and scrub controls
- Full-screen preview mode
- Zoom controls
- Safe area guides

**Timeline Panel:**
- Multi-track timeline showing video, audio, text, and effects
- Zoom slider for precision
- Playhead with time display
- Track lock and visibility toggles
- Clip thumbnails and waveforms

**Properties Panel:**
- Context-aware properties based on selection
- Tabbed interface with transform, effects, and animation sections
- Preset quick-apply buttons
- Numeric input with scrubbing
- Color pickers with recent colors

**AI Assistant Panel:**
- Chat interface with conversation history
- Suggested prompts and actions
- Action preview before applying
- Undo and redo controls

### 6.2 Design System

**Colors:**
- Primary: #6366F1 (Indigo)
- Secondary: #8B5CF6 (Purple)
- Success: #10B981 (Green)
- Warning: #F59E0B (Amber)
- Error: #EF4444 (Red)
- Background Dark: #0F0F0F
- Background Light: #FAFAFA

**Typography:**
- Headings: Inter (Bold)
- Body: Inter (Regular)
- Monospace: JetBrains Mono (for timestamps)

**Spacing Scale:**
- 4px base unit
- Spacing: 4, 8, 12, 16, 24, 32, 48, 64

---

## 7. User Flows

### 7.1 New User Onboarding

The flow begins when a user visits the landing page, where they see a demo video and features. They click "Get Started Free," which leads them to either sign up with email or continue with Google or GitHub authentication. They then complete a profile with their name and avatar. An interactive tour highlights key features like upload, mockup, AI edit, and export. They start their first project by either uploading a recording or using a sample, then experience a "wow moment" by seeing an instant 3D mockup with AI suggestions.

### 7.2 Core Creation Flow

**Step 1: Upload or Record**
- User drags and drops a screen recording or clicks to record their screen
- File uploads with progress indicator
- Processing begins automatically

**Step 2: AI Analysis**
- System extracts audio and generates transcript
- Detects scenes and transitions
- Identifies UI elements
- Presents suggestions for mockups and animations

**Step 3: Mockup Selection**
- User chooses device frame
- Adjusts 3D perspective with intuitive controls
- Selects background style
- Previews in real-time

**Step 4: Animation**
- User selects from preset animations
- Or uses AI assistant: "add zoom on button click"
- Previews and adjusts timing

**Step 5: Captions & Audio**
- Reviews auto-generated captions
- Edits as needed
- Selects caption style
- Adds background music from library

**Step 6: Export & Share**
- Chooses resolution and format
- Clicks export
- Waits for processing
- Downloads or shares directly to social platforms

---

## 8. Monetization Strategy

### 8.1 Pricing Tiers

**Free Tier ($0/month):**
- 3 projects
- 720p export with watermark
- 5 exports per month
- Basic mockup devices
- Community templates
- 30-second max duration

**Creator Tier ($19/month):**
- Unlimited projects
- 1080p export without watermark
- 30 exports per month
- All mockup devices
- Premium templates
- AI editing with 100 prompts per month
- 5-minute max duration
- Basic brand kit

**Pro Tier ($49/month):**
- Everything in Creator
- 4K export
- Unlimited exports
- Unlimited AI editing
- Priority processing
- Advanced brand kit
- Team collaboration with 3 seats
- API access
- 30-minute max duration

**Agency Tier ($149/month):**
- Everything in Pro
- 10 team seats
- White-label exports
- Custom templates
- Dedicated support
- SSO integration
- Unlimited duration

### 8.2 Additional Revenue Streams

- Template marketplace with 30% commission
- Premium music library add-on at $9/month
- AI credits pack of 500 credits for $29
- Enterprise custom pricing

---

## 9. Development Phases

### Phase 1: MVP (Weeks 1-6)

**Week 1-2: Project Foundation**
- Next.js setup with authentication
- Database schema and Supabase integration
- Basic file upload to R2
- Simple dashboard UI

**Week 3-4: Core Editor**
- Video player with basic controls
- Single-track timeline
- Basic device mockup using Three.js
- Simple export functionality

**Week 5-6: Essential Features**
- 3 device types (iPhone, MacBook, Browser)
- 5 animation presets
- Basic background options
- 720p export

**MVP Deliverable:** Users can upload a screen recording, add a device mockup, apply basic animations, and export a video.

### Phase 2: AI Features (Weeks 7-10)

**Week 7-8: AI Integration**
- Whisper API for transcription
- Auto-caption generation
- Scene detection
- Basic AI suggestions

**Week 9-10: Chat-to-Edit**
- Claude API integration
- Natural language command parsing
- Action execution system
- Conversation history

### Phase 3: Advanced Editor (Weeks 11-14)

**Week 11-12: Timeline Enhancement**
- Multi-track timeline
- Audio track support
- Keyframe animation system
- Clip effects

**Week 13-14: Professional Features**
- Advanced 3D controls
- Custom animation builder
- Music library integration
- Brand kit system

### Phase 4: Scale & Polish (Weeks 15-18)

**Week 15-16: Performance**
- Optimized rendering pipeline
- Background processing queue
- CDN optimization
- Caching strategy

**Week 17-18: Growth Features**
- Template marketplace
- Team collaboration
- Billing and subscriptions
- Analytics dashboard

---

## 10. API Specifications

### 10.1 Core Endpoints

**Authentication:**
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - Login with credentials
- `POST /api/auth/logout` - End session
- `GET /api/auth/me` - Get current user

**Projects:**
- `GET /api/projects` - List user projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project details
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `POST /api/projects/:id/duplicate` - Duplicate project

**Assets:**
- `POST /api/assets/upload` - Upload new asset
- `GET /api/assets/:id` - Get asset details
- `DELETE /api/assets/:id` - Delete asset
- `POST /api/assets/:id/process` - Trigger processing

**Timeline:**
- `GET /api/projects/:id/timeline` - Get timeline data
- `PUT /api/projects/:id/timeline` - Update timeline
- `POST /api/projects/:id/timeline/clips` - Add clip
- `PUT /api/projects/:id/timeline/clips/:clipId` - Update clip
- `DELETE /api/projects/:id/timeline/clips/:clipId` - Remove clip

**AI Services:**
- `POST /api/ai/transcribe` - Generate transcription
- `POST /api/ai/chat` - Send chat command
- `POST /api/ai/suggest` - Get AI suggestions
- `POST /api/ai/generate-background` - Generate AI background

**Export:**
- `POST /api/exports` - Start export job
- `GET /api/exports/:id` - Get export status
- `GET /api/exports/:id/download` - Download exported file

### 10.2 WebSocket Events

**Real-time Collaboration:**
- `project:join` - Join project room
- `project:leave` - Leave project room
- `timeline:update` - Timeline changed
- `clip:add` - New clip added
- `clip:update` - Clip modified
- `clip:delete` - Clip removed
- `cursor:move` - User cursor position
- `export:progress` - Export progress update

---

## 11. Third-Party Integrations

### 11.1 Required Integrations

**Authentication:** Clerk or Auth.js for social login and email authentication

**Payments:** Stripe for subscriptions and one-time purchases

**File Storage:** Cloudflare R2 for video and image storage

**Video Processing:** Mux for video encoding and streaming, FFmpeg for transformations

**AI Services:** OpenAI Whisper for transcription, Anthropic Claude for chat-to-edit, Replicate for image generation, ElevenLabs for text-to-speech

**Analytics:** PostHog for product analytics, Sentry for error tracking

### 11.2 Optional Integrations

**Stock Media:** Unsplash for free images, Pexels for free videos, Epidemic Sound for music

**Publishing:** YouTube API, Twitter API, LinkedIn API, TikTok API

**Collaboration:** Slack notifications, Email via Resend

---

## 12. Security & Compliance

### 12.1 Security Measures

**Authentication Security:**
- JWT with short expiration and refresh tokens
- Rate limiting: 100 requests per minute for API, 10 per minute for auth
- Input validation on all endpoints
- SQL injection prevention via parameterized queries

**Data Protection:**
- Encryption at rest for all stored files
- HTTPS only with HSTS enabled
- Secure file upload with type validation
- Isolated processing environments for user content

**Privacy:**
- GDPR compliance with data export and deletion
- No training on user content without consent
- Secure credential storage
- Audit logging for admin actions

### 12.2 Compliance

**GDPR Requirements:**
- Data processing agreement
- Right to erasure
- Data portability
- Privacy policy

**SOC 2 Preparations:**
- Access controls
- Encryption standards
- Monitoring and logging
- Incident response plan

---

## 13. Success Metrics & KPIs

### 13.1 Product Metrics

**Activation:**
- % of signups who create first video (target: 40%)
- Time to first export (target: <15 minutes)

**Engagement:**
- Videos created per active user per month (target: 5+)
- Average session duration (target: 20+ minutes)
- Feature adoption rate for AI editing (target: 60%)

**Retention:**
- Day 7 retention (target: 35%)
- Day 30 retention (target: 20%)
- Monthly active user rate (target: 40%)

### 13.2 Business Metrics

**Revenue:**
- MRR growth rate (target: 15% month over month)
- Average revenue per user (target: $25)
- LTV to CAC ratio (target: 3:1)

**Growth:**
- Organic signup rate (target: 60% of signups)
- Referral rate (target: 15% of new users)

---

## 14. Risk Assessment

### 14.1 Technical Risks

**Video Processing at Scale:**
- Risk Level: Medium-High
- Mitigation: Queue-based architecture with auto-scaling workers

**AI Costs:**
- Risk Level: Medium
- Mitigation: Caching, rate limiting, and tiered access

**Browser Performance:**
- Risk Level: Medium
- Mitigation: WebGL optimization and graceful degradation

### 14.2 Business Risks

**Competition:**
- Risk Level: Medium
- Mitigation: Differentiation via 3D mockup focus and unified platform

**User Acquisition Costs:**
- Risk Level: Medium
- Mitigation: Content marketing and template SEO strategy

---

## 15. Future Roadmap

### Version 2.0 (6+ months)
- Mobile app for quick captures
- Real-time collaboration with multiple cursors
- Plugin system for custom effects
- Advanced color grading tools
- Motion tracking for element following

### Version 3.0 (12+ months)
- AI video generation from scripts
- Interactive video elements
- Live streaming integration
- VR/AR preview modes
- White-label SDK for enterprises

---

## 16. Competitive Analysis

### 16.1 Direct Competitors

**Shots.so:**
- ✅ Strengths: Beautiful mockups, easy-to-use interface, video zoom features
- ❌ Weaknesses: Limited AI features, no timeline editor, basic export options

**Diffusion Studio:**
- ✅ Strengths: AI-first editing, browser-based processing, chat interface
- ❌ Weaknesses: No 3D mockups, early stage development, limited templates

**Odysser:**
- ✅ Strengths: Autonomous AI editing, content-aware animations, simple workflow
- ❌ Weaknesses: No 3D mockups, limited customization, newer to market

**Rotato:**
- ✅ Strengths: Professional 3D mockups, animation presets, desktop app
- ❌ Weaknesses: Mac-only, no AI features, steeper learning curve

**Our Differentiation:**
- 3D mockups + AI editing + browser-based + professional timeline
- All-in-one solution eliminating need for multiple tools
- Lower price point with generous free tier
- Faster time to value (<10 minutes to first export)

---

## 17. Appendix

### 17.1 Glossary

- **Mockup**: A visual representation of a design in a device frame
- **Keyframe**: A point in time where a property value is defined for animation
- **Easing**: The rate of change in an animation over time
- **Compositing**: Combining visual elements into a single image
- **Transcoding**: Converting video from one format to another
- **CDN**: Content Delivery Network for fast file distribution

### 17.2 References

**Competitive Research:**
- [Shots.so](https://shots.so/) - Mockup creation features
- [Diffusion Studio](https://www.diffusion.studio/) - AI video editing
- [Odysser](https://odysser.com/) - AI autonomous editing
- [Rotato](https://rotato.app/) - 3D mockup animations
- [ContentCore](https://contentcore.xyz/) - Content creation model

---

**Document Status:** In Development - MVP Phase  
**Next Steps:** Complete Phase 1 MVP, Begin Phase 2 AI Features  
**Contact:** Development Team

---

*This PRD is a living document and will be updated as the product evolves based on user feedback and market validation.*
