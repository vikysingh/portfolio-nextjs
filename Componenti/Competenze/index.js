import styled from "styled-components"
import { Tipografia, Flex } from "../Libreria"

const { Paragrafo } = Tipografia

//Un wrapper per la pagina competenze, sarà la colonna sinitra
// del componente Contenitore 
const Wrapper = styled(Flex)`
max-width: 70%;
height: 100%;
`

//un card che contiene il testo della competenza, come "HTML5"
export const Card = styled(Paragrafo)`
padding: 10px 14px;
margin: 8px;
background: #17FFC4;
user-select: none;
transition: 200ms all ease;

&:hover {
    border-right: 5px solid #FF1791;
}
`

export default Wrapper;