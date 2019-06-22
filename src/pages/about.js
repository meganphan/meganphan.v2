import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import avatar from "../images/avatar.jpg"

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
const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`
const ContentContainer = styled.div`
    & p{
      text-align: justify;
      animation: 1s ease-in-out 0s 1 slideInFromLeft;  
      opacity: 1;
    }
    & h1{
      text-align: center;
      animation: 1s ease-in-out 0s 1 slideInFromRight;  
      opacity: 1;
    }

    & h1:hover{
      &::before{
        content: '<'
      }
      &::after{
        content: '/>'
      }
      color: rgb(23, 151, 151);
    }

    & h3{
      text-align: center;
      animation: 1s ease-in-out 0s 1 slideInFromRight;  
      opacity: 1;
    }
`
const Avatar = styled.img`
  position: relative;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  animation: 1s ease-in-out 0s 1 slideDown;  
  opacity: 1;

  @keyframes slideDown{
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    50%{
      opacity: 0.5;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    50%{
      opacity: 0.5;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    50%{
      opacity: 0.5;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const About = () => (
  <Layout>
    <SEO title="About" keywords={["about","gatsby", "application", "react", "megan phan", "hoang phan", "frontend", "web developer", "texas christian university", "software engineer", "portfolio"]} />
    <Content>
        {/* eslint-disable */}
        <FlexContainer>
        <Avatar src={avatar} alt="Logo" />
        </FlexContainer>
        <ContentContainer>
        <h1>Annyeonghaseyo!</h1>
        <p>I am Hoang but you can call me Megan. I am currently a fourth-year Computer Science student at Texas Christian University.</p>
        <p>Summer 2017, I started my first personal project, which was the first version of my personal website.
          I looked everywhere on the Internet to find web development courses/tutorials, and taught myself all the basic of building a static website.
          From simple html pages to more fancy, attractive CSS features, and then some animations and effects. I learned everything step-by-step and thoroughly.
          Since then, I have enjoyed building high quality responsive websites for me and others.
        </p>
        <h3>Learn.Create.Contribute</h3>
        </ContentContainer>
    </Content>
  </Layout>
)


export default About