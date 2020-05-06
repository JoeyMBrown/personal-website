import React from "react"
import { Link } from 'gatsby'

//Obvious CSS classes available for:  <li>, <ul>, and <Link> (<a>) Easy to convert
//this to a CSS stylesheet and use classes rather than inline styling.

const Navbar = () => {
        return (
        <div style={{
            width: '100%',
            backgroundColor: '#333333'
        }}>
            <ul style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            listStyle: 'none'
        }}>
                <li style={{
                    flexGrow: '.01'
                }}>
                    <Link style={{
                        textDecoration: 'none',
                        color: 'white'
                    }} to="/">
                        Home
                    </Link>
                </li>
                <li style={{
                    flexGrow: '.01'
                }}>
                    <Link style={{
                        textDecoration: 'none',
                        color: 'white'
                    }} to="/">
                        Portfolio
                    </Link>
                </li>
                <li style={{
                    flexGrow: '.01',
                    color: 'white'
                }}>
                    <Link style={{
                        textDecoration: 'none',
                        color: 'white'
                    }} to="/">
                        Blog
                    </Link>
                </li>
                <li style={{
                    flexGrow: '.01'
                }}>
                    <Link style={{
                        textDecoration: 'none',
                        color: 'white'
                    }} to="/">
                        Resume 
                    </Link>
                </li>
            </ul>
        </div>
        )
}


export default Navbar