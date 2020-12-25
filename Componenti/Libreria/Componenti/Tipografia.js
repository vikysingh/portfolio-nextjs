import styled from "styled-components"
import { Heading1_2, Heading3_4_paragrafo } from "../Fabbrica/_tipografia"
import PropTypes from 'prop-types'

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

//Oggetti creati separatamente per evitare la ripetizione del codice
const MainHeadingPropTypes = {
    colore: PropTypes.string,
    bold: PropTypes.bool,
    variato: PropTypes.bool
}

const MainHeadingDefaultProps = {
    colore: "",
    bold: false,
    variato: false
}

const UltimiHeadingPropTypes = {
    colore: PropTypes.string,
    bold: PropTypes.bool
}

const UltimiHeadingDefaultProps = {
    colore: "#646464",
    bold: false
}

Heading1.propTypes = {...MainHeadingPropTypes}
Heading1.defaultProps = {...MainHeadingDefaultProps}

Heading2.propTypes = {...MainHeadingPropTypes}
Heading2.defaultProps = {...MainHeadingDefaultProps}

Heading3.propTypes = {...UltimiHeadingPropTypes}
Heading3.defaultProps = {...UltimiHeadingDefaultProps}

Heading4.propTypes = {...UltimiHeadingPropTypes}
Heading4.defaultProps = {...UltimiHeadingDefaultProps}

Paragrafo.propTypes = {...UltimiHeadingPropTypes}
Paragrafo.defaultProps = {...UltimiHeadingDefaultProps}

export default {
    Heading1, Heading2, Heading3, Heading4, Paragrafo
}
