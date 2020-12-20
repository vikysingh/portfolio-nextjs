import styled from "styled-components"
import Tipografia from "./Tipografia"

//Intero contenitore per il grid
const Section = styled.section`
width: 100vw;
height: auto;

display: grid;
grid-template-rows: 15% 85%;
`
//Primo row
const PrimoRow = styled.div`
width: 100%;
height: auto;
grid-row: 1 / 2;
`
//Secondo row
const SecondoRow = styled(PrimoRow)`
grid-row: 2 / -1;

display: grid;
grid-template-columns: repeat(2, 50%);

& .secondo_row__primo_col {
    grid-column: 1 / 2;
    padding-left: 15%;
}

& .secondo_row__primo_col p {
    width: 70%;
    margin: 5%;
}

& .secondo_row__secondo_col {
    grid-column: 2 / -1;
    padding-top: 10%;
}

& img{
    width: 60%;
    height: auto;
}

@media (max-width: 600px) {
    & {
        grid-template-columns: 100%;
        padding-left: 10%;
    }

    & .secondo_row__primo_col, & .secondo_row__secondo_col {
        grid-column: 1 / -1;
        padding: 20px 0%;
    }

    & h2 {
        width: 80%;
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
                <div className="secondo_row__primo_col" >
                    <Tipografia livello="h2" colore="rosso" variato bold>
                        {titolo}
                    </Tipografia>
                    <Tipografia livello="paragrafo" >
                        {paragrafo}
                    </Tipografia>
                    <div>
                        {footer}
                    </div>
                </div>
                <div className="secondo_row__secondo_col" >
                    {sinistra}
                </div>
            </SecondoRow>
        </Section>
    );
}

export default Contenitore;