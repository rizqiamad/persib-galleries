"use client"

import { useRef, useEffect } from "react"
import PlayerCard from "./player-card"

interface MarqueeRowProps {
  direction: "left" | "right"
}

export default function MarqueeRow({ direction }: MarqueeRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollSpeed = direction === "left" ? -1 : 1
    let animationId: number
    let currentScroll = 0

    const scroll = () => {
      if (!scrollContainer) return

      currentScroll += scrollSpeed

      // Reset when we reach the end
      const firstItemWidth = scrollContainer.querySelector("div")?.offsetWidth || 0
      const itemsCount = scrollContainer.childElementCount
      const totalWidth = (firstItemWidth * itemsCount) / 2

      if (Math.abs(currentScroll) >= totalWidth) {
        currentScroll = 0
      }

      scrollContainer.style.transform = `translateX(${currentScroll}px)`
      animationId = requestAnimationFrame(scroll)
    }

    scroll()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [direction])

  // Generate 8 cards for each row
  const cards = Array.from({ length: 16 }).map((_, index) => <PlayerCard key={index} />)

  return (
    <div className="w-full overflow-hidden">
      <div ref={scrollRef} className="flex gap-4 transition-transform" style={{ willChange: "transform" }}>
        {cards}
      </div>
    </div>
  )
}
