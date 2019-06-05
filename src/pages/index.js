import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Video from "../components/video"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Hi, my name is</p>
    <h1>Megan Phan.</h1>
    <p>I am currently building this website.</p>
    <p>Check out the previous website <a href="https://meganphan.github.io/meganphan.v1/">here</a></p>
    <Video
          videoSrcURL={"https://giphy.com/gifs/1XgIXQEzBu6ZWappVu/html5"}
          videoTitle={"Under Construction"}
        />
  </Layout>
)

export default IndexPage
