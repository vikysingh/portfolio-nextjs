import { Tasto } from "../Libreria"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi"

export const Footer = ({ clickDestro, clickSinistro }) => <>
<Tasto onClick={clickSinistro} primario  ><HiArrowLeft onClick={clickSinistro} /></Tasto>
<Tasto onClick={clickDestro} ><HiArrowRight /></Tasto>
</>

export const Sinistra = ({ src, imgRef }) => <img src={src} ref={imgRef} alt="Progetto" />