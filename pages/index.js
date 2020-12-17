import { Tipografia } from "../Componenti/Libreria"
import { Container, Row, Col } from "react-grid-system"


export default function Home() {
  return (
    <Container>
      <Row>
        <Tipografia livello="paragrafo" >Row singolo</Tipografia>
      </Row>
      <Row>
        <Col>
          <Tipografia livello="h1" variato bold colore="rosso">Row 2 col1</Tipografia>
          <Tipografia livello="paragrafo" >Un po' di descrizione</Tipografia>

          <Row>
            Row 2 Row 3
          </Row>
        </Col>
        <Col>
          Row 2 col 3
        </Col>
      </Row>
    </Container>
  )
}