import React from "react"
import "@testing-library/jest-dom"
import {render, screen, fireEvent, cleanup } from "@testing-library/react"

import TextField from "./index"
import config from "./config"

afterEach(cleanup)

const { Input, TextArea } = TextField

test("Input TextField componente dalla libreria", () => {
    render(<Input placeholder={config.props.inputPlaceholder}
        type={config.props.tipo} />);
    
    const input = screen.getByTestId(config.input["data-testid"])

    fireEvent.change(input, { target: { value: config.props.valore } })

    expect(input).toBeInTheDocument()
    expect(input.value).toBe(config.props.valore)
})

test("TextArea TextField componente dalla libreria", () => {
    render(<TextArea placeholder={config.props.textareaPlaceholder} ></TextArea>)

    const textarea = screen.getByTestId(config.textarea["data-testid"])

    fireEvent.change(textarea, { target: { value: config.props.valore } })

    expect(textarea).toBeInTheDocument()
    expect(textarea.value).toBe(config.props.valore)
})