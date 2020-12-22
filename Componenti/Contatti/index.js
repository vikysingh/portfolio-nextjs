import styled from "styled-components"
import { Tipografia, TextField, Tasto } from "../Libreria"

const { TextArea, Input } = TextField

//Form contenitore per contatti form
const Form = styled.form`
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
<Tipografia livello="paragrafo" >Email</Tipografia>
<Tipografia livello="paragrafo" bold >
    <a href={`mailto:${email}`}>{email}</a>
</Tipografia>

<Tipografia livello="paragrafo" >Telefono</Tipografia>
<Tipografia livello="paragrafo" bold >{tel}</Tipografia>
</>

//Colonna sinistra, intero form
export const Sinistra = <Form>
    <Input type="text" placeholder="Nome" required />
    <Input type="email" placeholder="Email" required />
    <TextArea required placeholder="Messaggio" />

    <Tasto primario>
        <Tipografia livello="paragrafo" colore="chiaro" bold>Invia</Tipografia>
    </Tasto>
</Form>