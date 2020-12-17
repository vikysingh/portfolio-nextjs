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

export default function Tipografia({ livello, children, colore, bold, variato }) {
    switch (livello) {
        case "h1":
            return <Heading1 colore={colore} bold={bold} variato={variato} > {children} </Heading1>;
        case "h2":
            return <Heading2 colore={colore} bold={bold} variato={variato} > {children} </Heading2>;
        case "h3":
            return <Heading3 colore={colore} bold={bold} > {children} </Heading3>;
        case "h4":
            return <Heading4 colore={colore} bold={bold} > {children} </Heading4>;
        case "paragrafo":
            return <Paragrafo colore={colore} bold={bold} > {children} </Paragrafo>;
    
        default:
            return Heading1;
    }
}