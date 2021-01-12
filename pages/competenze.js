import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

import dynamic from "next/dynamic"

const Contenitore = dynamic(() => import("../Componenti/Libreria/Componenti/Contenitore/"))
const Caricamento = dynamic(() => import("../Componenti/Libreria/Componenti/Caricamento/"))
const Navbar = dynamic(() => import("../Componenti/Navbar/"))

const Wrapper = dynamic(() => import("../Componenti/Competenze/"))
const Card = dynamic(() => import("../Componenti/Competenze/").then(comp => comp.Card))

const competenze = () => {

    const { competenze } = useContext(StudioContext)

    return (
        competenze && competenze.descrizione ? <Contenitore
        primo={<Navbar />}
        titolo="Il mio arsenale"
        paragrafo={competenze.descrizione}
        sinistra={
            <Wrapper direzione="row" content="center" items="flex-start" wrap="wrap" >
                {competenze.competenze.map(elemento => <Card key={elemento} bold
                colore="chiaro" > {elemento} </Card> )}
            </Wrapper>
        } /> 
        :
        <Caricamento />
    );
}

export default competenze;