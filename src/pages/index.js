import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
    <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/1XgIXQEzBu6ZWappVu" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/gif-this-hammer-under-construction-hammered-1XgIXQEzBu6ZWappVu">via GIPHY</a></p>
    <p>Check out the previous website <a href="https://meganphan.github.io/meganphan.v1/">here</a></p>
    </div>
  </Layout>
)

export default IndexPage
