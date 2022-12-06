import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <div className="layout">
        <Header/>
        <Navbar />
        <Footer />
    </div>
  )
}

export default Layout