
type Props ={
  text:string
  children?:React.ReactNode
  classNames?:string
}
export default function Title({ text, classNames}:Props) {
  return (
    <h1 className={`text-6xl md:text-7xl lg:text-9xl animate-text uppercase  font-extrabold  bg-gradient-to-r text-transparent from-teal-500 via-purple-500  to-[#030a6b] bg-clip-text ${classNames}`}>
      {text}
    </h1>
  )
}
