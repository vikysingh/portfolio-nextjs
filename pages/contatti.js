import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

import dynamic from "next/dynamic"

const Contenitore = dynamic(() => import("../Componenti/Libreria/Componenti/Contenitore/"))
const Caricamento = dynamic(() => import("../Componenti/Libreria/Componenti/Caricamento/"))
const Sinistra = dynamic(() => import("../Componenti/Contatti/"))
const Navbar = dynamic(() => import("../Componenti/Libreria").then(comp => comp.Navbar))

const contatti = () => {

    const { contatti } = useContext(StudioContext)

    return (
        contatti && contatti.titolo ? 
            <Contenitore primo={<Navbar />} titolo={contatti.titolo}
            paragrafo={contatti.descrizione}
            sinistra={<Sinistra  email={contatti.email} tel={contatti.tel} /> } />
        : <Caricamento />
    );
}

export default contatti;