import styled from "styled-components"
import { Tipografia } from "../Libreria"
import PropTypes from 'prop-types'

const { Paragrafo } = Tipografia

const Wrapper = styled.div`
& div {
    margin: 30px 0;
}
`
/* Componente per la colonna sinistra di contatti pagina */
const Sinistra = ({ email, tel }) => <Wrapper>
<div>
    <Paragrafo >Email</Paragrafo>
    <Paragrafo bold >
        <a href={`mailto:${email}`}>{email}</a>
    </Paragrafo>
</div>

<div>
    <Paragrafo >Telefono</Paragrafo>
    <Paragrafo bold >{tel}</Paragrafo>
</div>
</Wrapper>

export default Sinistra

Sinistra.propTypes = {
    email: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired
}