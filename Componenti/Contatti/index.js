import styled from "styled-components"
import { Tipografia, TextField, Tasto } from "../Libreria"

const { TextArea, Input } = TextField
const { Paragrafo } = Tipografia

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
<Paragrafo >Email</Paragrafo>
<Paragrafo bold >
    <a href={`mailto:${email}`}>{email}</a>
</Paragrafo>

<Paragrafo >Telefono</Paragrafo>
<Paragrafo bold >{tel}</Paragrafo>
</>

//Colonna sinistra, intero form
export const Sinistra = <Form>
    <Input type="text" placeholder="Nome" required />
    <Input type="email" placeholder="Email" required />
    <TextArea required placeholder="Messaggio" />

    <Tasto primario>
        <Paragrafo colore="chiaro" bold>Invia</Paragrafo>
    </Tasto>
</Form>