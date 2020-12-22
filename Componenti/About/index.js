import { Tipografia, Tasto } from "../Libreria"
import { HiArrowDown } from "react-icons/hi"

export const Footer = ({ link }) => <Tasto>
<Tipografia livello="h4" bold ><a href={link} target="_blank" referrerPolicy="no-referrer" >Scarica CV</a> <HiArrowDown /> </Tipografia>
</Tasto>

export const Sinistra = ({imgSrc, imgAlt}) => <img src={imgSrc} alt={imgAlt} />