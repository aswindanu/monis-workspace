import WorkspaceCanvas from "@/components/WorkspaceCanvas";
import SelectorPanel from "@/components/SelectorPanel";
import SummaryPanel from "@/components/SummaryPanel";
import BottomControls from "@/components/BottomControls";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ddf5fb] p-8">
      <div className="w-[800px] place-self-center">
        <h1
          className="flex text-2xl h-[65px] font-bold text-bold-color mb-8 text-center"
          style={{
            backgroundColor: "aliceblue",
            border: "1px solid aliceblue",
            borderRadius: "5px",
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Design your Bali Workspace 🌴
        </h1>
      </div>

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
  );
}
