import React from "react"
import "@testing-library/jest-dom"
import {render, screen } from "@testing-library/react"

import TextField from "./index"
import config from "./config"

const { Input, TextArea } = TextField

test("Input TextField componente dalla libreria", () => {
    render(<Input placeholder={config.props.inputPlaceholder} type={config.props.tipo} />)

    const input = screen.getByTestId(config.input["data-testid"])

    expect(input).toBeInTheDocument()
    expect(input).toBeInstanceOf(HTMLInputElement)
})


test("TextArea TextField componente dalla libreria", () => {
    render(<TextArea placeholder={config.props.textareaPlaceholder} ></TextArea>)

    const textarea = screen.getByTestId(config.textarea["data-testid"])

    expect(textarea).toBeInTheDocument()
    expect(textarea).toBeInstanceOf(HTMLTextAreaElement)
})