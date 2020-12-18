import { Container, Col, Row } from "react-grid-system"
import { HiMenuAlt4, HiArrowNarrowDown } from "react-icons/hi"
import { Tipografia, Tasto } from "../Componenti/Libreria"

import Navbar from "../Componenti/Navbar"

const about = () => {
    return (
        <Container>
            <Row>
                <Navbar />
            </Row>
            <Row>
                <Row>
                    <Col>
                        <Tipografia livello="h2" variato bold colore="rosso" > Vikram Singh </Tipografia>
                        <Tipografia livello="paragrafo"  >
                            Testo descrittivo va scritto qui, probabilmente meglio se abbastanza lungo.
                            Oltre a questo anche una lunga ma lunga proprio lunga descrizione di about,
                            oh yeah!
                        </Tipografia>
                    </Col>
                    <Col>
                        <img src="https://vikramsingh.netlify.app/src/assets/profile.jpeg"
                        alt="Foto profilo" />
                    </Col>
                </Row>
                <Row>
                    <Tasto> <Tipografia livello="h4" bold >Scarica CV <HiArrowNarrowDown /></Tipografia> </Tasto>
                </Row>
            </Row>
        </Container>
    );
}

export default about;