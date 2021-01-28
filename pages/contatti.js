import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

import dynamic from "next/dynamic"

const Contenitore = dynamic(() => import("../Componenti/Libreria/Componenti/Contenitore/"))
const Caricamento = dynamic(() => import("../Componenti/Libreria/Componenti/Caricamento/"))
const Sinistra = dynamic(() => import("../Componenti/Contatti/").then(comp => comp.Sinistra))
const Footer = dynamic(() => import("../Componenti/Contatti/").then(comp => comp.Footer))
const Navbar = dynamic(() => import("../Componenti/Libreria").then(comp => comp.Navbar))

const contatti = () => {

    const { contatti } = useContext(StudioContext)

    return (
        contatti && contatti.titolo ? 
            <Contenitore primo={<Navbar />} titolo={contatti.titolo}
            paragrafo={contatti.descrizione}
            footer={<Footer linkedinLink={contatti.linkedin_link}
            youtubeLink={contatti.youtube_link} mediumLink={contatti.medium_link}
            githubLink={contatti.github_link} />}
            sinistra={<Sinistra  email={contatti.email} tel={contatti.tel} /> } />
        : <Caricamento />
    );
}

export default contatti;