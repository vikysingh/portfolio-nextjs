import React from "react"
import "@testing-library/jest-dom"
import { render, screen, cleanup, fireEvent } from "@testing-library/react"

import {Sinistra} from "./index"
import config from "./config"

afterEach(cleanup)

test("Sinistra componente da Contatti", () => {
    render(<Sinistra />)

    //const sinistraTest = screen.getByTestId(config["data-testid"])

    const nomeInputTest = screen.getByTestId(config.child.nomeInput["data-testid"])
    const emailInputTest = screen.getByTestId(config.child.emailInput["data-testid"])
    const messaggioInputTest = screen.getByTestId(config.child.messaggioInput["data-testid"])


    fireEvent.change(nomeInputTest, { target: { value: config.child.nomeInput.props.valore } })
    fireEvent.change(emailInputTest, { target: { value: config.child.emailInput.props.valore } })
    fireEvent.change(messaggioInputTest, { target: { value: config.child.messaggioInput.props.valore } })

    expect(nomeInputTest.value).toBe(config.child.nomeInput.props.valore)
    expect(emailInputTest.value).toBe(config.child.emailInput.props.valore)
    expect(messaggioInputTest.value).toBe(config.child.messaggioInput.props.valore)

})