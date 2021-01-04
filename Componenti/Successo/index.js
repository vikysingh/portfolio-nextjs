import styled from "styled-components"
import { Flex, Tipografia }from "../Libreria"

const { Heading3 } = Tipografia

const Wrapper = styled(Flex)`
width: 100vw;
height: 100vh;
`

const Main = () => <Wrapper content="center" items="center">
<Heading3> Modulo inviato con successo! </Heading3>
</Wrapper>

export default Main