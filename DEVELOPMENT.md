# Development Guide

## Getting Started

### Prerequisites
- Node.js 18.17.0 or higher
- npm 9.0.0 or higher
- Git

### Initial Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd screencraft-studio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

### Development
```bash
npm run dev          # Start development server with hot reload
```

### Production
```bash
npm run build        # Create production build
npm start            # Start production server
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler (future)
```

## Project Structure

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed architecture documentation.

## Development Workflow

### 1. Feature Development

**Create a new branch:**
```bash
git checkout -b feature/your-feature-name
```

**Work on your feature:**
- Write code
- Test locally
- Commit changes

**Commit conventions:**
```bash
git commit -m "feat: add new animation preset"
git commit -m "fix: resolve timeline scrubbing issue"
git commit -m "docs: update README with new features"
git commit -m "style: format code with prettier"
git commit -m "refactor: simplify state management"
git commit -m "test: add tests for upload component"
```

**Push and create PR:**
```bash
git push origin feature/your-feature-name
# Create pull request on GitHub
```

### 2. Code Style Guidelines

**TypeScript:**
- Use TypeScript for all new code
- Avoid `any` types - use proper types or `unknown`
- Export interfaces and types
- Use meaningful variable names

**React:**
- Functional components only
- Use hooks (useState, useEffect, etc.)
- Extract complex logic to custom hooks
- Keep components small and focused

**Styling:**
- Use Tailwind utility classes
- Follow mobile-first approach
- Use design tokens for colors
- Keep custom CSS minimal

**File Organization:**
- One component per file
- Group related components in folders
- Export from index files
- Use absolute imports with `@/`

### 3. Component Development

**Example component structure:**
```tsx
"use client" // Only if using client-side features

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SomeIcon } from "lucide-react"

interface MyComponentProps {
  title: string
  onAction?: () => void
}

export default function MyComponent({ title, onAction }: MyComponentProps) {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(true)
    onAction?.()
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <Button onClick={handleClick}>
        <SomeIcon className="h-4 w-4 mr-2" />
        Click Me
      </Button>
    </div>
  )
}
```

### 4. State Management

**Using Zustand:**
```typescript
// Add state
interface EditorState {
  // existing state...
  myNewState: string

  // Add action
  setMyNewState: (value: string) => void
}

export const useEditorStore = create<EditorState>((set) => ({
  // existing state...
  myNewState: '',
  
  setMyNewState: (value) => set({ myNewState: value }),
}))
```

**Using the store:**
```tsx
import { useEditorStore } from "@/lib/store"

function MyComponent() {
  const myNewState = useEditorStore((state) => state.myNewState)
  const setMyNewState = useEditorStore((state) => state.setMyNewState)

  return <div>{myNewState}</div>
}
```

### 5. Adding 3D Models

**Create new device model:**
```tsx
// In components/editor/DeviceMockup.tsx
if (deviceType === 'ipad') {
  return (
    <group ref={groupRef}>
      <RoundedBox args={[2.5, 3.5, 0.15]} radius={0.08}>
        <meshStandardMaterial color="#1f2937" />
      </RoundedBox>
      {/* Add screen, bezel, etc. */}
    </group>
  )
}
```

### 6. Styling Guidelines

**Tailwind Classes:**
```tsx
// ✅ Good - Utility classes
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">

// ❌ Avoid - Inline styles
<div style={{ display: 'flex', padding: '24px' }}>

// ✅ Good - Responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// ✅ Good - Dark mode support
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

**Custom utilities:**
```tsx
// lib/utils.ts
export function formatTime(ms: number): string {
  // implementation
}

// Usage
import { formatTime } from "@/lib/utils"
const time = formatTime(45000) // "0:45"
```

### 7. Adding Routes

**Create new page:**
```bash
mkdir -p app/new-route
touch app/new-route/page.tsx
```

**Page template:**
```tsx
export default function NewRoutePage() {
  return (
    <div>
      <h1>New Route</h1>
    </div>
  )
}
```

**With metadata:**
```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Title - ScreenCraft Studio",
  description: "Page description",
}

export default function NewRoutePage() {
  return <div>Content</div>
}
```

### 8. Performance Optimization

**Code splitting:**
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable SSR for client-only components
})
```

**Memoization:**
```tsx
import { useMemo, useCallback } from 'react'

function MyComponent({ data }) {
  // Memoize expensive calculations
  const processedData = useMemo(() => {
    return expensiveOperation(data)
  }, [data])

  // Memoize callbacks
  const handleClick = useCallback(() => {
    doSomething()
  }, [])

  return <div>{processedData}</div>
}
```

### 9. Debugging

**Browser DevTools:**
- Use React DevTools extension
- Check Console for errors
- Use Network tab for API calls
- Profile performance with Performance tab

**Three.js Debugging:**
```tsx
// Enable stats
import { Stats } from '@react-three/drei'

<Canvas>
  <Stats />
  {/* Your scene */}
</Canvas>
```

**Log store state:**
```tsx
import { useEditorStore } from "@/lib/store"

function DebugComponent() {
  const state = useEditorStore()
  console.log('Store state:', state)
  return null
}
```

### 10. Testing Locally

**Build and test production:**
```bash
npm run build
npm start
# Test on http://localhost:3000
```

**Check for errors:**
```bash
npm run lint
# Fix any ESLint warnings
```

## Common Tasks

### Add a new UI component

1. Create file in `components/ui/`
2. Use CVA for variants
3. Export component
4. Document props with TypeScript

### Add a new editor feature

1. Update store if needed (`lib/store.ts`)
2. Create component in `components/editor/`
3. Import and use in editor page
4. Test functionality

### Add a new device mockup

1. Add device type to `MockupConfig` interface
2. Create geometry in `DeviceMockup.tsx`
3. Add selection in `PropertiesPanel.tsx`
4. Test 3D rendering

### Update styling

1. Modify Tailwind classes
2. Use design tokens
3. Test responsive breakpoints
4. Check dark mode if applicable

## Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
PORT=3001 npm run dev
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
# Check for errors
npx tsc --noEmit
# Fix reported errors
```

### 3D rendering issues
- Clear browser cache
- Check WebGL support: visit [webglreport.com](https://webglreport.com)
- Update graphics drivers
- Try different browser

### Build fails
```bash
# Clear Next.js cache
rm -rf .next
# Rebuild
npm run build
```

## Environment Variables

Create `.env.local` for local development:

```env
# Development only - never commit this file
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## IDE Setup

### VS Code (Recommended)

**Extensions:**
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)

**Settings (.vscode/settings.json):**
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Three.js Docs](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

## Getting Help

- Check [ARCHITECTURE.md](./ARCHITECTURE.md) for system design
- Check [FEATURES.md](./FEATURES.md) for feature status
- Check [PRD.md](./PRD.md) for product requirements
- Create an issue for bugs or questions

---

Happy coding! 🚀
