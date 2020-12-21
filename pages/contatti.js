import { Contenitore } from "../Componenti/Libreria"
import { Footer, Sinistra } from "../Componenti/Contatti"

const contatti = () => {
    return (
        <Contenitore primo="navbar" titolo="Non essere estraneo."
        paragrafo="Paragrafo test"
        footer={Footer}
        sinistra={Sinistra}
         />
    );
}

export default contatti;