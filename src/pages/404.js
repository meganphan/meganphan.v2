import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby"
import styled from "@emotion/styled"
import Sad from "../components/icons/sad"

const Container = styled.div`
    text-align: center;
    height: 60vh;
    margin-top: 20vh;
    & h1{
      font-size: 80px;
    }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
    <h1>404</h1>
    <Sad />
    <p>Oops, it looks like the page you're trying to find is not available.</p>
    <Link to={"/"}>Go back to Home</Link>
    </Container>
  </Layout>
)

export default NotFoundPage
