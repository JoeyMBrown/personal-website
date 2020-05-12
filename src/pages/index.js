import React from "react"
import Navbar from '../components/Navbar'
import Bio from '../components/Bio'

const Layout = () => {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'arial',
            border: '1px solid black'
        }}>
            <Navbar />
            <Bio />
        </div>
    )
}

export default Layout
