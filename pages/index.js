import { Contenitore } from "../Componenti/Libreria"
import Navbar from "../Componenti/Navbar"
import { Footer, Sinistra } from "../Componenti/Home"

import { useState } from "react"

const dummyData = [
  {
    titolo: "Cosmetic Comerce",
    image: "https://vikramsingh.netlify.app/src/assets/cosmetic-commerce.webp"
  },
  {
    titolo: "Breaking The Bad",
    image: "https://vikramsingh.netlify.app/src/assets/breakingBad.webp"
  },
  {
    titolo: "Moviezzed",
    image: "https://vikramsingh.netlify.app/src/assets/moviezzed.webp"
  }
]

export default function Home() {

  const [ counter, setCounter ] = useState(0)

  function increment() {
    if(counter < 2) {
      setCounter(counter + 1)
    }
  }

  function decrement() {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <Contenitore primo={Navbar} home
    titolo={dummyData[counter].titolo} paragrafo="Un paragrafino"
    footer={<Footer clickDestro={increment} clickSinistro={decrement} />}
    sinistra={<Sinistra src={dummyData[counter].image} />}
    />
  )
}