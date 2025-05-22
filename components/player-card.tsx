import { useEffect, useState } from "react"

export default function PlayerCard({ img }: { img: string }) {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight * 0.45)
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div style={{ height }} className="relative aspect-[3/4.5] mx-4">
      <img
        src={img}
        alt="Player"
        className="object-cover rounded-xl shadow-lg w-full h-full"
      />
    </div>
  )
}
