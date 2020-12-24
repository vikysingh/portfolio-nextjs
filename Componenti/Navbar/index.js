import { Tipografia } from "../Libreria"
import Link from "next/link"
import NavElementi from "./NavElementi.element.js"
import NavIcon from "./NavIcon.element.js"

import { useState } from "react"


const index = () => {

    const [ display, setDisplay ] = useState(false)

    function setTipo() {
        return display ? "chiuso" : "aperto"
    }

    return (
        <nav>
            <NavIcon clickHandler={() => setDisplay(!display)} tipo={setTipo} />
            {
                display ? <NavElementi>
                <Tipografia livello="h3" colore="chiaro" bold>
                    <Link href="/">Progetti</Link>
                </Tipografia>
                <Tipografia livello="h3" colore="chiaro"  bold>
                    <Link href="/about">About</Link>
                </Tipografia>
                <Tipografia livello="h3" colore="chiaro"  bold>
                    <Link href="/contatti">Contatti</Link>
                </Tipografia>
                <Tipografia livello="h3" colore="chiaro"  bold>
                    <Link href="/competenze">Competenze</Link>
                </Tipografia>
              </NavElementi> : <></>
            }
        </nav>
    );
}

export default index;