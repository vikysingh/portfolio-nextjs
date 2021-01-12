import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

import dynamic from "next/dynamic"

const Contenitore = dynamic(() => import("../Componenti/Libreria/Componenti/Contenitore/"))
const Caricamento = dynamic(() => import("../Componenti/Libreria/Componenti/Caricamento/"))
const Navbar = dynamic(() => import("../Componenti/Navbar/"))

const Sinistra = dynamic(() => import("../Componenti/About/").then(comp => comp.Sinistra))
const Footer = dynamic(() => import("../Componenti/About/").then(comp => comp.Footer))

const about = ( ) => {

    const { about } = useContext(StudioContext)

    return (
       about && about.nome? <Contenitore primo={<Navbar />} titolo={about.nome}
       paragrafo={about.bio}
       sinistra={<Sinistra imgSrc={about.foto} imgAlt="Foto profilo" />}
       footer={<Footer link={about.cvlink} />} />
        : <Caricamento />
    
    );
}


export default about;