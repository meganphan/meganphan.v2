import React from "react"
import {
  Link
} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout >
  <SEO title = "Home"/>
  <div style = "width:100%;height:0;padding-bottom:75%;position:relative;"> <iframe src = "https://giphy.com/embed/1XgIXQEzBu6ZWappVu"
  width = "100%"
  height = "100%"
  style = "position:absolute"
  frameBorder = "0"
  class = "giphy-embed"
  allowFullScreen> </iframe></div>
  
  </Layout>
)

export default IndexPage