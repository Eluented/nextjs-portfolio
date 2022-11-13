import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <div className="container">
                {children}
            </div>

        </>
    )
}

export default Layout