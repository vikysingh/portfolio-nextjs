import { Contenitore, Caricamento } from "../Componenti/Libreria"
import { Footer, Sinistra } from "../Componenti/Contatti"
import Navbar from "../Componenti/Navbar"

import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

const contatti = () => {

    const { contatti } = useContext(StudioContext)

    return (
        contatti && contatti[0] ? 
            <>
            <Contenitore primo={<Navbar />} titolo={contatti[0].titoloprimario}
            paragrafo={contatti[0].descrizione}
            footer={<Footer email={contatti[0].email} tel={contatti[0].telefono} />}
            sinistra={<Sinistra />} /> 
        </>
        : <Caricamento />
    );
}

export default contatti;