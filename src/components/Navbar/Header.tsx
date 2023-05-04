import type { Dispatch, SetStateAction } from "react";
import { RiMenu3Fill } from "react-icons/ri";
type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
export default function Header({setIsOpen}:Props) {
  return (
    <header className="w-full h-full relative flex justify-between">
        <h1 className="text-left font-bold text-2xl ">
          Portfolio
        </h1>
        <button className=" text-white absolute md:hidden top-0 right-0" onClick={() => setIsOpen(true)}>
          <RiMenu3Fill size={30} color="#fff" className="text-white" fill="#fff" />
        </button>
      </header>
  )
}
