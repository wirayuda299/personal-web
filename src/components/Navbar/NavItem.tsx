import { useStateContext } from "../context/StateContext"

type Props = {
  name: string
}

export default function NavItem({ name }: Props) {
const {selectedTab, setSelectedTab} = useStateContext()

  return (
    <li className="font-semibold md:capitalize  uppercase text-2xl md:text-base md:bg-transparent hover:bg-gradient-to-r transition-colors ease duration-300  hover:text-transparent from-35% from-purple-500  to-blue-600 bg-clip-text">
      <button
        name="nav-item"
        title={`Go to ${name} section`}
        onClick={() => {
          setSelectedTab(name)
        }}
      >
        {name}
      </button>
    </li>
  )
}
