
type Props = {
  name: string
}

export default function NavItem({ name }: Props) {

  return (
    <li className="font-semibold md:capitalize  uppercase text-2xl md:text-base md:bg-transparent hover:bg-gradient-to-r transition-colors ease duration-300  hover:text-transparent from-35% from-purple-500  to-blue-600 bg-clip-text">
      <button
        name="nav-item"
        title={`Go to ${name} section`}
        onClick={() => {
          const element = document.getElementById(name.toLowerCase())
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }}
      >
        {name}
      </button>
    </li>
  )
}
