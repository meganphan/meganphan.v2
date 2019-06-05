import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Video
        videoSrcURL="https://giphy.com/gifs/1XgIXQEzBu6ZWappVu/html5"
        videoTitle="Under Construction"
      />
  </Layout>
)

export default NotFoundPage
