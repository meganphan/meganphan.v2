/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import IconHeart from "../components/icons/heart"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const GithubLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 15px;
  animation: 1s ease-in-out 0s 1 slideUp forwards; 
  opacity: 0;

  @keyframes slideUp{
    0% {
      transform: translateY(100%);
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

  & .faHeart{
    padding-left: 0.5em;
    padding-right 0.5em;
    color: red;
    fill: currentColor;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* eslint-disable */}
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            Built with <a className="faHeart"><IconHeart/></a> by
            {` `}
            <GithubLink
              href="https://github.com/meganphan"
              target="_blank"
              rel="nofollow noopener noreferrer">Megan Phan
            </GithubLink>
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
