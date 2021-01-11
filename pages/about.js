import StudioContext from "../Componenti/Context/StudioContext"
import { useContext, useEffect } from "react"

import dynamic from "next/dynamic"

const Contenitore = dynamic(() => import("../Componenti/Libreria/Componenti/Contenitore/"))
const Caricamento = dynamic(() => import("../Componenti/Libreria/Componenti/Caricamento/"))
const Navbar = dynamic(() => import("../Componenti/Navbar/"))

const Sinistra = dynamic(() => import("../Componenti/About/").then(comp => comp.Sinistra))
const Footer = dynamic(() => import("../Componenti/About/").then(comp => comp.Footer))

const about = ( ) => {

    const { about } = useContext(StudioContext)
    
    useEffect(() => {
        console.clear()
        console.log(about)
    }, [about])

    return (
       about && about[0]? <Contenitore primo={<Navbar />} titolo={about[0].nome}
       paragrafo={about[0].bio[0].children[0].text}
       sinistra={<Sinistra imgSrc={about[0].foto.asset._ref} imgAlt="Foto profilo" />}
       footer={<Footer link={about[0].cvlink} />} />
        : <Caricamento />
    
    );
}


export default about;