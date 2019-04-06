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
            <Img fixed={data.unicornImage.childImageSharp.fixed} />
            <span class="vs">VS</span>
            <Img fixed={data.dragonImage.childImageSharp.fixed} />
          </>
        )}
      />
    </div>
  </Layout>
)

export default IndexPage
