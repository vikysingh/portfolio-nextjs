import { Contenitore } from "../Componenti/Libreria"
import Navbar from "../Componenti/Navbar"
import { Sinistra, Footer } from "../Componenti/About"

import sanityClient from "../client"
import { useEffect } from "react"

const Primo = <Navbar />

const about = () => {

    useEffect(() => {
        sanityClient
            .fetch(`*`)
            .then(data => {
                console.clear()
                console.log(data)
            })
    }, [])

    return (
       <Contenitore primo={Primo} titolo="Vikram Singh" paragrafo="Paragrafo test"
       sinistra={Sinistra} 
       footer={Footer}
       />
    );
}

export default about;