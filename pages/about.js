import { Contenitore, Caricamento } from "../Componenti/Libreria"
import Navbar from "../Componenti/Navbar"
import { Sinistra, Footer } from "../Componenti/About"

import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

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