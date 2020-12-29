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