'use client'

import { create } from 'zustand'

type Theme = 'dark' | 'warm' | 'light'
type BackgroundType = 'office' | 'gaming' | 'white' | 'plain'
type Lighting = 'all' | 'window' | 'off'

type Position = { x: number; y: number }

type WorkspaceState = {
  desk: 'wood' | 'standing'
  chair: 'gaming' | 'minimal'
  monitors: number
  lamp: boolean
  plant: boolean
  duration: 'weekly' | 'monthly'

  theme: Theme
  background: BackgroundType
  lighting: Lighting

  coffeeStation: boolean,
  outdoorGear: boolean,
  relaxZone: boolean,
  garageSpace: boolean,

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
  setChair: (chair: 'gaming' | 'minimal') => void
  addMonitor: () => void
  removeMonitor: () => void
  toggleLamp: () => void
  togglePlant: () => void

  toggleCoffeeStation: () => void
  toggleOutdoorGear: () => void
  toggleRelaxZone: () => void
  toggleGarageSpace: () => void

  setDuration: (d: 'weekly' | 'monthly') => void
  setPosition: (key: keyof WorkspaceState['positions'], pos: Position) => void

  setTheme: (t: Theme) => void
  setBackground: (b: BackgroundType) => void
  setLighting: (l: Lighting) => void
  setColor: (key: keyof WorkspaceState['colors'], color: string) => void
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  desk: 'wood',
  chair: 'gaming',
  monitors: 1,
  lamp: true,
  plant: true,
  duration: 'monthly',

  theme: 'light',
  background: 'office',
  lighting: 'all',

  coffeeStation: false,
  outdoorGear: false,
  relaxZone: false,
  garageSpace: false,

  colors: {
    desk: '#8b5e3c',
    chair: '#1f2937',
    lamp: '#facc15',
    plant: '#16a34a',
  },

  positions: {
    chair: { x: -192, y: 92 },
    lamp: { x: 33, y: 9 },
    plant: { x: 86, y: 80 },
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

  toggleCoffeeStation: () =>
    set((state) => ({ coffeeStation: !state.coffeeStation })),

  toggleOutdoorGear: () =>
    set((state) => ({ outdoorGear: !state.outdoorGear })),

  toggleRelaxZone: () =>
    set((state) => ({ relaxZone: !state.relaxZone })),

  toggleGarageSpace: () =>
    set((state) => ({ garageSpace: !state.garageSpace })),

  setDuration: (duration) => set({ duration }),

  setPosition: (key, pos) =>
    set((state) => ({
      positions: { ...state.positions, [key]: pos },
    })),

  setTheme: (theme) => {
    const newVal: any = { theme };
    if ( theme === 'light') {
      newVal.plant = true;
      newVal.lamp = true;
      newVal.lighting = 'window';
      newVal.background = 'white';
    }
    else if ( theme === 'warm') {
      newVal.plant = true;
      newVal.lamp = true;
      newVal.lighting = 'all';
      newVal.background = 'office';
    }
    else if ( theme === 'dark') {
      newVal.plant = true;
      newVal.lamp = false;
      newVal.lighting = 'all';
      newVal.background = 'gaming';
    }
    set(newVal);
  },
  setBackground: (background) => set({ background }),
  setLighting: (lighting) => set({ lighting }),
  setColor: (key, color) =>
    set((state) => ({
      colors: { ...state.colors, [key]: color },
    })),
}))