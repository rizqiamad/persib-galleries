"use client"

import Marquee from "react-fast-marquee"
import PlayerCard from "./player-card"
import { fetchUserData } from "../lib/supabase-client"
import useSWR from "swr"
import LoadingSpinner from "./loading-spinner"

interface MarqueeRowProps {
  direction?: "left" | "right"
  speed?: number
}

export default function MarqueeRow({
  direction = "left",
  speed = 30,
}: MarqueeRowProps) {
  const { data, error, isLoading } = useSWR("user-data", fetchUserData, { refreshInterval: 300000 })

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Marquee
      direction={direction}
      speed={speed}
      gradient={false}
      className="z-0 h-full flex"
    >
      {data && data.map((img, i) => {
        return (
          <PlayerCard key={i} img={img.imageurl} />
        )
      })}
    </Marquee>
  )
}
