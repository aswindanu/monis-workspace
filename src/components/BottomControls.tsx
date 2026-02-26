'use client'

import { useWorkspaceStore } from '@/store/useWorkspaceStore'

export default function BottomControls() {
  const { setTheme, setBackground, setLighting } =
    useWorkspaceStore()

  return (
    <div className="mt-6 p-4 bg-white rounded-xl shadow flex flex-wrap gap-6 justify-between">

      <div>
        <h4 className="font-semibold text-semibold-color">Suggestion</h4>
        <div className="flex gap-2 mt-2">
          <button onClick={() => setTheme('light')} className="btn">Light</button>
          <button onClick={() => setTheme('warm')} className="btn">Warm</button>
          <button onClick={() => setTheme('dark')} className="btn">Dark</button>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-semibold-color">Workspace</h4>
        <div className="flex gap-2 mt-2">
          <button onClick={() => setBackground('office')} className="btn">Office</button>
          <button onClick={() => setBackground('gaming')} className="btn">Gaming</button>
          <button onClick={() => setBackground('white')} className="btn">White</button>
          <button onClick={() => setBackground('plain')} className="btn">Plain</button>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-semibold-color">Lightning</h4>
        <div className="flex gap-2 mt-2">
          <button onClick={() => setLighting('all')} className="btn">All On</button>
          <button onClick={() => setLighting('window')} className="btn">Window</button>
          <button onClick={() => setLighting('off')} className="btn">All Off</button>
        </div>
      </div>
    </div>
  )
}