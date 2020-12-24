import { Contenitore, Caricamento } from "../Componenti/Libreria"
import Navbar from "../Componenti/Navbar"

import Sinistra, { Card } from "../Componenti/Competenze"
import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"


const competenze = () => {

    const { competenze } = useContext(StudioContext)

    return (
        competenze && competenze[0] ? <Contenitore
        primo={<Navbar />}
        titolo="Competenze"
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