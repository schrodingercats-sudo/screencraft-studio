# Changelog

All notable changes to ScreenCraft Studio will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Video playback functionality
- Real-time transform controls
- Export to video file
- User authentication
- AI transcription
- Caption generation
- Animation presets
- Template system

## [0.1.0] - 2026-01-31

### Added - MVP Phase 1: Foundation

#### Pages & Routing
- Landing page with hero section, features, and call-to-action
- Dashboard page with project grid and quick actions
- Video editor page with three-panel layout
- Responsive navigation across all pages

#### 3D Rendering System
- Three.js integration with React Three Fiber
- 3D device mockups:
  - iPhone 15 Pro with realistic frame and screen
  - MacBook Pro with keyboard base
  - Browser window with chrome
- Real-time lighting and shadows
- Smooth rotation animations
- Environment effects with studio preset

#### Editor Interface
- Preview panel with 3D canvas
- Timeline editor with playback controls
- Properties panel with device, background, and transform controls
- Multi-track timeline layout (video and audio tracks)
- Dark mode optimized UI design
- Time display and duration tracking

#### Upload System
- Drag-and-drop file upload interface
- File browser selection
- Upload progress indicator
- Video file validation (video/* MIME types)
- File size display and limits (2GB max)
- Visual feedback during upload

#### State Management
- Zustand store implementation
- Project state management
- Asset tracking system
- Clip management with transforms
- Timeline state (current time, playing status)
- Selected clip tracking

#### UI Components
- Button component with multiple variants (default, destructive, outline, secondary, ghost, link)
- Button sizes (default, sm, lg, icon)
- Card components with header, content, and footer
- Custom styled range inputs
- Custom checkbox styling
- Responsive layouts

#### Documentation
- README.md - Project overview and setup instructions
- PRD.md - Complete Product Requirements Document
- FEATURES.md - Feature list with current status and roadmap
- ARCHITECTURE.md - Technical architecture and system design
- DEVELOPMENT.md - Developer guide and workflow
- QUICKSTART.md - Quick start guide for new developers
- PROJECT_SUMMARY.md - High-level project summary
- CHANGELOG.md - This file

#### Developer Experience
- TypeScript strict mode enabled
- ESLint configuration
- Next.js 14 App Router
- Tailwind CSS v4 integration
- Hot module replacement
- Fast refresh during development

#### Build & Deploy
- Production build optimization
- Static site generation for all routes
- Turbopack bundler integration
- Zero build errors
- Tree-shaking and code splitting
- Optimized bundle size

### Technical Details

#### Dependencies Added
- **Core:**
  - next@16.1.6
  - react@19.2.3
  - react-dom@19.2.3
  - typescript@5.x

- **3D Rendering:**
  - three@0.182.0
  - @react-three/fiber@9.5.0
  - @react-three/drei@10.7.7
  - @types/three

- **State Management:**
  - zustand@5.0.10

- **UI Components:**
  - @radix-ui/react-avatar@1.1.11
  - @radix-ui/react-dialog@1.1.15
  - @radix-ui/react-dropdown-menu@2.1.16
  - @radix-ui/react-select@2.2.6
  - @radix-ui/react-slider@1.3.6
  - @radix-ui/react-tabs@1.1.13
  - @radix-ui/react-tooltip@1.2.8

- **Styling:**
  - tailwindcss@4.x
  - @tailwindcss/postcss@4.x
  - class-variance-authority@0.7.1
  - clsx@2.1.1
  - tailwind-merge@3.4.0

- **Icons:**
  - lucide-react@0.563.0

#### File Structure Created
```
22 TypeScript/TSX files
7 Markdown documentation files
3 JSON configuration files
1 CSS file
```

#### Lines of Code
- Approximately 2,000+ lines of TypeScript/TSX
- Approximately 25,000+ words of documentation

### Configuration

#### Added Configuration Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint rules
- `.env.example` - Environment variables template
- `.gitignore` - Git ignore patterns

#### Environment Setup
- Node.js 18.17.0+ required
- npm package manager
- Development server on port 3000
- Production build optimization

### Known Limitations

#### Not Yet Implemented
- Video playback functionality (UI only)
- Transform controls not connected to 3D view
- Background selection not applied to preview
- Export functionality is placeholder
- No backend or database
- No user authentication
- No file storage system
- No screen recording

#### Expected in Phase 2
- Functional video player
- Working timeline scrubbing
- Real-time transform updates
- Background application
- Basic export functionality

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

Requires WebGL support for 3D rendering.

### Performance

- Build time: ~5-7 seconds
- Static pages: 4 routes prerendered
- Bundle size: Optimized with code splitting
- No blocking resources
- Fast refresh during development

---

## Version History

### v0.1.0 (2026-01-31) - MVP Foundation
Initial release with complete UI foundation, 3D rendering system, and comprehensive documentation. Ready for Phase 2 development to add functional video editing capabilities.

---

## Contributing

See [DEVELOPMENT.md](./DEVELOPMENT.md) for contribution guidelines.

## Questions?

- Check [QUICKSTART.md](./QUICKSTART.md) to get started
- Read [FEATURES.md](./FEATURES.md) for feature status
- See [ARCHITECTURE.md](./ARCHITECTURE.md) for technical details
- Review [PRD.md](./PRD.md) for product requirements

---

**Note:** This is a living document that will be updated with each release.
