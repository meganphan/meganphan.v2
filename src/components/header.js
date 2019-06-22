import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

const NavLink = styled(Link)`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  &:nth-child(1){
    animation: 1s ease-in-out 0s 1 slideDown;  
  }
  &:nth-child(2){
    animation: 1.2s ease-in-out 0s 1 slideDown;  
  }
  &:nth-child(3){
    animation: 1.4s ease-in-out 0s 1 slideDown;  
  }
  &:nth-child(4){
    animation: 1.6s ease-in-out 0s 1 slideDown;  
  }
  &:nth-child(5){
    animation: 1.8s ease-in-out 0s 1 slideDown;  
  }

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(23, 151, 151);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media screen and (max-width: 575px){
    font-size: 15px;
  }
  @media screen and (max-width: 450px){
    font-size: 12px;
  }
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
  animation: 1s ease-in-out 0s 1 slideDown;  

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
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/">Home</HomeLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </p>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
