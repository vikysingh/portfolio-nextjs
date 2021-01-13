import styled from "styled-components"
import { Tipografia, TextField, Tasto } from "../Libreria"
import PropTypes from 'prop-types'
import { useState } from "react"
import { useForm } from "react-hook-form"

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

    //State sarà collegato al componente genitore, per la validazione, attraverso useReducer
    //e due prop
    /*const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [messaggio, setMessaggio] = useState("")*/
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = (data, e) => {
        console.clear()
        console.log("e: ", e)
        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: data
        })
        .then(() => console.log("success!!!"))
    }

    console.log(watch("contattiNome"))
    
    return <Form initial={{ y: 120, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }} onSubmit={handleSubmit(onSubmit)} >

    <Input data-testid={config.child.nomeInput["data-testid"]} type="text"
    placeholder="Nome" name="contattiNome" ref={register({required: true})} />
    {errors.contattiNome && <span>This field is required</span>}

    <Input data-testid={config.child.emailInput["data-testid"]} type="email"
    placeholder="Email" name="contattiEmail" ref={register({required: true})} />

    <TextArea data-testid={config.child.messaggioInput["data-testid"]} ref={register({required: true})}
    placeholder="Messaggio" name="contattiMessaggio"  />

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
