'use client'

import { create } from 'zustand'

type Theme = 'dark' | 'warm' | 'light'
type BackgroundType = 'office' | 'gaming' | 'white' | 'plain'
type Lighting = 'all' | 'window' | 'off'

type Position = { x: number; y: number }

type WorkspaceState = {
  desk: 'wood' | 'standing'
  chair: 'ergonomic' | 'minimal'
  monitors: number
  lamp: boolean
  plant: boolean
  duration: 'weekly' | 'monthly'

  theme: Theme
  background: BackgroundType
  lighting: Lighting

  colors: {
    desk: string
    chair: string
    lamp: string
    plant: string
  }

  positions: {
    chair: Position
    lamp: Position
    plant: Position
  }

  setDesk: (desk: 'wood' | 'standing') => void
  setChair: (chair: 'ergonomic' | 'minimal') => void
  addMonitor: () => void
  removeMonitor: () => void
  toggleLamp: () => void
  togglePlant: () => void
  setDuration: (d: 'weekly' | 'monthly') => void
  setPosition: (key: keyof WorkspaceState['positions'], pos: Position) => void

  setTheme: (t: Theme) => void
  setBackground: (b: BackgroundType) => void
  setLighting: (l: Lighting) => void
  setColor: (key: keyof WorkspaceState['colors'], color: string) => void
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  desk: 'wood',
  chair: 'ergonomic',
  monitors: 1,
  lamp: true,
  plant: true,
  duration: 'monthly',

  theme: 'light',
  background: 'office',
  lighting: 'all',

  colors: {
    desk: '#8b5e3c',
    chair: '#1f2937',
    lamp: '#facc15',
    plant: '#16a34a',
  },

  positions: {
    chair: { x: 0, y: 0 },
    lamp: { x: 100, y: -50 },
    plant: { x: 150, y: 0 },
  },

  setDesk: (desk) => set({ desk }),
  setChair: (chair) => set({ chair }),
  addMonitor: () =>
    set((state) => ({
      monitors: state.monitors < 3 ? state.monitors + 1 : 3,
    })),
  removeMonitor: () =>
    set((state) => ({
      monitors: state.monitors > 0 ? state.monitors - 1 : 0,
    })),
  toggleLamp: () => set((state) => ({ lamp: !state.lamp })),
  togglePlant: () => set((state) => ({ plant: !state.plant })),
  setDuration: (duration) => set({ duration }),

  setPosition: (key, pos) =>
    set((state) => ({
      positions: { ...state.positions, [key]: pos },
    })),

  setTheme: (theme) => set({ theme }),
  setBackground: (background) => set({ background }),
  setLighting: (lighting) => set({ lighting }),
  setColor: (key, color) =>
    set((state) => ({
      colors: { ...state.colors, [key]: color },
    })),
}))