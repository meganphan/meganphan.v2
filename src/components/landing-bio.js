import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby"


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

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`
const Button = styled.button`
  outline: none;
  border: none;
  animation: right 1s infinite alternate;
  
  @keyframes right{
    from{
      transform: translateX(0px);
    }to{
      transform: translateX(-15px);
    }
  }
  & .faArrow:hover{
    cursor: pointer;
    color: #949494;
  }
`
const SocialMediaLink = styled.a`
  position: relative;
  margin-right: 1em;
  &:hover{
    color: #949494;
  }
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
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>Front-end Web Developer</Description>
          <SocialMediaLink href="https://www.linkedin.com/in/hoangphan79/" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></SocialMediaLink>
          <SocialMediaLink href="https://github.com/meganphan" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></SocialMediaLink>
          <SocialMediaLink href="https://www.instagram.com/meganhphan/" target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></SocialMediaLink>
          <br></br>
          <br></br>
          <Button>
          <Link to="/about"><FontAwesomeIcon className="faArrow" icon={faAngleDoubleRight} style={{ 
            fontSize: '40px'
            }} /></Link>
          </Button>
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
