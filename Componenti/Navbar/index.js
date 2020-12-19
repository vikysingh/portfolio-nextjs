// import { Padding } from "../Libreria"
// import styled from "styled-components"
import { Tipografia } from "../Libreria"

import NavElementi from "./NavElementi.element.js"
import NavIcon from "./NavIcon.element.js"


const index = () => {
    return (
        <nav>
            <NavIcon />
            <NavElementi>
              <Tipografia livello="h4" colore="chiaro">
                  <a href="#">Lavoro</a>
              </Tipografia>
              <Tipografia livello="h4" colore="chiaro">
                  <a href="#">About</a>
              </Tipografia>
              <Tipografia livello="h4" colore="chiaro">
                  <a href="#">Contatti</a>
              </Tipografia>
            </NavElementi>
        </nav>
    );
}

export default index;