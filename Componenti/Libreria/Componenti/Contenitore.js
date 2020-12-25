import styled from "styled-components"
import Tipografia from "./Tipografia"
import {motion} from "framer-motion"
import PropTypes from 'prop-types'

const { Heading2, Paragrafo } = Tipografia

//Intero contenitore per il grid
const Section = styled(motion.section)`
width: 100vw;
height: auto;

display: grid;
grid-template-rows: 15% 85%;
`
//Primo row
const PrimoRow = styled.div`
width: 100%;
height: auto;
grid-row: 1 / 2;
`
//Secondo row
const SecondoRow = styled(PrimoRow)`
grid-row: 2 / -1;

display: grid;
grid-template-columns: repeat(2, 50%);

& .secondo_row__primo_col {
    grid-column: 1 / 2;
    padding-left: 25%;
}

& .secondo_row__primo_col p {
    width: 70%;
    margin: 5%;
}

& .secondo_row__secondo_col {
    grid-column: 2 / -1;
    padding-top: 10%;
}

& img{
    width: 60%;
    height: auto;
}

@media (max-width: 600px) {
    & {
        grid-template-columns: 100%;
        padding-left: 10%;
    }

    & .secondo_row__primo_col, & .secondo_row__secondo_col {
        grid-column: 1 / -1;
        padding: 20px 0%;
    }

    & h2 {
        width: 80%;
    }

    & img {
        width: 90%;
        margin-bottom: 10%;
    }

}
`

const pageAnimationStyle = {
    exit: {
        opacity: 0
    },
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
}

const Contenitore = ({ primo, titolo, paragrafo, footer,sinistra }) => {
    
    return (
            <Section exit={{opacity: pageAnimationStyle.exit.opacity}} 
            initial={{ opacity: pageAnimationStyle.initial.opacity }}
            animate={{ opacity: pageAnimationStyle.animate.opacity }}>
                <PrimoRow> {primo} </PrimoRow>
                <SecondoRow>
                    <motion.div className="secondo_row__primo_col" 
                    initial={{opacity: 0, x: -120}} animate={{opacity: 1, x: 0, transition: {
                        duration: .6
                    }}}
                    >
                        <Heading2 livello="h2" colore="rosso" variato bold>
                            {titolo}
                        </Heading2>
                        <Paragrafo livello="paragrafo" >
                            {paragrafo}
                        </Paragrafo>
                        <div>
                            {footer}
                        </div>
                    </motion.div >
                    <motion.div className="secondo_row__secondo_col" 
                    initial={{opacity: 0, x: 220}} animate={{opacity: 1, x: 0, transition: {
                        duration: .6
                    }}}
                    >
                        {sinistra}
                    </motion.div>
                </SecondoRow>
            </Section>
    );
}

Contenitore.propTypes = {
    primo: PropTypes.element,
    titolo: PropTypes.string.isRequired,
    paragrafo: PropTypes.string.isRequired,
    footer: PropTypes.element,
    sinistra: PropTypes.element.isRequired
}

Contenitore.defaultProps = {
    primo: <></>,
    titolo: "",
    paragrafo: "",
    footer: <></>,
    sinistra: <></>
}

export default Contenitore;