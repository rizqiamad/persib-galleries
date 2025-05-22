'use client'

import Image from "next/image";

export default function Sidebar() {

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <aside
      className="absolute right-0 top-0 bottom-0 w-32 bg-blue-800 flex flex-col items-center justify-between py-4 drop-shadow-2xl"
      style={{
        backgroundImage: "conic-gradient(from 180deg, #043AAB, #192330)"
      }}
    >
      {/* Fullscreen Button */}
      <button onClick={handleFullscreen} className="absolute top-0 right-0 w-6 h-6"></button>

      <div className="relative w-20 h-20">
        <Image
          src="/assets/loog 4 bintrang  1.svg"
          alt="bintang"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-[23rem] h-[23rem]">
        <Image
          src="/assets/CHAMPION.svg"
          alt="champion"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-16 h-16">
        <Image
          src="/assets/qr dummy 1.svg"
          alt="qr"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative">
        <Image
          src="/assets/Group 1.svg"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
    </aside>
  )
}