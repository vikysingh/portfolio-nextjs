import React from "react"
import "@testing-library/jest-dom"
import { render, screen, cleanup } from "@testing-library/react"
import 'jest-styled-components'

import Tipografia from "./index"

import config from "./config"

const { Heading1, Heading3 } = Tipografia

const { heading1, heading3, props } = config

afterEach(cleanup)

/*
Il motivo dell'uso dei solo due testid è stato spiegato nel file ./index.js
*/

test("Heading1 del componente tipografia dalla libreria con tutti i prop", () => {
    render(<Heading1 colore={heading1.props.colore} bold={props.bold}
        variato={heading1.props.variato} >{ props.testo }</Heading1>)

    const heading1Test = screen.getByTestId(heading1["data-testid"])

    expect(heading1Test).toHaveTextContent(props.testo)
    expect(heading1Test).toHaveStyle({
        color: heading1.props.style.color,
        fontWeight: props.style.fontWeight,
        fontSize: heading1.props.style.fontFamily
    })
})

test("Heading3 del componente tipografia dalla libreria con tutti i prop", () => {
    render(<Heading3 colore={heading3.props.colore} bold={props.bold}
        >{ props.testo }</Heading3>)
    
    const heading3Test = screen.getByTestId(heading3["data-testid"])

    expect(heading3Test).toHaveTextContent(props.testo)
    expect(heading3Test).toHaveStyle({
        color: heading3.props.style.color,
        fontWeight: props.style.fontWeight
    })
})