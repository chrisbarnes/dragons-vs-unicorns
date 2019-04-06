import React from "react"
import { StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Unicorns" keywords={[`gatsby`, `application`, `react`]} />
    <h1>All about Unicorns.</h1>
    <StaticQuery
        query={graphql`
          query {
            unicornImage: file(relativePath: { eq: "unicorn.png" }) {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
            <Img fixed={data.unicornImage.childImageSharp.fixed} />
        )}
      />
    <ul>
        <li>Some unicorns have wings.</li>
        <li>There are lots of unicorns but not dragons.</li>
        <li>Unicorns have magical horns</li>
    </ul>
    <Link to="/dragons">Go to Dragons</Link>
  </Layout>
)

export default IndexPage
