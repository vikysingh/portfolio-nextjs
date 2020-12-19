import styled from "styled-components"

const Section = styled.section`
width: 100vw;
height: 100vh;
display: grid;
grid-template-rows: 5vh 95vh;
`

const Primo = styled.div`
width: 100%;
height: 100%;
grid-row: 1 / 2;
`

const Secondo = styled(Prima)`
grid-row: 2 / -1;
`

const Contenitore = ({ primo, secondo }) => {
    return (
        <Section>
            <Primo> {primo} </Primo>
            <Secondo> {secondo} </Secondo>
        </Section>
    );
}

export default Contenitore;