import styled from "styled-components"
import Flex from "../Flex"

//Contenitore per gli elementi del navbar
const NavElementi = styled(Flex)`
padding: 40px 0;
position: fixed;
top: 0;
left: 0;
right: 0;
width: 100vw;
height: 100vh;
background-color: #6917D0;
z-index: 15;
`

export default NavElementi;