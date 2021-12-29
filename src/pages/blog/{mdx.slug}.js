    import * as React from 'react'
    import { graphql } from 'gatsby'
    import { MDXRenderer } from 'gatsby-plugin-mdx'
    import Layout from '../../components/layout'

    const BlogPost = ({ data }) => {
      const pageDescription = `Post du blog Indira Music intitulé ${data.mdx.frontmatter.title}`  
      return (
            <Layout pageTitle={data.mdx.frontmatter.title} description={pageDescription}>
                <p>{data.mdx.frontmatter.date}</p>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </Layout>
        )
    }

    export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
          frontmatter {
            date
            title
          }
          body
        }
      }
    `

    export default BlogPost