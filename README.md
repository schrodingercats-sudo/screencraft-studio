# ScreenCraft Studio

**Transform Screen Recordings into Stunning 3D Videos**

ScreenCraft Studio is an AI-powered SaaS platform that converts screen recordings into professional 3D animated videos with device mockups, effects, and AI editing assistance.

## 🚀 Features

### Core Features (MVP)
- **3D Mockup Generator**: Transform screen recordings into professional device mockups (iPhone, MacBook, Browser)
- **Interactive Editor**: Timeline-based video editor with multi-track support
- **Real-time 3D Preview**: See changes instantly with Three.js-powered 3D rendering
- **Custom Backgrounds**: Solid colors, gradients, and custom backgrounds
- **Transform Controls**: Adjust rotation, scale, and position of device mockups
- **Video Effects**: Shadows, reflections, and more

### Coming Soon
- AI-powered editing with chat interface
- Auto-caption generation
- Animation presets
- Template marketplace
- Background music library
- Export to multiple formats

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS v4
- **3D Rendering**: Three.js, React Three Fiber, Drei
- **State Management**: Zustand
- **UI Components**: Radix UI, shadcn/ui
- **Icons**: Lucide React

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
/app
  /dashboard       # User dashboard with project management
  /editor          # Main video editor interface
  /page.tsx        # Landing page
  /layout.tsx      # Root layout
  /globals.css     # Global styles

/components
  /editor          # Editor-specific components
    /MockupPreview.tsx    # 3D preview canvas
    /DeviceMockup.tsx     # 3D device models
    /Timeline.tsx         # Timeline editor
    /PropertiesPanel.tsx  # Properties sidebar
    /UploadDialog.tsx     # File upload interface
  /ui              # Reusable UI components
    /button.tsx
    /card.tsx

/lib
  /store.ts        # Zustand state management
  /utils.ts        # Utility functions

/public
  # Static assets
```

## 🎨 Design System

- **Primary Color**: Indigo (#6366F1)
- **Secondary Color**: Purple (#8B5CF6)
- **Typography**: Inter
- **Dark Mode**: Optimized for dark UI in editor

## 📱 Device Support

### Currently Available
- iPhone 15 Pro
- MacBook Pro
- Browser Window

### Coming Soon
- iPad Pro
- Android Devices
- Desktop Monitors
- Multiple iPhone models

## 🧪 Development

### Environment Setup

```bash
# Node version
node >= 18.17.0

# Package manager
npm
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add environment variables as needed
NEXT_PUBLIC_API_URL=your_api_url
```

## 📚 Documentation

Comprehensive documentation is available:

- **[PRD.md](./PRD.md)** - Complete Product Requirements Document (952 lines)
  - Full database schema with SQL
  - API specifications and WebSocket events
  - System architecture diagram
  - User flows and UI specifications
  - Security & compliance requirements
  - 18-week development roadmap
- **[PRD_ENHANCEMENTS.md](./PRD_ENHANCEMENTS.md)** - PRD enhancement summary
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical architecture details
- **[FEATURES.md](./FEATURES.md)** - Feature status and roadmap
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Developer guide
- **[QUICKSTART.md](./QUICKSTART.md)** - Quick start guide
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Project status overview

## 📄 License

Copyright © 2026 ScreenCraft Studio. All rights reserved.

## 🤝 Contributing

This is a proprietary project. For inquiries, please contact the development team.

## 📞 Support

For support and feature requests, please open an issue in the project repository.

---

Built with ❤️ by the ScreenCraft Studio Team
