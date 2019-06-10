import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'


const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

// const Description = styled.p`
//   padding: 0;
//   margin-bottom: 1rem;
//   font-size: 1.4rem;
// `

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          {/* <NameHeader>{data.site.siteMetadata.title}</NameHeader> */}
          {/* <Description>Front-end Web Developer</Description> */}
          {/* <FontAwesomeIcon icon={faAngleDoubleRight} style={{ 
            fontSize: '40px'
            }} /> */}
            <NameHeader>Still in Development</NameHeader>
            <FontAwesomeIcon icon={faTools}></FontAwesomeIcon>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
}


export default LandingBio
