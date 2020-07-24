import React from 'react'

import footerStyles from "./footer.module.scss"

import { Link , graphql, useStaticQuery  } from "gatsby"
const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site{
          siteMetadata{
            author
          }
        }
      }
    `)
    return (
        <div className={footerStyles.footer}>
            <p>Created By {data.site.siteMetadata.author} , ©2020</p>

        </div>
    )
}

export default Footer