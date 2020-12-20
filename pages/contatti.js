import { Contenitore, TextField, Tasto, Tipografia } from "../Componenti/Libreria"
import styled from "styled-components"

const { Input, TextArea } = TextField

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

const Footer = () => <>
<Tipografia livello="paragrafo" >Email</Tipografia>
<Tipografia livello="paragrafo" bold >
    <a href="mailto:singhvik071@gmail.com">singhvik071@gmail.com</a>
</Tipografia>

<Tipografia livello="paragrafo" >Telefono</Tipografia>
<Tipografia livello="paragrafo" bold >
    <a href="tel:339-806-9470">339 806 9470</a>
</Tipografia>
</>

const Sinistra = <Form>
    <Input type="text" placeholder="Nome" required />
    <Input type="email" placeholder="Email" required />
    <TextArea required placeholder="Messaggio" />

    <Tasto primario>
        <Tipografia livello="paragrafo" colore="chiaro" bold>Invia</Tipografia>
    </Tasto>
</Form>

const contatti = () => {
    return (
        <Contenitore primo="navbar" titolo="Non essere estraneo."
        paragrafo="Paragrafo test"
        footer={<Footer />}
        sinistra={Sinistra}
         />
    );
}

export default contatti;