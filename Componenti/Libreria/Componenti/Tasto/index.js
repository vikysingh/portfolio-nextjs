import styled, { css } from "styled-components"
import PropTypes from 'prop-types'

import config from "./config"

const { style: { stylePrimario, styleSecondario } } = config

const Tasto = styled.button.attrs({
    "data-testid": config["data-testid"]
})`
padding: 15px 20px;
width: auto;
height: auto;
background: none;
border: none;
cursor: pointer;


${({primario}) => primario && css`
    background: ${stylePrimario.background[0]};
    background: ${stylePrimario.background[1]};
    background: ${stylePrimario.background[2]};
    background: ${stylePrimario.background[3]};
    color: ${stylePrimario.color};
`}

${({secondario}) => secondario && css`
    border: ${styleSecondario.border};
`}
`

Tasto.propTypes = {
    primario: PropTypes.bool,
    secondario: PropTypes.bool
}

export default Tasto;