import React from 'react'

import { Link , graphql, useStaticQuery  } from "gatsby"
import headerStyles from "./header.module.scss"



const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        site{
          siteMetadata{
            title
          }
        }
      }
    `)

    return (
        
           <header className={headerStyles.header}> 
               <h1>
    <Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link>
                   
               </h1> 
            <h2 className={headerStyles.navList}>
             <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link> 
             <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link> 
            <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem}to="/contact">Contact Me</Link>  
            <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem}to="/blog">Blog</Link>
            </h2>
            
            </header>
    )
}

export default Header