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
       about && about[0]? <Contenitore primo={<Navbar />} titolo={about[0].titolo} paragrafo={about[0].descrizione}
       sinistra={<Sinistra imgSrc={about[0].imgsrc} imgAlt={about[0].imgalt} />}
       footer={<Footer link={about[0].cvlink} />} />
        : <Caricamento />
    
    );
}


export default about;