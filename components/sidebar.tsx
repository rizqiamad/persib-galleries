import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-blue-800 flex flex-col items-center justify-between py-4">
      <Image
        src="/assets/loog 4 bintrang  1.svg"
        alt="bintang"
        width={50}
        height={50}
        className="object-contain"
      />
      <Image
        src="/assets/CHAMPION.svg"
        alt="champion"
        width={50}
        height={50}
        className="object-contain"
      />
      <Image
        src="/assets/qr dummy 1.svg"
        alt="qr"
        width={50}
        height={50}
        className="object-contain"
      />
      <Image
        src="/assets/Group 1.svg"
        alt="Logo"
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
  )
}