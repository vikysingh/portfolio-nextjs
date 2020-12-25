import { Tipografia } from "../Libreria"
import styled from "styled-components"
import PropTypes from 'prop-types'

import Link from "next/link"

//Wrapper per i progetti, simile a quello del componente della pagina "competenze"
const { Heading1 } = Tipografia

const  Wrapper = styled.section`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
overflow: hidden;

@media (max-width: 600px) {
    & {
        flex-direction: column;
    }
}
`

const Card = styled.div`
width: calc(100vw / 6);
height: 100vh;
writing-mode: vertical-rl;
background-color: ${({sfondo}) => sfondo ? sfondo : "inherit"};
text-align: start;
z-index: ${({index}) => index ? index : "initial"};
transform-origin: center;
padding-bottom: 50px;
transition: 400ms all ease;

& h1 {
    transform: rotate(-180deg);
    transform-origin: center;
    margin-right: -40px;
    transition: 400ms all ease;
}

& a {
    text-decoration: none;
    color: #fff;
}

&:hover {
    width: calc(100vw/4);
    border: 2px solid #fff;
}

&:hover h1 {
    margin-right:40px;
}

@media (max-width: 600px) {
    & {
        width: 100vw;
        height: calc(100vh / 6);
        padding-top: 50px;
        padding-bottom: 0px;
        writing-mode: unset;
        text-align: center;
    }

    & h1 {
        transform: none;
        /* display: none; */
        margin-right: 0px;
        margin-top: 15px;
    }

    &:hover {
        width: 100vw;
        height: calc(100vh/4);
    }

    &:hover h1 {
        margin-top: -30px;
        margin-right: 0px;
    }
}
`

export default function Index({ elementi }) {
    return <Wrapper>
        {elementi.map(elemento => <Card key={elemento.titolo} index={elementi.indexOf(elemento)}
        sfondo={elemento.sfondo} >
            <Heading1 bold>
                <Link href={elemento.link}>{elemento.titolo}</Link>
            </Heading1>
            </Card>)}
    </Wrapper>
}

Index.propTypes = {
    elementi: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string.isRequired,
        sfondo: PropTypes.string.isRequired,
        titolo: PropTypes.string.isRequired
    }))
}