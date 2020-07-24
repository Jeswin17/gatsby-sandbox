const path = require('path')

//CREATE NODE NOT NEEDED FOR CONTENTFUL 
// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions

//     if(node.internal.type === 'MarkdownRemark') {

//     const slug = path.basename(node.fileAbsolutePath, '.md')
//     // console.log('@@@@@@@@@@@', slug)

//     createNodeField({
//         node,
//         name: 'slug',
//         value: slug
//     })
// } 

// }

module.exports.createPages = async( { graphql , actions } ) => {
const { createPage } = actions
//get path to template
//get markdown data
//create new page

const blogTemplate = path.resolve(`./src/templates/blog.js`)
const res = await graphql(`
query{
    allContentfulBlogPost {
        edges{
          node{
            slug
          }
        }
      }
}`)
// const res = await graphql(`
// query{
//     allMarkdownRemark{
//         edges{
//             node{
//                 fields{
//                     slug
//                 }
//             }
//         }
//     }
// }`)

// res.data.allMarkdownRemark.edges.forEach((edge) => {
//     createPage({
//         component : blogTemplate,
//         path : `/blog/${edge.node.fields.slug}`,
//         context : {
//             slug : edge.node.fields.slug //this is how we pass in the slug(page name) to the newly created page based on blog template , where this values is used in the STRING! variable.
//         }
//     })
// })
res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
        component : blogTemplate,
        path : `/blog/${edge.node.slug}`,
        context : {
            slug : edge.node.slug //this is how we pass in the slug(page name) to the newly created page based on blog template , where this values is used in the STRING! variable.
        }
    })
})

}