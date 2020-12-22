import { Contenitore, Caricamento } from "../Componenti/Libreria"
import Navbar from "../Componenti/Navbar"
import { Footer, Sinistra } from "../Componenti/Home"

import { useState } from "react"

import StudioContext from "../Componenti/Context/StudioContext"
import { useContext, useEffect } from "react"

export default function Home() {

  const [ counter, setCounter ] = useState(0)
  const { progetti } = useContext(StudioContext)

  useEffect(() => {
    console.log(progetti)
  }, [progetti])

  //Questa funzione + solo per la prova e da togliere presto
  function increment() {
    if(counter < 5) {
      setCounter(counter + 1)
    }
  }

  //Questa funzione è solo per la prova e da togliere presto
  function decrement() {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    progetti && progetti[0] ? <Contenitore primo={<Navbar />} home
    titolo={progetti[counter].titolo} paragrafo={progetti[counter].descrizione}
    footer={<Footer clickDestro={increment} clickSinistro={decrement} />}
    sinistra={<Sinistra src={progetti[counter].imgsrc} />}
    /> : <Caricamento />
  )
}