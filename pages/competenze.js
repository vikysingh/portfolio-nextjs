import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

import dynamic from "next/dynamic"

const Contenitore = dynamic(() => import("../Componenti/Libreria/Componenti/Contenitore/"))
const Caricamento = dynamic(() => import("../Componenti/Libreria/Componenti/Caricamento/"))
const Navbar = dynamic(() => import("../Componenti/Navbar/"))

const Sinistra = dynamic(() => import("../Componenti/Competenze/"))
const Card = dynamic(() => import("../Componenti/Competenze/").then(comp => comp.Card))

const competenze = () => {

    const { competenze } = useContext(StudioContext)

    return (
        competenze && competenze[0] ? <Contenitore
        primo={<Navbar />}
        titolo="Il mio arsenale"
        paragrafo="Paragrafo di descrizione"
        sinistra={
            <Sinistra>
                {competenze.map(elemento => <Card key={elemento._id} bold
                colore="chiaro" > {elemento.nome} </Card> )}
            </Sinistra>
        } /> 
        :
        <Caricamento />
    );
}

export default competenze;