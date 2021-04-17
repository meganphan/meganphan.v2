import React from "react"
import styled from "@emotion/styled"
import Header from "../components/Header"
import SocialMedia from "../components/SocialMedia"

const Container = styled.div`
  margin: 0 auto;
  top: 0;
  min-height: 1200px;
`

const Heading = styled.div`
  padding-top: 8em;
`

const BigTitle = styled.h1`
  font-family: 'Abril Fatface', san-serif;
  color: #B2D8D8;
  font-size: 7rem;
  padding-left: 40px;
`

const SmallTitle = styled.h3`
  font-family: 'Andale Mono', san-serif;
  color: #008080;
  letter-spacing: 1.5px;
  padding-left: 40px;
`

const LandingBio = () => {
  return (
      <Container id="top">
        <Header />
        <Heading>
          <BigTitle>hi, i am Megan.</BigTitle>
          <SmallTitle>a not so average software engineer</SmallTitle>
        </Heading>
        <SocialMedia/>
      </Container>
    )
  }

export default LandingBio
