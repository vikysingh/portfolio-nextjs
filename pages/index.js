import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

import {motion} from "framer-motion"

import dynamic from "next/dynamic"

const Navbar = dynamic(() => import("../Componenti/Navbar/"))
const Wrapper = dynamic(() => import("../Componenti/Home/"))
const Caricamento = dynamic(() => import("../Componenti/Libreria/Componenti/Caricamento/"))

export default function Home() {

  const {progetti} = useContext(StudioContext)

  return (
        progetti && progetti[0] ?
        <motion.div exit={{opacity: 0}}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
          <Navbar />
          <Wrapper elementi={progetti} />
        </motion.div> : <Caricamento />
  )
}