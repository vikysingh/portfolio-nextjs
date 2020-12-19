import { Contenitore, Tipografia, Tasto } from "../Componenti/Libreria"
import { HiArrowDown } from "react-icons/hi"
import Navbar from "../Componenti/Navbar"

const Primo = <Navbar />

const about = () => {
    return (
       <Contenitore primo={Primo} titolo="Vikram Singh" paragrafo="Ho iniziato ad imparare sviluppo FrontEnd il settembre 2019 ed ho fatto notevole progresso fino ad adesso. Sono in grado di sviluppare UI complessi da scratch e portarli fino allo sviluppo completo e testabili. Mi piace lavorare in team e sui progetti con design attraenti e di specifico con ReactJS. Oltre al FrontEnd mi piace costruire giochi con JavaScript"
       sinistra={<img src="https://vikramsingh.netlify.app/src/assets/profile.jpeg" alt="Foto profilo" />} 
       footer={<Tasto>
            <Tipografia livello="h4" bold >Scarica CV <HiArrowDown /> </Tipografia>
       </Tasto>}
       />
    );
}

export default about;