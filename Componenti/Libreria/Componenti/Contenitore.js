import styled from "styled-components"
import Tipografia from "./Tipografia"

const Section = styled.section`
width: 100vw;
min-height: 100vh;

display: grid;
grid-template-rows: 15% 85%;
`

const PrimoRow = styled.div`
width: 100%;
height: 100%;
grid-row: 1 / 2;
`

const SecondoRow = styled(PrimoRow)`
grid-row: 2 / -1;

padding-left: 15%;

display: grid;
grid-template-columns: repeat(2, 50%);

& > div:first-child {
    grid-column: 1 / 2;
}

& div p {
    width: 70%;
    margin: 5%;
}

& > div:nth-child(2) {
    grid-column: 2 / -1;
    padding-top: 15%;
}

& img{
    width: 60%;
    height: auto;
}

@media (max-width: 600px) {
    & {
        grid-template-columns: 100% !important;
        padding-left: 10%;
    }

    & > div {
        grid-column: 1 / -1 !important;
        padding: 0%;
    }

    & img {
        width: 90%;
        margin-bottom: 10%;
    }

}
`

const Contenitore = ({ primo, titolo, paragrafo, sinistra, footer }) => {
    return (
        <Section>
            <PrimoRow> {primo} </PrimoRow>
            <SecondoRow>
                <div>
                    <Tipografia livello="h2" colore="rosso" variato bold>
                        {titolo}
                    </Tipografia>
                    <Tipografia livello="paragrafo" >
                        {paragrafo}
                    </Tipografia>
                    {footer}
                </div>
                <div>
                    {sinistra}
                </div>
            </SecondoRow>
        </Section>
    );
}

export default Contenitore;