import React from 'react'
import Header from '../Header/Header'
import Router from '../../routers/Router'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <div>
        <Router/>
   </div>
    <Footer/>
    </>
  )
}

export default Layout