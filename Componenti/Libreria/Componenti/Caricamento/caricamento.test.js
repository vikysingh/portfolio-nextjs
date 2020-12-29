import React from "react"

import "@testing-library/jest-dom"

import {render, screen} from "@testing-library/react"

import Caricamento from "./index"
import config from "./config"

test("Caricamento componente dall libreria", () => {
    render(<Caricamento />)

    const caricamentoTest = screen.getByTestId(config["data-testid"])

    expect(caricamentoTest).toBeInTheDocument()
})