import React from "react"
import { Link } from 'gatsby'
import "./Navbar.css";

const Navbar = () => {
        return (
        <div className="Navbar">
            <ul className="LinkList">
                <li>
                    <Link className="IndividualLinks active" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="IndividualLinks" to="/">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link className="IndividualLinks" to="/">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link className="IndividualLinks" to="/">
                        Resume 
                    </Link>
                </li>
            </ul>
        </div>
        )
}


export default Navbar