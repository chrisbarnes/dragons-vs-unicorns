import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `dragons`, `unicorns`]} />
    <h1>Hey Friends. Welcome to Dragons vs. Unicorns.</h1>
    <div className="dragon-unicorn-images">
      <StaticQuery
        query={graphql`
          query {
            unicornImage: file(relativePath: { eq: "unicorn.png" }) {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            },
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
          <>
            <Img className="dragon" fixed={data.dragonImage.childImageSharp.fixed} />
            <span className="vs">VS</span>
            <Img className="unicorn" fixed={data.unicornImage.childImageSharp.fixed} />
          </>
        )}
      />
    </div>
  </Layout>
)

export default IndexPage
