import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react", "megan phan", "hoang phan", "frontend", "web developer", "texas christian university", "software engineer", "portfolio"]} />
    <LandingBio />
  </Layout>
)

export default IndexPage


