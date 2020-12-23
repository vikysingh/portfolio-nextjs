import Navbar from "../Componenti/Navbar"
import Wrapper from "../Componenti/Home"

//Arrary per un controllo
const data = [
  { titolo: "Cosmetic Commerce", sfondo: "#17FFC4" },
  { titolo: "Stockingly", sfondo: "#CC17FF" },
  { titolo: "InFin", sfondo: "#FF1791" },
  { titolo: "Taskia Tool", sfondo: "#17FFEE" },
  { titolo: "Aget", sfondo: "#1C1D25" },
  { titolo: "Moviezzed", sfondo: "#17FFC4" },
]

export default function Home() {

  return (
    <>
      <Navbar />
      <Wrapper elementi={data} />
    </>
  )
}