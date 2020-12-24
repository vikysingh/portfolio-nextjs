import { Tasto, Tipografia } from "../Libreria"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import styled from "styled-components"

const { Heading3 } = Tipografia

const TastoWrapper = styled(Tasto)`
z-index: 20;
position: fixed;
right: 20px;
top: 20px;
`

const NavIcon = ({ clickHandler, tipo }) => {

    const Tipo = tipo()

    return (
        <TastoWrapper onClick={clickHandler} >
            <Heading3>
                {Tipo === "chiuso" ? <HiX /> : <HiMenuAlt4 /> }
            </Heading3>
        </TastoWrapper>
    );
}

export default NavIcon;