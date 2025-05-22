import Image from "next/image"

export default function PlayerCard() {
  return (
    <div className="relative flex-shrink-0">
      <Image
        src="/assets/Vector.png"
        alt="Player"
        width={200}
        height={700}
        className="object-cover"
      />
    </div>
  )
}
