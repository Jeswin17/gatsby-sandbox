import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

import Head from '../components/head'

// export const query = graphql`
//   query($slug: String!) { 
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
//CONTENTFUL :

export const query = graphql`
  query($slug: String!) { 
    contentfulBlogPost(slug: {eq: $slug}){
      title
      publishedDate
      body{
        json
      }
    }
  }
`
//BIG ISSUE : above graphql string variable comes in from gatsby-node.js config file as slug value from context object
// const Blog = (props) =>{

//     return (
//         <Layout><div>
//         <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//         <p>{props.data.markdownRemark.frontmatter.date}</p>
//         <div dangerouslySetInnerHTML={{ __html:props.data.markdownRemark.html }} />
//       </div>
//         </Layout>
//     )
// }
const Blog = (props) =>{

  return (
      <Layout><div>
        <Head title={props.data.contentfulBlogPost.title} />
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
    </div>
      </Layout>
  )
}


export default Blog

// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// export default function BlogPost({ data }) {
//   const post = data.markdownRemark
//   return (
//     <Layout>
//       <div>
//         <h1>{post.frontmatter.title}</h1>
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//       </div>
//     </Layout>
//   )
// }
// export const query = await graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
// //         title
// //       }
// //     }
// //   }
// `