import styled, { css } from "styled-components"

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

/*
color: ${({colore}) => {
    return colore === "bianco" ? "#ffffff" : colore === "rosso" ? "#FF1791" : "#1C1D25"
}};
*/

export default Tasto;