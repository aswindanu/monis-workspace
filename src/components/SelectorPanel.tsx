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
    toggleCoffeeStation,
    toggleOutdoorGear,
    toggleRelaxZone,
    toggleGarageSpace,
    coffeeStation,
    outdoorGear,
    relaxZone,
    garageSpace,
  } = useWorkspaceStore()

  return (
    <div className="bg-[#f0f8ff] opacity-90 p-6 rounded-xl shadow space-y-6">

      {/* DESK */}
      <div>
        <h3 className="font-semibold text-semibold-color mb-2">Desk</h3>
        <div className="flex gap-2">
          <button onClick={() => setDesk('wood')} className="btn">Wood Desk</button>
          <button onClick={() => setDesk('standing')} className="btn">Standing Desk</button>
        </div>
      </div>

      {/* CHAIR */}
      <div>
        <h3 className="font-semibold text-semibold-color mb-2">Chair</h3>
        <div className="flex gap-2">
          <button onClick={() => setChair('gaming')} className="btn">Gaming</button>
          <button onClick={() => setChair('minimal')} className="btn">Minimal</button>
        </div>
      </div>

      {/* MONITOR */}
      <div>
        <h3 className="font-semibold text-semibold-color mb-2">Monitors</h3>
        <div className="flex gap-2">
          <button onClick={addMonitor} className="btn">+ Add</button>
          <button onClick={removeMonitor} className="btn">- Remove</button>
        </div>
      </div>

      {/* ACCESSORIES */}
      <div>
        <h3 className="font-semibold text-semibold-color mb-2">Accessories</h3>
        <div className="flex gap-2">
          <button onClick={toggleLamp} className="btn">Toggle Lamp</button>
          <button onClick={togglePlant} className="btn">Toggle Plant</button>
        </div>
      </div>

      {/* NEW SECTIONS */}
      <div>
        <h3 className="font-semibold text-semibold-color mb-2">Extra Zones</h3>
        <div className="flex flex-col gap-2">

          <button
            onClick={toggleCoffeeStation}
            className={`btn ${coffeeStation ? 'bg-green-600' : ''}`}
          >
            {coffeeStation ? '✓ Coffee Station Added' : '+ Add Coffee Station'}
          </button>

          <button
            onClick={toggleOutdoorGear}
            className={`btn ${outdoorGear ? 'bg-green-600' : ''}`}
          >
            {outdoorGear ? '✓ Outdoor Gear Added' : '+ Add Outdoor Gear'}
          </button>

          <button
            onClick={toggleRelaxZone}
            className={`btn ${relaxZone ? 'bg-green-600' : ''}`}
          >
            {relaxZone ? '✓ Relax Zone Added' : '+ Add Relax Zone'}
          </button>

          <button
            onClick={toggleGarageSpace}
            className={`btn ${garageSpace ? 'bg-green-600' : ''}`}
          >
            {garageSpace ? '✓ Garage Space Added' : '+ Add Garage Space'}
          </button>

        </div>
      </div>

    </div>
  )
}