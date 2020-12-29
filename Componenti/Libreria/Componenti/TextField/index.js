import styled from "styled-components"
import base from "../../Fabbrica/_textfield"

import config from "./config"

const Input = styled.input.attrs(props => ({
    "data-testid": props["data-testid"] || config.input["data-testid"]
}))`
width: 100%;
${base()}
`

const TextArea = styled.textarea.attrs(props => ({
    "data-testid": props["data-testid"] || config.textarea["data-testid"]
}))`

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