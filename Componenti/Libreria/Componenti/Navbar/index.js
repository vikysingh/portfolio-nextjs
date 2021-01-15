import Tipografia from "../Tipografia"
import Link from "next/link"
import NavElementi from "./NavElementi.element.js"
import NavIcon from "./NavIcon.element.js"

import { useState } from "react"


const { Heading3 } = Tipografia

const index = () => {

    const [ display, setDisplay ] = useState(false)

    return (
        <nav>
            <NavIcon clickHandler={() => setDisplay(!display)} tipo={display ? "chiuso" : "aperto"} />
            {
                display ? <NavElementi direzione="column" content="space-around" items="center" >
                <Heading3 livello="h3" colore="chiaro" bold>
                    <Link href="/">Progetti</Link>
                </Heading3>
                <Heading3 livello="h3" colore="chiaro"  bold>
                    <Link href="/about">About</Link>
                </Heading3>
                <Heading3 livello="h3" colore="chiaro"  bold>
                    <Link href="/contatti">Contatti</Link>
                </Heading3>
                <Heading3 livello="h3" colore="chiaro"  bold>
                    <Link href="/competenze">Competenze</Link>
                </Heading3>
              </NavElementi> : <></>
            }
        </nav>
    );
}

export default index;