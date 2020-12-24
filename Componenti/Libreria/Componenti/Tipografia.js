import styled from "styled-components"
import { Heading1_2, Heading3_4_paragrafo } from "../Fabbrica/_tipografia"

const Heading1 = styled.h1`
font-size: 6rem;
${({colore, bold, variato}) => Heading1_2(colore, bold, variato)}

@media(max-width: 600px) {
    & {
        font-size: 4.5rem;
    }
}
`

const Heading2 = styled.h2`
font-size: 4rem;
${({colore, bold, variato}) => Heading1_2(colore, bold, variato)}

@media(max-width: 600px) {
    & {
        font-size: 3.75rem;
    }
}
`

const Heading3 = styled.h3`
font-size: 3rem;
${({colore, bold}) => Heading3_4_paragrafo(colore, bold)}
`

const Heading4 = styled.h4`
font-size: 1.2rem;
${({colore, bold}) => Heading3_4_paragrafo(colore, bold)}
`

const Paragrafo = styled.p`
font-size: 1rem;
${({colore, bold}) => Heading3_4_paragrafo(colore, bold)}
`

export default {
    Heading1, Heading2, Heading3, Heading4, Paragrafo
}