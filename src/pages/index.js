import React from "react"
import { Link } from "gatsby"
import Head from '../components/head'

import BlogPage from './blog'
import Footer from '../components/footer'
import Header from '../components/Header'
import Styles from '../styles/index.scss'
import Layout from '../components/Layout'
const IndexPage = () => {

return (
  <Layout>
    <Head title="Home"/>

<h2>sup </h2>
<p>Need a developer ?<Link to="/contact">Contact me</Link></p>

  </Layout>
)


}

export default IndexPage