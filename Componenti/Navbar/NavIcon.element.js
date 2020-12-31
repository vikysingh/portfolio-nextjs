import { Tasto, Tipografia } from "../Libreria"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import styled from "styled-components"
import PropTypes from 'prop-types'

const { Heading3 } = Tipografia

const TastoWrapper = styled(Tasto)`
z-index: 20;
position: fixed;
right: 20px;
top: 20px;
`

const NavIcon = ({ clickHandler, tipo }) => {

    return (
        <TastoWrapper name="Icona tasto navbar" onClick={clickHandler} >
            <Heading3>
                {tipo === "chiuso" ? <HiX /> : <HiMenuAlt4 /> }
            </Heading3>
        </TastoWrapper>
    );
}

NavIcon.propTypes = {
    clickHandler: PropTypes.func,
    tipo: PropTypes.string.isRequired
}

NavIcon.defaultProps = {
    clickHandler: function() {}
}

export default NavIcon;