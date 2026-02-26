import WorkspaceCanvas from '@/components/WorkspaceCanvas'
import SelectorPanel from '@/components/SelectorPanel'
import SummaryPanel from '@/components/SummaryPanel'
import BottomControls from '@/components/BottomControls'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ddf5fb] p-8">
      <h1 className="text-3xl font-bold text-bold-color mb-8 text-center">
        Build Your Bali Workspace 🌴
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Content panels */}
        <SelectorPanel />
        <WorkspaceCanvas />
        <SummaryPanel />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {/* Theme control */}
        <BottomControls />
      </div>
    </main>
  )
}