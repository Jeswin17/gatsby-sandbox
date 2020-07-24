import React from 'react';
import { Link } from "gatsby"

import Header from '../components/Header'
import Footer from '../components/footer'
import Layout from '../components/layout'

import Head from '../components/head'
const AboutPage = () => {

    return (
        <Layout>
            
        <Head title="About"/>
        <h1>About Me </h1>
        <p>Connect with me <Link to="/contact" >Contact Us</Link></p>
        </Layout>
    )
}

export default AboutPage
