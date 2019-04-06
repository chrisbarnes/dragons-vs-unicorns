import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hey Friends. Welcome to Dragons vs. Unicorns.</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticQuery
        query={graphql`
          query {
            unicornImage: file(relativePath: { eq: "unicorn.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            },
            dragonImage: file(relativePath: { eq: "dragon.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <div>
            <Img fluid={data.unicornImage.childImageSharp.fluid} />
            <Img fluid={data.dragonImage.childImageSharp.fluid} />
          </div>
        )}
      />
    </div>
  </Layout>
)

export default IndexPage
