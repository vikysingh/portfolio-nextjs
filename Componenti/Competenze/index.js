import styled from "styled-components"
import { Tipografia } from "../Libreria"

const { Paragrafo } = Tipografia

const Wrapper = styled.div`
max-width: 70%;
height: 100%;
/* background: pink; */
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
`

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