import styled from "styled-components"
import { Tipografia, TextField, Tasto } from "../Libreria"
import PropTypes from 'prop-types'
import { useState } from "react"

import config from "./config"
import NetlifyForm from "react-ssg-netlify-forms"

const { TextArea, Input } = TextField
const { Paragrafo } = Tipografia


//Form contenitore per contatti form
const Form = styled(NetlifyForm).attrs({
    "data-testid": config["data-testid"],
    "data-netlify": config["data-netlify"]
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

    const [ formValues, setFormValues ] = useState({
        nome: "",
        email: "",
        messaggio: ""
    })

    const handleChange = e => setFormValues({...formValues,
    [e.target.name]: e.target.value})
    
    return <Form formName="contatti" >
    <Input data-testid={config.child.nomeInput["data-testid"]} type="text"
        placeholder="Nome" name="nome" value={formValues.nome} onChange={handleChange} required
    />

    <Input data-testid={config.child.emailInput["data-testid"]} type="email"
        placeholder="Email" name="email" value={formValues.email} onChange={handleChange} required
    />

    <TextArea data-testid={config.child.messaggioInput["data-testid"]}
        placeholder="Messaggio" name="messaggio" value={formValues.messaggio}
        onChange={handleChange} required
    />

    <Tasto primario type="submit">
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
