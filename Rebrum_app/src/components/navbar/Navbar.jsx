
import { FiAlignJustify } from "react-icons/fi";

import './navbar.css'

function Navbar(props) {
    return (
        <nav>
            <div className="navLogo">
                <h1>Rebrum</h1>
            </div>
            <div className="navAdmin">
                <FiAlignJustify />
            </div>
        </nav>
    )
}

export default Navbar