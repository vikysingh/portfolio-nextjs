import { Tipografia, Tasto } from "../Libreria"
import { HiArrowDown } from "react-icons/hi"

const { Heading4 } = Tipografia

export const Footer = ({ link }) => <Tasto>
<Heading4 bold >
    <a href={link} target="_blank" referrerPolicy="no-referrer" >Scarica CV</a> <HiArrowDown />
    </Heading4>
</Tasto>

export const Sinistra = ({imgSrc, imgAlt}) => <img src={imgSrc} alt={imgAlt} />