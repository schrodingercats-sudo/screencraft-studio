# Product Requirements Document (PRD)

## **ScreenCraft Studio**
### *AI-Powered Screen Recording to 3D Animated Video Creator*

**Version:** 1.0  
**Date:** January 31, 2026  
**Status:** In Development - MVP Phase

---

## 1. Executive Summary

**ScreenCraft Studio** is a full-stack SaaS web application that transforms screen recordings into professional 3D animated videos with an intuitive video editing interface. Built for creators, marketers, agencies, and indie hackers who need to produce polished product demos, app showcases, and website presentations without expensive software or professional editing skills.

The platform combines the mockup capabilities of **Shots.so** and **Rotato**, the AI-powered video editing of **Diffusion Studio** and **Odysser**, and the content creation speed of **ContentCore** into a single unified platform.

**Core Value Proposition:** Upload a screen recording → AI analyzes content → Generate stunning 3D animated mockups → Edit with AI assistance → Export professional videos in minutes, not hours.

---

## 2. Problem Statement

**Pain Points We're Solving:**

- Creators building products, apps, and websites struggle to showcase their work professionally
- Current solutions require purchasing multiple tools (screen recorders, mockup generators, 3D animation software, video editors)
- Learning curves for tools like After Effects can take months
- Freelancers and agencies spend hours on repetitive tasks like adding device frames, creating zoom animations, and syncing to music
- No unified workflow from screen recording to final polished video

**Target Users:**

**Primary Audience:**
- Indie hackers and solopreneurs launching products on Product Hunt
- App developers creating App Store preview videos
- SaaS founders making demo videos for landing pages
- Content creators producing tutorials and walkthroughs

**Secondary Audience:**
- Marketing teams at startups producing promotional content
- Agencies creating client deliverables at scale
- Video editors seeking faster workflows with AI assistance

---

## 3. Product Vision

**Vision Statement:** Become the "Canva for product videos" where anyone can create studio-quality 3D animated videos from screen recordings without any design or video editing experience.

**Success Metrics:**

**User Adoption:**
- 10,000 registered users within 6 months
- 25% free-to-paid conversion rate
- NPS score above 50

**Engagement:**
- 5+ videos created per active user per month
- Less than 10 minutes from upload to export for standard projects
- 40% monthly active user retention rate

**Revenue:**
- $50K MRR within 12 months

---

## 4. Core Features & Functionality

### 4.1 Screen Recording Module

**Built-in Screen Recorder:**
- Browser-based screen capture using Screen Capture API
- Record full screen, specific window, or browser tab
- Optional webcam overlay with customizable position and size
- Audio capture from system and microphone
- Real-time recording preview with pause and resume capability

**Upload Options:**
- Drag-and-drop upload interface
- Support for common formats: MP4, WebM, MOV, AVI
- Direct URL import from cloud storage (Google Drive, Dropbox, iCloud)
- Batch upload for multiple recordings
- Maximum file size: 2GB with chunked upload support

### 4.2 3D Mockup Generator

**Device Library:**
- **iPhones**: 12, 13, 14, 15, 15 Pro, 16 Pro Max
- **Android**: Samsung Galaxy, Pixel, OnePlus
- **MacBooks**: Air, Pro
- **iPads**: All sizes
- **Desktop**: iMac, Studio Display
- **Browser**: Customizable chrome

**3D Transformation Options:**
- Perspective rotation with X, Y, Z axis control
- Depth and parallax effects
- Realistic shadows (soft, hard, drop options)
- Reflection and surface materials
- Clay mode for neutral presentations
- Glass and metal device finishes

**Background System:**
- Solid colors with full color picker
- Gradient backgrounds with multi-stop support
- Magic backgrounds using AI-generated contextual scenes
- Image backgrounds from uploads or Unsplash integration
- Video backgrounds with parallax movement
- HDRI environment maps for realistic reflections

### 4.3 Animation Engine

**Preset Animations:**
- Intro animations: fade, slide, scale, flip
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

### 4.4 Video Editor

**Timeline Editor:**
- Multi-track timeline (video, audio, effects layers)
- Clip trimming, splitting, and merging
- Audio waveform visualization
- Snapping and magnetic timeline
- Zoom and scroll for precision editing

**Playback Controls:**
- Play, pause, skip forward/backward
- Frame-by-frame navigation
- Loop playback mode
- Speed controls (0.25x - 2x)
- Real-time preview

### 4.5 Export & Publishing

**Export Options:**
- Resolution: 720p, 1080p, 4K
- Format: MP4, WebM, MOV, GIF
- Aspect ratios: 16:9, 9:16, 1:1, 4:5
- Frame rate: 24, 30, 60 fps
- Quality and compression controls

---

## 5. Technical Architecture

### 5.1 Technology Stack

