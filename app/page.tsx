import Image from "next/image"
import MarqueeRow from "@/components/marquee-row"
import Sidebar from "@/components/sidebar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/assets/JUAR4.svg')] z-0"></div>

      <div className="flex flex-col gap-4 py-4 h-screen z-10 relative">
        {/* Top marquee row */}
        <div className="flex items-center">
          <MarqueeRow direction="left" />
        </div>

        {/* Bottom marquee row */}
        <div className="flex items-center">
          <MarqueeRow direction="right" />
        </div>

        {/* Champion sidebar */}
        <Sidebar />
      </div>
    </main>
  )
}
