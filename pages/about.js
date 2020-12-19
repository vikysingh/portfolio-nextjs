
import { HiArrowNarrowDown } from "react-icons/hi"
import { Tipografia, Tasto } from "../Componenti/Libreria"


import Navbar from "../Componenti/Navbar"

// const styles = {
//     width: "50%",
//     height: "auto"
// }

const about = () => {
    return (
       <section>
           <Navbar />
           <Tipografia livello="h2" colore="rosso" variato bold>
               Vikram Singh
           </Tipografia>
           <Tipografia livello="paragrafo" >
               Descrizione va scritta qui
           </Tipografia> 

           <Tasto><Tipografia livello="h4" bold >Scarica CV <HiArrowNarrowDown /></Tipografia></Tasto>

           <img src="" alt="Foto profilo" />
       </section>
    );
}

export default about;