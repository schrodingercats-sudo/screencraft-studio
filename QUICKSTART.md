# ScreenCraft Studio - Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📱 What You Can Do Right Now

### Landing Page (/)
- View the marketing page
- See feature highlights
- Click "Get Started Free" to go to dashboard

### Dashboard (/dashboard)
- See sample projects
- Click "New Project" to open editor
- Browse quick start options

### Editor (/editor)
- View 3D mockup preview with device frames
- See timeline interface
- Explore properties panel
- Test file upload (UI only - processing not yet implemented)

---

## 🎨 Key Features to Explore

### 1. 3D Device Mockups
**Location:** Editor page, center preview

**Try this:**
- Look at the rotating 3D device
- It automatically animates
- Three device types implemented:
  - iPhone 15 Pro
  - MacBook Pro
  - Browser Window

### 2. Properties Panel
**Location:** Editor page, right sidebar

**Try this:**
- Click different device buttons to "select" (visual only)
- Click background color swatches
- Adjust rotation and scale sliders (visual only)
- Toggle shadow and reflection effects (visual only)

### 3. Timeline Controls
**Location:** Editor page, bottom panel

**Try this:**
- Click play/pause button
- Click skip forward/backward
- See time display (0:00 / 1:00)
- View track layouts

### 4. Upload Interface
**Location:** Editor page, center (when no video loaded)

**Try this:**
- Click "Choose File" button
- Drag and drop a video file
- See upload progress animation
- File validation (only accepts video/* files)

---

## 🛠️ Project Structure Overview

```
screencraft-studio/
├── app/                    # Pages
│   ├── page.tsx           # Landing page
│   ├── dashboard/         # Dashboard
│   └── editor/            # Video editor
├── components/
│   ├── ui/                # Reusable components
│   └── editor/            # Editor components
├── lib/
│   ├── store.ts           # State management
│   └── utils.ts           # Utilities
└── public/                # Static files
```

---

## 🎯 Development Workflow

### Making Changes

1. **Edit a component**
   - Changes hot-reload automatically
   - See updates in browser instantly

2. **Add a new feature**
   - Create component in appropriate folder
   - Import and use in page
   - Test in browser

3. **Update styles**
   - Use Tailwind utility classes
   - Changes reflect immediately

### Common Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm start               # Start production server

# Code Quality
npm run lint            # Run linter
```

---

## 🎨 Customization Examples

### Change Primary Color

**File:** `app/globals.css`

```css
/* Find and update */
input[type="range"]::-webkit-slider-thumb {
  background: #6366f1; /* Change this color */
}
```

### Add a New Device

**File:** `components/editor/DeviceMockup.tsx`

```tsx
if (deviceType === 'ipad') {
  return (
    <group ref={groupRef}>
      <RoundedBox args={[2.5, 3.5, 0.15]} radius={0.08}>
        <meshStandardMaterial color="#1f2937" />
      </RoundedBox>
      {/* Add screen, content, etc. */}
    </group>
  )
}
```

### Modify Landing Page Content

**File:** `app/page.tsx`

Change the hero text, features, or colors.

---

## 📊 Current State vs. Planned

### ✅ Working Now
- Landing page with marketing content
- Dashboard with project grid
- Editor UI layout
- 3D device rendering
- Timeline interface
- Properties panel UI
- File upload UI

### 🔄 Coming Soon
- Actual video playback
- Real-time editing
- AI features
- Export functionality
- User authentication
- Cloud storage
- Screen recording

### 📋 MVP Roadmap

**Phase 1 (Current):** UI Foundation
- ✅ All pages and layouts
- ✅ 3D rendering working
- ✅ Component architecture
- 🔄 Connect UI to functionality

**Phase 2 (Next):** Core Features
- Video upload and processing
- Timeline editing
- Transform controls
- Export to video

**Phase 3 (Future):** AI & Advanced
- AI transcription
- Auto captions
- Animation presets
- Template system

---

## 🐛 Known Limitations

### Current Constraints
- No video playback yet
- Controls are UI-only (not functional)
- No backend or database
- No user authentication
- Export is not implemented
- Screen recording not available

### Expected Behavior
- Device mockup shows and animates
- Upload dialog appears and accepts files
- Timeline displays but doesn't play
- Properties show but don't affect preview

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
PORT=3001 npm run dev
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
rm -rf .next
npm run build
```

### 3D Rendering Issues
- Try different browser (Chrome recommended)
- Check WebGL: visit webglreport.com
- Update graphics drivers

---

## 📚 Learn More

### Documentation Files
- **[README.md](./README.md)** - Project overview
- **[PRD.md](./PRD.md)** - Product requirements
- **[FEATURES.md](./FEATURES.md)** - Feature list and status
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical architecture
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development guide

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Three.js Docs](https://threejs.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

---

## 🎯 Next Steps

### For Developers
1. ✅ Run the app locally
2. ✅ Explore the UI
3. 📝 Read [DEVELOPMENT.md](./DEVELOPMENT.md)
4. 🔨 Start building features
5. 📊 Check [FEATURES.md](./FEATURES.md) for what to build

### For Designers
1. ✅ Review the UI design
2. 🎨 Suggest improvements
3. 📝 Create mockups for new features
4. 🖼️ Design additional device frames

### For Product Managers
1. ✅ Review [PRD.md](./PRD.md)
2. 📊 Track progress in [FEATURES.md](./FEATURES.md)
3. 🎯 Prioritize next features
4. 📈 Define success metrics

---

## 💡 Quick Tips

### Keyboard Shortcuts (Future)
- `Space` - Play/pause
- `J/L` - Skip backward/forward
- `I/O` - Set in/out points
- `Cmd+Z` - Undo
- `Cmd+S` - Save

### Best Practices
- Start development server with `npm run dev`
- Always build before deploying: `npm run build`
- Check for TypeScript errors before committing
- Follow the component patterns in existing code

### Getting Help
- Check existing documentation first
- Create GitHub issues for bugs
- Ask questions in team chat
- Review code comments

---

## 🌟 What Makes ScreenCraft Special

1. **3D Mockups**: Beautiful device frames with realistic rendering
2. **Browser-Based**: No downloads, works everywhere
3. **AI-Powered**: Coming soon - intelligent editing
4. **Fast**: From upload to export in minutes
5. **Affordable**: Lower price than competitors

---

**Ready to build? Start with `npm run dev` and explore!** 🚀

For detailed development guidelines, see [DEVELOPMENT.md](./DEVELOPMENT.md)

For technical architecture, see [ARCHITECTURE.md](./ARCHITECTURE.md)

For feature roadmap, see [FEATURES.md](./FEATURES.md)
