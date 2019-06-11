import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import {Link} from "gatsby"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import IconHeart from "../components/icons/heart"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;

  & .faHeart{
      color: #4d1979;
      margin-left: 0.5em;
      fill: currentColor;
  }
  & a, span{
    color: rgb(23, 151, 151);
    font-weight: bold;
    text-decoration: none;
  }
    @media screen and (max-width: 575px){
       & h1{
         font-size: 30px;
       }
    }
`

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Content>
        {/* eslint-disable */}
        <h1>Annyeonghaseyo!</h1>
        {/* <p>I am Hoang Phan, and also go by Megan. I am a forth-year Computer Science student at <a href="https://computerscience.tcu.edu/" target="_blank">Texas Christian University.</a></p> */}

    </Content>
  </Layout>
)

export default About