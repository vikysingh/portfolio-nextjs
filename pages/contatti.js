import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

import dynamic from "next/dynamic"

const Contenitore = dynamic(() => import("../Componenti/Libreria/Componenti/Contenitore/"))
const Caricamento = dynamic(() => import("../Componenti/Libreria/Componenti/Caricamento/"))
const Footer = dynamic(() => import("../Componenti/Contatti/").then(comp => comp.Footer))
const Sinistra = dynamic(() => import("../Componenti/Contatti/").then(comp => comp.Sinistra))
const Navbar = dynamic(() => import("../Componenti/Navbar/"))

const contatti = () => {

    const { contatti } = useContext(StudioContext)

    return (
        contatti && contatti.titolo ? 
            <Contenitore primo={<Navbar />} titolo={contatti.titolo}
            paragrafo={contatti.descrizione}
            footer={<Footer email={contatti.email} tel={contatti.tel} />}
            sinistra={<Sinistra />} /> 
        : <Caricamento />
    );
}

export default contatti;