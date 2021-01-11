import StudioContext from "../Componenti/Context/StudioContext"
import { useContext, useEffect } from "react"

import dynamic from "next/dynamic"

const Contenitore = dynamic(() => import("../Componenti/Libreria/Componenti/Contenitore/"))
const Caricamento = dynamic(() => import("../Componenti/Libreria/Componenti/Caricamento/"))
const Navbar = dynamic(() => import("../Componenti/Navbar/"))

const Wrapper = dynamic(() => import("../Componenti/Competenze/"))
const Card = dynamic(() => import("../Componenti/Competenze/").then(comp => comp.Card))

const competenze = () => {

    const { competenze } = useContext(StudioContext)
    
    // useEffect(() => {
    //     console.clear()
    //     console.log(competenze)
    // }, [competenze])

    return (
        competenze && competenze[0] ? <Contenitore
        primo={<Navbar />}
        titolo="Il mio arsenale"
        paragrafo="Paragrafo di descrizione"
        sinistra={
            <Wrapper direzione="row" content="center" items="flex-start" wrap="wrap" >
                {competenze.map(elemento => <Card key={elemento._id} bold
                colore="chiaro" > {elemento.nome} </Card> )}
            </Wrapper>
        } /> 
        :
        <Caricamento />
    );
}

export default competenze;