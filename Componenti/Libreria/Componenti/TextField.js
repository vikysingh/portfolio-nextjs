import styled from "styled-components"
import base from "../Fabbrica/_textfield"

const Input = styled.input`
width: 100%;
${base()}
`

const TextArea = styled.textarea`

${base()}
max-width: 100%;
min-width: 100%;
max-height: 300px;
min-height: 200px;

`
const TextField = {
    Input, TextArea
}

export default TextField;