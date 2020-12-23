import Navbar from "../Componenti/Navbar"
import Wrapper from "../Componenti/Home"

import { Caricamento } from "../Componenti/Libreria"

import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

export default function Home() {

  const { progetti } = useContext(StudioContext)

  return (
    progetti && progetti[0] ? <>
    <Navbar />
    <Wrapper elementi={progetti} />
  </> : <Caricamento />
  )
}