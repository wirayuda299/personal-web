import { navItems } from "@/data/NavItem";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Header from "./Header";
import NavItem from "./NavItem";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="w-full md:bg-opacity-80 md:backdrop-blur-md transition-all ease duration-500 relative flex md:justify-between md:items-center md:h-20 h-screen p-5 text-white">
      <Header setIsOpen={setIsOpen} />
      <ul
        className={`flex flex-col md:flex-row md:static top-0  transition-all ease duration-500 bg-opacity-80 backdrop-blur-md md:backdrop-blur-0 bg-black md:!bg-transparent md:bg-opacity-0 fixed h-full items-center justify-evenly w-full md:space-y-0  space-y-3 text-white ${isOpen ? ' left-0' : '-left-full'}`}>
        {navItems.map(item => (
          <NavItem name={item.name} key={item.id} />
        ))}
        <button className="absolute md:hidden top-3 right-5" onClick={() => setIsOpen(false)}>
          <AiOutlineClose size={30} />
        </button>
      </ul>
    </nav>
  )
}
