import { Contenitore, Caricamento } from "../Componenti/Libreria"
import Navbar from "../Componenti/Navbar"
import { Sinistra, Footer } from "../Componenti/About"

import StudioContext from "../Componenti/Context/StudioContext"
import { useContext } from "react"

const about = ( ) => {

    const { about } = useContext(StudioContext)

    return (
       about ? <Contenitore primo={<Navbar />} titolo={about.titolo} paragrafo={about.descrizione}
       sinistra={<Sinistra imgSrc={about.imgsrc} imgAlt={about.imgalt} />}
       footer={<Footer link={about.cvlink} />}
       /> : <Caricamento />
    
    );
}


export default about;