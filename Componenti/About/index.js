import { Tipografia, Tasto } from "../Libreria"
import { HiArrowDown } from "react-icons/hi"
import PropTypes from 'prop-types'

const { Heading4 } = Tipografia

export const Footer = ({ link }) => <Tasto>
<Heading4 bold >
    <a href={link} target="_blank" referrerPolicy="no-referrer" >Scarica CV</a> <HiArrowDown />
    </Heading4>
</Tasto>

export const Sinistra = ({imgSrc, imgAlt}) => <img src={imgSrc} alt={imgAlt} />

export default {
    Footer,
    Sinistra
}

Footer.propTypes = {
    link: PropTypes.string.isRequired
}

Footer.defaultProps = {
    link: "#"
}

Sinistra.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string
}

Sinistra.defaultProps = {
    imgSrc: "",
    imgAlt: "Immagine"
}