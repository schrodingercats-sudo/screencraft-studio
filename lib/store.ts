import { create } from 'zustand'

export interface Project {
  id: string
  name: string
  thumbnail?: string
  createdAt: Date
  updatedAt: Date
  duration: number
}

export interface Asset {
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

export interface Clip {
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

export interface MockupConfig {
  deviceType: 'iphone' | 'macbook' | 'browser'
  perspective: { x: number; y: number; z: number }
  background: {
    type: 'solid' | 'gradient'
    color: string
    color2?: string
  }
  shadow: boolean
}

interface EditorState {
  currentProject: Project | null
  assets: Asset[]
  clips: Clip[]
  currentTime: number
  isPlaying: boolean
  selectedClipId: string | null

  setCurrentProject: (project: Project | null) => void
  addAsset: (asset: Asset) => void
  addClip: (clip: Clip) => void
  updateClip: (id: string, updates: Partial<Clip>) => void
  deleteClip: (id: string) => void
  setCurrentTime: (time: number) => void
  setIsPlaying: (playing: boolean) => void
  setSelectedClipId: (id: string | null) => void
}

export const useEditorStore = create<EditorState>((set) => ({
  currentProject: null,
  assets: [],
  clips: [],
  currentTime: 0,
  isPlaying: false,
  selectedClipId: null,

  setCurrentProject: (project) => set({ currentProject: project }),
  addAsset: (asset) => set((state) => ({ assets: [...state.assets, asset] })),
  addClip: (clip) => set((state) => ({ clips: [...state.clips, clip] })),
  updateClip: (id, updates) =>
    set((state) => ({
      clips: state.clips.map((clip) =>
        clip.id === id ? { ...clip, ...updates } : clip
      ),
    })),
  deleteClip: (id) =>
    set((state) => ({
      clips: state.clips.filter((clip) => clip.id !== id),
    })),
  setCurrentTime: (time) => set({ currentTime: time }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setSelectedClipId: (id) => set({ selectedClipId: id }),
}))
