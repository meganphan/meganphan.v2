import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;

  & .faHeart{
      color: #4d1979;
      margin-left: 0.5em;
  }
`

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Content>
        {/* eslint-disable */}
        <h1>Annyeonghaseyo!</h1>
        {/* <p>I am truly happy that you found my website. You may find this site a little bit monochromatic but you'll get some colors as you get to know me better.</p>
        <ol>
            <li><strong>Nationality: </strong>Vietnamese <span role="img">🇻🇳</span></li>
            <li><strong>School: </strong>Texas Christian University, Go Frogs! 
            <FontAwesomeIcon className="faHeart" icon={faHeart}></FontAwesomeIcon></li>
            <li><strong>Zodiac sign: </strong> Virgo</li>
            <li><strong>Languages: </strong> Vietnamese (native), English, Korean</li> 
        </ol>*/}
    </Content>
  </Layout>
)

export default About