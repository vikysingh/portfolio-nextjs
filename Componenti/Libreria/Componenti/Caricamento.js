import styled from "styled-components"
import Tipografia from "./Tipografia"

const { Heading4 } = Tipografia

const Wrapper = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
`

export default function Caricamento() {
    return <Wrapper>
        <Heading4 bold >
            Caricamento in corso...
        </Heading4>
    </Wrapper>
}