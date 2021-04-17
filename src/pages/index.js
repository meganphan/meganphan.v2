import React from "react"
import LandingBio from "../sections/landing-bio"
import AboutMe from "../sections/About"
import Projects from "../sections/Projects"
import Blogs from "../sections/Blogs"
import Contact from "../sections/Contact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["home","gatsby", "application", "react", "megan phan", "hoang phan", "frontend", "web developer", "texas christian university", "software engineer", "portfolio"]} />
    <LandingBio />
    <AboutMe/>
    <Projects/>
    <Blogs/>
    <Contact/>
  </Layout>
)

export default IndexPage


