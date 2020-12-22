import { Contenitore, Caricamento } from "../Componenti/Libreria"
import { Footer, Sinistra } from "../Componenti/Contatti"

import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

const contatti = () => {

    const { contatti } = useContext(StudioContext)

    return (
        contatti ? <Contenitore primo="navbar" titolo={contatti.titoloprimario}
        paragrafo={contatti.descrizione}
        footer={<Footer email={contatti.email} tel={contatti.telefono} />}
        sinistra={Sinistra}
         /> : <Caricamento />
    );
}

export default contatti;