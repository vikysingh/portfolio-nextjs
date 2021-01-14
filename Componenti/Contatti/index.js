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
    name: "contatti",
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

    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": event.target.getAttribute("name"),
            ...name
          })
        }).then(() => console.log("/thank-you/")).catch(error => alert(error))
    }
    
    
    return <Form initial={{ y: 120, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }} onSubmit={handleSubmit} >

    <Input type="hidden" name="form-name" value="contatti" />

    <Input data-testid={config.child.nomeInput["data-testid"]} type="text"
    placeholder="Nome" name="contattiNome"
     />

    <Input data-testid={config.child.emailInput["data-testid"]} type="email"
    placeholder="Email" name="contattiEmail"
     />

    <TextArea data-testid={config.child.messaggioInput["data-testid"]}
    placeholder="Messaggio" name="contattiMessaggio"  />

    <Tasto primario type="submit">
        <Paragrafo colore="chiaro" bold>Invia</Paragrafo>
    </Tasto>
</Form>
}

Footer.propTypes = {
    email: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired
}