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
    }
    & h1{
      text-align: center;
      animation: 
    }

    & h1:after{
      content: "Hello!";
      display: none;
    }
`
const Avatar = styled.img`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(0%) contrast(1);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;x
`;

const About = () => (
  <Layout>
    <SEO title="About" />
    <Content>
        {/* eslint-disable */}
        <FlexContainer>
        <Avatar src={avatar} alt="Logo" />
        </FlexContainer>
        <ContentContainer>
        <h1>Annyeonghaseyo!</h1>
        <p>I am Hoang, but call me Megan because "Hoang Phan" sounds like a 18-year-old boy, which I am not. </p>
        <p>When I am not in front of a computer, I'd play with my cat Michio, cook some delicious Vietnamese dishes, decorate my room, or spend the whole afternoon cleaning my apartment.</p>
        </ContentContainer>
    </Content>
  </Layout>
)


export default About