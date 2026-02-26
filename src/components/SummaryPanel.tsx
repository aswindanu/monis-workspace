'use client'

import { useWorkspaceStore } from '@/store/useWorkspaceStore'

export default function SummaryPanel() {
  const { desk, chair, monitors, lamp, plant, duration, coffeeStation, outdoorGear, relaxZone, garageSpace, setDuration } =
    useWorkspaceStore()

  const prices = {
    desk: desk === 'wood' ? 300000 : 500000,
    chair: chair === 'gaming' ? 250000 : 150000,
    monitor: 200000,
    lamp: 50000,
    plant: 40000,
    coffeeStation: 150,
    outdoorGear: 300,
    relaxZone: 200,
    garageSpace: 400,
  }

  const total =
    prices.desk +
    prices.chair +
    monitors * prices.monitor +
    (lamp ? prices.lamp : 0) +
    (plant ? prices.plant : 0) +
    (coffeeStation ? prices.coffeeStation : 0) +
    (outdoorGear ? prices.outdoorGear : 0) +
    (relaxZone ? prices.relaxZone : 0) +
    (garageSpace ? prices.garageSpace : 0)

  const finalTotal = duration === 'weekly' ? total / 4 : total

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-bold text-bold-color">Your Setup</h2>

      <div className="text-sm space-y-1">
        <p>Desk: {desk}</p>
        <p>Chair: {chair}</p>
        <p>Monitors: {monitors}</p>
        <p>Lamp: {lamp ? 'Yes' : 'No'}</p>
        <p>Plant: {plant ? 'Yes' : 'No'}</p>
        <p>coffee Station: {coffeeStation ? 'Yes' : 'No'}</p>
        <p>outdoor Gear: {outdoorGear ? 'Yes' : 'No'}</p>
        <p>relax Zone: {relaxZone ? 'Yes' : 'No'}</p>
        <p>garage Space: {garageSpace ? 'Yes' : 'No'}</p>
      </div>

      <div>
        <h3 className="font-semibold text-semibold-color mt-4">Duration</h3>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => setDuration('monthly')}
            className="btn"
          >
            Monthly
          </button>
          <button
            onClick={() => setDuration('weekly')}
            className="btn"
          >
            Weekly
          </button>
        </div>
      </div>

      <div className="text-lg font-bold text-bold-color mt-4">
        Total: Rp {finalTotal.toLocaleString()}
      </div>

      <button className="w-full bg-green-600 text-white py-3 rounded-lg mt-4 hover:bg-green-700 transition">
        🚀 Rent This Setup
      </button>
    </div>
  )
}