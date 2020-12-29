import styled from "styled-components"
import { Tipografia, TextField, Tasto } from "../Libreria"
import PropTypes from 'prop-types'
import { useState } from "react"

import config from "./config"

const { TextArea, Input } = TextField
const { Paragrafo } = Tipografia


//Form contenitore per contatti form
const Form = styled.form.attrs({
    "data-testid": config["data-testid"]
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

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [messaggio, setMessaggio] = useState("")
    
    return <Form initial={{ y: 120, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }} >

    <Input type="text" placeholder="Nome" name="contattiNome" required
    value={nome} onChange={e => setNome(e.target.value)} />
    <Input type="email" placeholder="Email" name="contattiEmail" required
    value={email} onChange={e => setEmail(e.target.value)} />
    <TextArea required placeholder="Messaggio" name="contattiMessaggio"
    value={messaggio} onChange={e => setMessaggio(e.target.value)} />

    <Tasto primario>
        <Paragrafo colore="chiaro" bold>Invia</Paragrafo>
    </Tasto>
</Form>
}

Footer.propTypes = {
    email: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired
}

/*Footer.defaultProps = {
    email: "#",
    tel: "#"
}*/
