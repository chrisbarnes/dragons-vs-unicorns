import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Unicorns" keywords={[`gatsby`, `application`, `react`]} />
    <h1>All about Unicorns.</h1>
    <ul>
        <li>Some unicorns have wings.</li>
        <li>There are lots of unicorns but not dragons.</li>
    </ul>
    <Link to="/dragons">Go to Dragons</Link>
  </Layout>
)

export default IndexPage
