import { Tasto, Tipografia } from "../Libreria"
import { HiMenuAlt4 } from "react-icons/hi"

const NavIcon = () => {
    return (
        <Tasto style={{ zIndex: 20, position: "absolute", right: 20, top: 20 }} >
            <Tipografia livello="h3" colore="chiaro">
                <HiMenuAlt4 />
            </Tipografia>
        </Tasto>
    );
}

export default NavIcon;