import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Dragons" keywords={[`gatsby`, `application`, `react`]} />
    <h1>All about Dragons</h1>
    <ul>
        <li>Some dragons breath fire some dragons breath ice.</li>
        <li>Some dragons are nice some dragons are mean.</li>
    </ul>
    <Link to="/unicorns">Go to Unicorns</Link>
  </Layout>
)

export default IndexPage
