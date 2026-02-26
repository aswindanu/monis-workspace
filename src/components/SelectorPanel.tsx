'use client'

import { useWorkspaceStore } from '@/store/useWorkspaceStore'

export default function SelectorPanel() {
  const {
    setDesk,
    setChair,
    addMonitor,
    removeMonitor,
    toggleLamp,
    togglePlant,
  } = useWorkspaceStore()

  return (
    <div className="space-y-6">

      <div>
        <h3 className="font-semibold text-semibold-color mb-2">Desk</h3>
        <div className="flex gap-2">
          <button onClick={() => setDesk('wood')} className="btn">Wood Desk</button>
          <button onClick={() => setDesk('standing')} className="btn">Standing Desk</button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-semibold-color mb-2">Chair</h3>
        <div className="flex gap-2">
          <button onClick={() => setChair('ergonomic')} className="btn">Ergonomic</button>
          <button onClick={() => setChair('minimal')} className="btn">Minimal</button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-semibold-color mb-2">Monitors</h3>
        <div className="flex gap-2">
          <button onClick={addMonitor} className="btn">+ Add</button>
          <button onClick={removeMonitor} className="btn">- Remove</button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-semibold-color mb-2">Accessories</h3>
        <div className="flex gap-2">
          <button onClick={toggleLamp} className="btn">Toggle Lamp</button>
          <button onClick={togglePlant} className="btn">Toggle Plant</button>
        </div>
      </div>

      <h3 className="font-semibold text-semibold-color mt-6">Colors</h3>
      <div className="space-y-2">
        {['desk', 'chair', 'lamp', 'plant'].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="capitalize w-16">{item}</span>
            <input
              type="color"
              onChange={(e) =>
                useWorkspaceStore.getState().setColor(
                  item as any,
                  e.target.value
                )
              }
            />
          </div>
        ))}
      </div>

    </div>
  )
}