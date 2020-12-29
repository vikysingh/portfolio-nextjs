import React from "react"

import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react"

import Contenitore from "./index"
import config from "./config"

const { props, child } = config

test("Primo row del componente Contenitore dalla libreria", () => {
    render(<Contenitore primo={<h5>{props.primo}</h5>}
        titolo={props.titolo} paragrafo={props.paragrafo}
        footer={<h5>{props.footer}</h5>}
        sinistra={<div><h5>{props.sinistra}</h5></div>} />);
    
    //Elemento genitore, il primo row
    const primoContenitore = screen.getByTestId(child.primoRow["data-testid"])

    //Elemento figlio del primo row, un h5
    const primoTest = primoContenitore.firstElementChild

    //Sia in documento
    expect(primoTest).toBeInTheDocument(props.primo)
    //Sia un instance di HTMLHeadingElement
    expect(primoTest).toBeInstanceOf(HTMLHeadingElement)
    //Abbia quel testo contenuto
    expect(primoTest).toHaveTextContent(props.primo)

    
})

//Secondo row e primo col
test("Heading e paragrafo della prima colonna del secondo row, del componente Contenitore dalla libreria", () => {

    render(<Contenitore primo={<h5>{props.primo}</h5>}
        titolo={props.titolo} paragrafo={props.paragrafo}
        footer={<h5>{props.footer}</h5>}
        sinistra={<div><h5>{props.sinistra}</h5></div>} />);
    
    //Heading del secondo row
    const secondoRowTitolo = screen.getByTestId(child.secondoRow.child.primoCol.heading["data-testid"])

    //Paragrafo del secondo row
    const secondoRowParagrafo = screen.getByTestId(child.secondoRow.child.primoCol.paragrafo["data-testid"])

    expect(secondoRowTitolo).toBeInTheDocument()
    expect(secondoRowTitolo).toBeInstanceOf(HTMLHeadingElement)
    expect(secondoRowTitolo).toHaveTextContent(props.titolo)

    expect(secondoRowParagrafo).toBeInTheDocument()
    expect(secondoRowParagrafo).toBeInstanceOf(HTMLParagraphElement)
    expect(secondoRowParagrafo).toHaveTextContent(props.paragrafo)
})

//Footer
test("Footer della prima colonna del secondo row, del componente Contenitore dalla libreria", () => {
    render(<Contenitore primo={<h5>{props.primo}</h5>}
        titolo={props.titolo} paragrafo={props.paragrafo}
        footer={<h5>{props.footer}</h5>}
        sinistra={<div><h5>{props.sinistra}</h5></div>} />);

    const footer = screen.getByTestId(child.secondoRow.child.primoCol.footer["data-testid"])

    const footerFiglio = footer.firstChild
    
    expect(footer).toBeInTheDocument()
    expect(footer).toBeInstanceOf(HTMLDivElement)

    expect(footerFiglio).toBeInstanceOf(HTMLHeadingElement)
    expect(footerFiglio).toHaveTextContent(props.footer)
})

//Secondo row e secondo col
test("Div e H5 della seconda colonna del secondo row, del componente Contenitore dalla libreria", () => {

    render(<Contenitore primo={<h5>{props.primo}</h5>}
        titolo={props.titolo} paragrafo={props.paragrafo}
        footer={<h5>{props.footer}</h5>}
        sinistra={<div><h5>{props.sinistra}</h5></div>} />);

    //Contenitore stesso, seconda colonna del secondo row
    const contenitore = screen.getByTestId(child.secondoRow.child.secondoCol["data-testid"])

    //Figlio del contenitore
    const contenitoreDiv = contenitore.firstChild

    //Figlio del contenitoreDiv
    const contenitoreDivH5 = contenitoreDiv.firstChild

    expect(contenitore).toBeInTheDocument()

    expect(contenitoreDiv).toBeInstanceOf(HTMLDivElement)

    expect(contenitoreDivH5).toBeInstanceOf(HTMLHeadingElement)
    expect(contenitoreDivH5).toHaveTextContent(props.sinistra)
})