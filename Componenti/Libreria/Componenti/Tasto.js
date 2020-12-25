import styled, { css } from "styled-components"
import PropTypes from 'prop-types'

const Tasto = styled.button`
padding: 15px 20px;
width: auto;
height: auto;
background: none;
border: none;
cursor: pointer;


${({primario}) => primario && css`
    background: rgb(255,23,145);
    background: -moz-linear-gradient(90deg, rgba(255,23,145,1) 0%, rgba(204,23,255,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(255,23,145,1) 0%, rgba(204,23,255,1) 100%);
    background: linear-gradient(90deg, rgba(255,23,145,1) 0%, rgba(204,23,255,1) 100%);
    color: #fff;
`}

${({secondario}) => secondario && css`
    border: 2px solid #FF1791;
`}
`

Tasto.propTypes = {
    primario: PropTypes.bool,
    secondario: PropTypes.bool
}

export default Tasto;