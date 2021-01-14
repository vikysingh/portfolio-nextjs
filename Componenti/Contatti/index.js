/*
NOTA: Alcune funzinoni sono solo temporanee, per certe prove.
*/

import styled from "styled-components"
import { Tipografia, TextField, Tasto } from "../Libreria"
import PropTypes from 'prop-types'
//import { useState } from "react"

import config from "./config"

const { TextArea, Input } = TextField
const { Paragrafo } = Tipografia


//Form contenitore per contatti form
const Form = styled.form.attrs({
    "data-testid": config["data-testid"],
    //name: "contatti",
    method: "POST",
    "data-netlify": config["data-netlify"],
    action: "/successo"
})`
width: 80%;
& input, & textarea {
    margin: 10px 0;
}
@media (max-width: 600px) {
    & {
        width: 90%;
    }
}
`

//Footer per la colonna destra
export const Footer = ({ email, tel }) => <>
<Paragrafo >Email</Paragrafo>
<Paragrafo bold >
    <a href={`mailto:${email}`}>{email}</a>
</Paragrafo>

<Paragrafo >Telefono</Paragrafo>
<Paragrafo bold >{tel}</Paragrafo>
</>

//Colonna sinistra, intero form
export const Sinistra = () => {

    //State sarà collegato al componente genitore, per la validazione, attraverso useReducer
    //e due prop
    /*const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [messaggio, setMessaggio] = useState("")*/
    
    return <form name="contact" method="POST">
    <input type="hidden" name="form-name" value="contact" />
    <p>
<input type="text" name="firstname" id="firstname" />
      <label htmlFor="yourname">
        Your Name:
      </label> <br />
      <input type="text" name="name" id="yourname" />
    </p>
    <p>
      <label htmlFor="youremail">
        Your Email:
      </label> <br />
      <input type="email" name="email" id="youremail" />
    </p>
    <p>
      <label htmlFor="yourmessage">
        Message:
      </label> <br />
      <textarea name="message" id="yourmessage"></textarea>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
}

Footer.propTypes = {
    email: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired
}

/*Footer.defaultProps = {
    email: "#",
    tel: "#"
}*/
