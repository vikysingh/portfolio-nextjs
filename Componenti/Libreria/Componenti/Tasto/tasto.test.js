import React from "react"
import "@testing-library/jest-dom"
import { render, screen, cleanup } from "@testing-library/react"

import Tasto from "./index"
import config from "./config"

afterEach(cleanup)

const { style: { stylePrimario, styleSecondario }, props: { testo, primario, secondario } } = config

const stylePrimarioCost = {
    background: stylePrimario.background[0],
    background: stylePrimario.background[1],
    background: stylePrimario.background[2],
    background: stylePrimario.background[3],
    color: stylePrimario.color
}

const styleSecondarioCost = {
    border: styleSecondario.border
}

test("componente Tasto (primario) dalla libreria", () => {
    render(<Tasto primario={primario} type="submit">{testo}</Tasto>)

    const tastoTest = screen.getAllByTestId(config["data-testid"])[0]

    expect(tastoTest).toBeInTheDocument()
    expect(tastoTest).toBeInstanceOf(HTMLButtonElement)
    expect(tastoTest).toHaveStyle({...stylePrimarioCost})
    expect(tastoTest).toHaveAttribute("type", "submit")
})

test("componente Tasto (secondario) dalla libreria", () => {
    render(<Tasto secondario={secondario}>{testo}</Tasto>)

    expect(screen.getByText(testo)).toBeInTheDocument()
    expect(screen.getByText(testo)).toBeInstanceOf(HTMLButtonElement)
    expect(screen.getByText(testo)).toHaveStyle({...styleSecondarioCost})
})

test("componente Tasto (neutro) dalla libreria", () => {
    render(<Tasto>{testo}</Tasto>)

    expect(screen.getByText(testo)).toBeInTheDocument()
    expect(screen.getByText(testo)).toBeInstanceOf(HTMLButtonElement)
    expect(screen.getByText(testo)).not.toHaveStyle({...stylePrimarioCost, ...styleSecondarioCost})
})