import { Tasto, Tipografia } from "../Libreria"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import styled from "styled-components"

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
            <Tipografia livello="h3" >
                {Tipo === "chiuso" ? <HiX /> : <HiMenuAlt4 /> }
            </Tipografia>
        </TastoWrapper>
    );
}

export default NavIcon;