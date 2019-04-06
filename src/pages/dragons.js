import React from "react"
import { StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Dragons" keywords={[`gatsby`, `application`, `react`]} />
    <h1>All about Dragons</h1>
    <StaticQuery
        query={graphql`
          query {
            dragonImage: file(relativePath: { eq: "dragon.png" }) {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
            <Img fixed={data.dragonImage.childImageSharp.fixed} />
        )}
      />
    <ul>
        <li>Some dragons breath fire some dragons breath ice.</li>
        <li>Some dragons are nice some dragons are mean.</li>
        <li>Dragons can fly too</li>
    </ul>
    <Link to="/unicorns">Go to Unicorns</Link>
  </Layout>
)

export default IndexPage
