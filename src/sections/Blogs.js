import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  margin: 0 auto;
  top: 0;
  min-height: 1200px;
`

const Heading = styled.div`
  padding-top: 15vh;
`

const BigTitle = styled.h1`
  font-family: 'Abril Fatface', san-serif;
  color: #B2D8D8;
  font-size: 100px;
  padding-left: 40px;
`

const SmallTitle = styled.h4`
  font-family: 'Andale Mono', san-serif;
  font-size: 30px;
  color: #008080;
  letter-spacing: 1.5px;
  padding-left: 40px;
`

const Blogs = () => {
  return (
      <Container id="blogs">
        <Heading>
          <BigTitle>blogs</BigTitle>
          <SmallTitle>a not so average software engineer</SmallTitle>
        </Heading>
      </Container>
    )
}

export default Blogs
