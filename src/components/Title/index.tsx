import { motion } from "framer-motion"

type Props = {
  text: string
  children?: React.ReactNode
  classNames?: string
}
export default function Title({ text, classNames }: Props) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`text-6xl md:text-7xl lg:text-9xl animate-text uppercase  font-extrabold  bg-gradient-to-r text-transparent from-teal-500 via-purple-500  to-[#030a6b] bg-clip-text ${classNames}`}>
      {text}
    </motion.h1>
  )
}
