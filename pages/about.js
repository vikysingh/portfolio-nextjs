import { Contenitore } from "../Componenti/Libreria"
import Navbar from "../Componenti/Navbar"
import { Sinistra, Footer } from "../Componenti/About"

const Primo = <Navbar />

const about = () => {
    return (
       <Contenitore primo={Primo} titolo="Vikram Singh" paragrafo="Paragrafo test"
       sinistra={Sinistra} 
       footer={Footer}
       />
    );
}

export default about;