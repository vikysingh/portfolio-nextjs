import { Tipografia } from "../Libreria"
import styled from "styled-components"

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
        height: auto;
        overflow-y: scroll;
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
opacity: 0.5;


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
    opacity: 1;
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

    &:hover h1 {
        margin-top: -30px;
        margin-right: 0px;
    }
}
`

export default function Index({ elementi }) {
    return <Wrapper>
        {elementi.map(elemento => <Card index={elementi.indexOf(elemento)} sfondo={elemento.sfondo} >
            <Tipografia livello="h1" bold>
                <a href="#">{elemento.titolo}</a>
            </Tipografia>
            </Card>)}
    </Wrapper>
}