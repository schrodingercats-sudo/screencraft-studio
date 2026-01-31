# ScreenCraft Studio - Architecture Documentation

## Overview

ScreenCraft Studio is a Next.js 14 application using the App Router pattern with TypeScript, Tailwind CSS, and Three.js for 3D rendering.

## Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **3D Rendering**: Three.js + React Three Fiber + Drei
- **State Management**: Zustand
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

### Build & Development
- **Package Manager**: npm
- **Bundler**: Turbopack (Next.js 16)
- **Linting**: ESLint
- **Type Checking**: TypeScript

## Project Structure

```
screencraft-studio/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Landing page (/)
│   ├── layout.tsx                # Root layout with metadata
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── dashboard/                # Dashboard route
│   │   └── page.tsx              # Project management dashboard
│   └── editor/                   # Editor route
│       └── page.tsx              # Main video editor interface
│
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   │   ├── button.tsx            # Button with variants
│   │   └── card.tsx              # Card layouts
│   └── editor/                   # Editor-specific components
│       ├── MockupPreview.tsx     # 3D canvas preview
│       ├── DeviceMockup.tsx      # 3D device models
│       ├── Timeline.tsx          # Timeline editor
│       ├── PropertiesPanel.tsx   # Right sidebar properties
│       └── UploadDialog.tsx      # File upload UI
│
├── lib/                          # Utility libraries
│   ├── store.ts                  # Zustand state management
│   └── utils.ts                  # Helper functions
│
├── public/                       # Static assets
│
├── node_modules/                 # Dependencies
│
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
├── eslint.config.mjs             # ESLint configuration
├── README.md                     # Project documentation
├── PRD.md                        # Product Requirements Document
├── FEATURES.md                   # Feature documentation
└── ARCHITECTURE.md               # This file
```

## Core Components

### 1. Landing Page (`app/page.tsx`)
- Hero section with branding
- Feature showcase cards
- Call-to-action buttons
- Footer

### 2. Dashboard (`app/dashboard/page.tsx`)
- Project grid display
- Create new project card
- Quick start sections
- Project metadata (name, duration, thumbnail)

### 3. Editor (`app/editor/page.tsx`)
- Three-panel layout
- Orchestrates child components
- Manages editor state

### 4. MockupPreview (`components/editor/MockupPreview.tsx`)
- Three.js Canvas
- Lighting and camera setup
- Renders DeviceMockup component
- Environment effects

### 5. DeviceMockup (`components/editor/DeviceMockup.tsx`)
- 3D device models (iPhone, MacBook, Browser)
- Uses Three.js primitives and Drei helpers
- Animated rotation effects
- Material and lighting setup

### 6. Timeline (`components/editor/Timeline.tsx`)
- Playback controls
- Time display
- Visual timeline bar
- Multi-track layout

### 7. PropertiesPanel (`components/editor/PropertiesPanel.tsx`)
- Device selection
- Background customization
- Transform controls (rotation, scale)
- Effects toggles

### 8. UploadDialog (`components/editor/UploadDialog.tsx`)
- Drag-and-drop interface
- File browser
- Upload progress
- File validation

## State Management

### Zustand Store (`lib/store.ts`)

**State Shape:**
```typescript
interface EditorState {
  currentProject: Project | null
  assets: Asset[]
  clips: Clip[]
  currentTime: number
  isPlaying: boolean
  selectedClipId: string | null
}
```

**Actions:**
- `setCurrentProject(project)`
- `addAsset(asset)`
- `addClip(clip)`
- `updateClip(id, updates)`
- `deleteClip(id)`
- `setCurrentTime(time)`
- `setIsPlaying(playing)`
- `setSelectedClipId(id)`

### Data Models

**Project:**
```typescript
{
  id: string
  name: string
  thumbnail?: string
  createdAt: Date
  updatedAt: Date
  duration: number
}
```

**Asset:**
```typescript
{
  id: string
  projectId: string
  type: 'video' | 'image' | 'audio'
  name: string
  url: string
  duration?: number
  width?: number
  height?: number
  fileSize: number
}
```

**Clip:**
```typescript
{
  id: string
  assetId: string
  trackIndex: number
  startTime: number
  duration: number
  transform: {
    x: number
    y: number
    scale: number
    rotation: number
  }
  mockup?: MockupConfig
}
```

**MockupConfig:**
```typescript
{
  deviceType: 'iphone' | 'macbook' | 'browser'
  perspective: { x: number; y: number; z: number }
  background: {
    type: 'solid' | 'gradient'
    color: string
    color2?: string
  }
  shadow: boolean
}
```

## Routing

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `app/page.tsx` | Landing page |
| `/dashboard` | `app/dashboard/page.tsx` | Project dashboard |
| `/editor` | `app/editor/page.tsx` | Video editor |
| `/editor?project=:id` | `app/editor/page.tsx` | Load specific project |

## Styling System

