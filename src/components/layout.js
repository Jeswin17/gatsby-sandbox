import React, { Component } from 'react'

import Footer from '../components/footer'
import Header from '../components/Header'
import layoutStyles from '../components/layout.module.scss'
const Layout = (props) => {

    return (
         <div className={layoutStyles.container}>
             <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
 
            <Footer />

         </div>
    )
}

export default Layout