import Navbar from "../Componenti/Navbar"
import Wrapper from "../Componenti/Home"

import { Caricamento } from "../Componenti/Libreria"

import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

import {motion} from "framer-motion"

export default function Home() {

  const { progetti } = useContext(StudioContext)

  return (
        progetti && progetti[0] ?
        <motion.div exit={{opacity: 0}}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
          <Navbar />
          <Wrapper elementi={progetti} />
        </motion.div> : <Caricamento />
  )
}