### Tailwind CSS v4
- Uses `@import "tailwindcss"` in globals.css
- Custom theme variables in CSS
- Utility-first approach

### Design Tokens
```css
:root {
  --color-primary: #6366F1 (Indigo)
  --color-secondary: #8B5CF6 (Purple)
  --font-sans: Inter
}
```

### Component Variants (CVA)
- Button: default, destructive, outline, secondary, ghost, link
- Sizes: default, sm, lg, icon

## 3D Rendering Pipeline

### Three.js Setup
1. **Canvas**: React Three Fiber Canvas wrapper
2. **Camera**: PerspectiveCamera at [0, 0, 5]
3. **Controls**: OrbitControls for user interaction
4. **Lights**: Ambient, Directional, Spot
5. **Environment**: Drei Environment preset="studio"

### Device Models
- Built using Three.js primitives:
  - `RoundedBox` for device body
  - `Plane` for screen background
  - `mesh` with `planeGeometry` for content
- Materials: `meshStandardMaterial` with metalness/roughness

### Animation
- `useFrame` hook for continuous animations
- Rotation based on elapsed time
- Smooth easing functions

## Performance Considerations

### Current Optimizations
- Suspense boundaries for code splitting
- Static page generation where possible
- Lazy loading of heavy components

### Future Optimizations
- [ ] Virtual scrolling for large project lists
- [ ] Web Workers for video processing
- [ ] Incremental Static Regeneration
- [ ] CDN for assets
- [ ] Image optimization with Next/Image

## Build & Deployment

### Development
```bash
npm run dev      # Start dev server on localhost:3000
```

### Production Build
```bash
npm run build    # Build for production
npm start        # Start production server
```

### Environment Variables
See `.env.example` for required variables

### Deployment Targets
- **Primary**: Vercel (optimized for Next.js)
- **Alternative**: Any Node.js hosting platform

## Testing Strategy (Future)

### Unit Tests
- Jest + React Testing Library
- Component testing
- Utility function testing

### Integration Tests
- Playwright for E2E
- User flow testing
- Cross-browser testing

### Performance Tests
- Lighthouse CI
- Core Web Vitals monitoring
- 3D rendering performance

## Security Considerations

### Current
- No sensitive data storage yet
- Client-side only (no backend)
- Environment variables for API keys (future)

### Future
- Authentication with JWT
- API rate limiting
- File upload validation
- CSRF protection
- XSS prevention
- Content Security Policy

## Accessibility

### Current Implementation
- Semantic HTML
- Keyboard navigation (partial)
- ARIA labels (to be added)

### Future Improvements
- [ ] Full keyboard support
- [ ] Screen reader optimization
- [ ] High contrast mode
- [ ] Focus management
- [ ] Skip navigation links

## Browser Support

### Minimum Requirements
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

### Features Requiring Modern Browsers
- Three.js WebGL
- ES2020+ JavaScript
- CSS Grid and Flexbox
- ResizeObserver API

## Development Workflow

### Git Workflow
1. Create feature branch from main
2. Develop and test locally
3. Build and verify
4. Create pull request
5. Code review
6. Merge to main
7. Deploy to production

### Code Standards
- TypeScript strict mode
- ESLint rules enforced
- Prettier for formatting
- Conventional commits

## Monitoring & Analytics (Future)

### Application Monitoring
- Sentry for error tracking
- PostHog for product analytics
- Vercel Analytics for performance

### User Analytics
- Project creation rate
- Feature usage tracking
- Export completion rate
- User retention metrics

## API Integration Points (Future)

### External Services
- **OpenAI Whisper**: Audio transcription
- **Anthropic Claude**: AI chat-to-edit
- **Cloudflare R2**: File storage
- **Stripe**: Payment processing
- **Supabase**: Database and auth

### Webhook Handlers
- Stripe payment events
- Export completion notifications
- File processing status

## Scalability Considerations

### Current Limitations
- Client-side rendering only
- No database
- No file storage
- No user authentication

### Scaling Plan
1. **Phase 1 (Current)**: Static client-side app
2. **Phase 2**: Add backend API and database
3. **Phase 3**: Queue system for video processing
4. **Phase 4**: CDN and edge computing
5. **Phase 5**: Microservices architecture

## Troubleshooting

### Common Issues

**Build Failures:**
- Clear `.next` folder
- Delete `node_modules` and reinstall
- Check TypeScript errors

**3D Rendering Issues:**
- Check WebGL support in browser
- Update graphics drivers
- Disable browser extensions

**Performance Issues:**
- Check browser DevTools Performance tab
- Reduce number of 3D objects
- Optimize component re-renders

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Three.js Docs](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand](https://docs.pmnd.rs/zustand/)

### Learning Resources
- [Three.js Journey](https://threejs-journey.com/)
- [Next.js Learn](https://nextjs.org/learn)
- [React Documentation](https://react.dev/)

---

*Last Updated: January 31, 2026*
