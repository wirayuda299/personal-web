import { handleClickScroll } from "@/helper/scrollIntoview"
import Link from "next/link"

type Props = {
  path: string
  name: string
}

export default function NavItem({name, path}:Props) {
  return (
    <li  className="font-semibold md:capitalize  uppercase text-2xl md:text-base md:bg-transparent hover:bg-gradient-to-r transition-colors ease duration-300  hover:text-transparent from-35% from-purple-500  to-blue-600 bg-clip-text">
    <button  onClick={() => handleClickScroll(name)}>
      {name}
    </button>
  </li>
  )
}