**Frontend:**
- Next.js 14 with App Router
- React 18 with TypeScript
- Tailwind CSS v4
- Three.js with React Three Fiber
- Zustand for state management
- Radix UI components

**Backend (Future):**
- Node.js with Bun
- Hono.js API framework
- PostgreSQL with Supabase
- Redis for caching
- BullMQ for job processing

**Infrastructure:**
- Vercel for hosting
- Cloudflare R2 for file storage
- Cloudflare Stream for video processing

---

## 6. Development Phases

### Phase 1: MVP (Current) ✓

**Week 1-2: Project Foundation**
- Next.js setup with routing
- Basic UI components
- 3D rendering with Three.js
- File upload interface

**Week 3-4: Core Editor**
- Video player with controls
- Timeline component
- Device mockup generator (3 types)
- Properties panel

**Week 5-6: Essential Features**
- Background customization
- Transform controls
- Export functionality
- Dashboard and project management

### Phase 2: AI Features (Next)

- Whisper API for transcription
- Auto-caption generation
- Scene detection
- Chat-to-edit interface with Claude API

### Phase 3: Advanced Editor

- Multi-track timeline
- Audio editing
- Keyframe animation system
- Effect library

### Phase 4: Scale & Polish

- Performance optimization
- Template marketplace
- Team collaboration
- Billing system

---

## 7. User Interface Design

### 7.1 Key Screens

**Landing Page:**
- Hero section with demo video
- Feature showcase
- Pricing tiers
- CTA buttons

**Dashboard:**
- Project grid with thumbnails
- Recent projects
- Quick start options
- Usage stats

**Editor Workspace:**
- Three-panel layout:
  - Left: Preview with 3D mockup
  - Bottom: Timeline
  - Right: Properties panel
- Dark mode optimized
- Keyboard shortcuts

### 7.2 Design System

**Colors:**
- Primary: #6366F1 (Indigo)
- Secondary: #8B5CF6 (Purple)
- Background Dark: #0F0F0F
- Background Light: #FAFAFA

**Typography:**
- Font: Inter
- Headings: Bold
- Body: Regular

**Spacing:**
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64

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
- AI editing (100 prompts/month)
- 5-minute max duration

**Pro Tier ($49/month):**
- Everything in Creator
- 4K export
- Unlimited exports
- Unlimited AI editing
- Priority processing
- Team collaboration (3 seats)
- API access

**Agency Tier ($149/month):**
- Everything in Pro
- 10 team seats
- White-label exports
- Custom templates
- Dedicated support
- SSO integration

---

## 9. Success Metrics & KPIs

### 9.1 Product Metrics

**Activation:**
- % of signups who create first video (target: 40%)
- Time to first export (target: <15 minutes)

**Engagement:**
- Videos per active user per month (target: 5+)
- Average session duration (target: 20+ minutes)
- Feature adoption rate for AI editing (target: 60%)

**Retention:**
- Day 7 retention (target: 35%)
- Day 30 retention (target: 20%)
- Monthly active user rate (target: 40%)

### 9.2 Business Metrics

**Revenue:**
- MRR growth rate (target: 15% MoM)
- Average revenue per user (target: $25)
- LTV:CAC ratio (target: 3:1)

**Growth:**
- Organic signup rate (target: 60% of signups)
- Referral rate (target: 15% of new users)

---

## 10. Future Roadmap

### Version 2.0 (6+ months)
- Mobile app for quick captures
- Real-time collaboration
- Plugin system for custom effects
- Advanced color grading
- Motion tracking

### Version 3.0 (12+ months)
- AI video generation from scripts
- Interactive video elements
- Live streaming integration
- VR/AR preview modes
- White-label SDK

---

## 11. Competitive Analysis

**Shots.so:**
- ✅ Beautiful mockups
- ✅ Easy to use
- ❌ Limited AI features
- ❌ No timeline editor

**Diffusion Studio:**
- ✅ AI-first editing
- ✅ Browser-based
- ❌ No 3D mockups
- ❌ Early stage

**Rotato:**
- ✅ Professional 3D mockups
- ✅ Animation presets
- ❌ Mac-only
- ❌ No AI features

**Our Differentiation:**
- 3D mockups + AI editing + browser-based + professional timeline
- All-in-one solution
- Lower price point
- Faster time to value

---

## 12. Appendix

### 12.1 Glossary

- **Mockup**: Visual representation of design in device frame
- **Keyframe**: Point in time where property value is defined
- **Easing**: Rate of change in animation over time
- **Compositing**: Combining visual elements into single image
- **Transcoding**: Converting video from one format to another

---

**Document Status:** In Development  
**Next Steps:** Complete Phase 1 MVP, Begin Phase 2 AI Features  
**Contact:** Development Team

---

*This PRD is a living document and will be updated as the product evolves.*
