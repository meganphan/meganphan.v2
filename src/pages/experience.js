import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Wrap = styled.div`
    padding: 10px 5px;
    margin: 0 auto;
`

const List = styled.ol`
  position: relative;
  list-style-type: none;
  padding-bottom: 5rem;
  & > *:not(:last-child) {
  margin-bottom: 5rem;
  }
  &::before {
  content: 'My journey of becoming a web developer';
  position: relative;
  z-index: 1;
  display: inline-block;
  background-color: rgb(23, 151, 151);
  color: #fff;
  padding: 5px 20px;
  margin-bottom: 5rem;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
@media only screen and (min-width: 768px) {
  &::before {
    border-radius: 25px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }
}
  &::after {
  content: ' ';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 2px;
  background-color: rgb(23, 151, 151);
  opacity: 0.15;
}
@media only screen and (min-width: 768px) {
  &::after {
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }
}
  & time {
  display: inline-block;
  font-weight: 700;
  color: rgb(23, 151, 151);
}
`

const Entry = styled.li`
  position: relative;

  & > *:not(:last-child) {
  margin-bottom: 2rem;
}
@media only screen and (max-width: 767px) {
  &{
    padding-left: 5rem;
  }
  & time{
    opactity: 1;
    animation: 1s ease-in-out 0s 1 slideInFromRight;
  }
  & h4{
    opacity: 1;
    animation: 1.2s ease-in-out 0s 1 slideInFromRight;
  }
  & ul{
    opacity: 1;
    animation: 1.4s ease-in-out 0s 1 slideInFromRight;
  }
}
@media only screen and (min-width: 768px) {
  & {
    width: 50%;
  }

  &:nth-of-type(odd) {
    text-align: right;
    padding-right: 5rem;
    margin-right: auto;
  }
  &:nth-of-type(odd) time{
      opacity: 1;
      animation: 1s ease-in-out 0s 1 slideInFromLeft;
  }
  &:nth-of-type(odd) h4{
    opacity: 1;
    animation: 1.2s ease-in-out 0s 1 slideInFromLeft;
  }
  &:nth-of-type(odd) ul{
    opacity: 1;
    animation: 1.4s ease-in-out 0s 1 slideInFromLeft;
  }
  &:nth-of-type(odd)::before {
    left: auto;
    right: -8px;
  }
  &:nth-of-type(odd)::after {
    left: auto;
    right: 0;
  }
  &:nth-of-type(even) {
    padding-left: 5rem;
    margin-left: auto;
  }
  &:nth-of-type(even) time{
    opacity: 1;
    animation: 1s ease-in-out 0s 1 slideInFromRight;
  }
  &:nth-of-type(even) h4{
    opacity: 1;
    animation: 1.2s ease-in-out 0s 1 slideInFromRight;
  }
  &:nth-of-type(even) ul{
    opacity: 1;
    animation: 1.4s ease-in-out 0s 1 slideInFromRight;
  }
  }
&::before, &::after {
  content: ' ';
  position: absolute;
  margin-top: 1rem;
}
&::before {
  width: 16px;
  height: 16px;
  top: 1px;
  left: -8px;
  z-index: 2;
  background-color: #fff;
  border: 3px solid rgb(23, 151, 151);
  border-radius: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}
&::after {
  width: 35px;
  height: 2px;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgb(23, 151, 151);
}
`

const Job = styled.h4`
  font-size: 20px;
  opactity: 1;

  & em{
    font-size: 15px;
    color: rgb(23, 151, 151);
    margin-left: 5px;
  }
  @media only screen and (max-width: 767px) {
    &{
      animation: 1s ease-in-out 0s 1 slideInFromRight forwards;
      animation-delay: 0.2s;
    }
  }
`

const Desc = styled.ul`
  font-size: 15px;
  opactity: 1;

  @media only screen and (max-width: 767px) {
    &{
      animation: 1s ease-in-out 0s 1 slideInFromRight forwards;
      animation-delay: 0.4s;
    }
  }
`
const Experience = () => (
  <Layout>
    <SEO title="Experience" keywords={["gatsby", "application", "react", "megan phan", "hoang phan", "frontend", "web developer", "texas christian university", "software engineer", "portfolio"]} />
    <Wrap>
  <List>
    <Entry>
      <time>
        Summer 2017
      </time>
      <Job>
        IT Intern 
        <em> @ Alabama Public Television</em>
      </Job>
      <Desc>
        <li>Assisted in maintaining hardware and software applications in employees' computers.</li>
        <li>Worked closely with other interns and IT director to set up a new computer system for Education department.</li>
        <li>Assisted in troubleshooting technical issues.</li>
      </Desc>
    </Entry>
    <Entry>
      <time>
        September 2018 - May 2019
      </time>
      <Job>
        Computer Lab Assistant
        <em> @ Texas Christian University</em>
      </Job>
       <Desc>
       <li>Provided supports for students to help solve their Java school projects.</li>
       <li>Assisted in maintaining computer lab operations and activities.</li> 
       <li>Troubleshot malfunctions of hardware and software applications.</li>
      </Desc>
    </Entry>
    <Entry>
      <time>
        January 2019 - Present
      </time>
      <Job>
      Undergraduate Research Assistant
      <em> @ Texas Christian University</em>
      </Job>
      <Desc>
        <li>Designing and developing an education platform for learning security by creating eureka experiences.</li>
        <li>Working with variety of different languages, frameworks and content management systems such as Python Flask, MongoDB, React, etc.</li>
        <li>Working closely with another developer and professor to implement a full stack project.</li>
      </Desc>
    </Entry>

    <Entry>
      <time>
        May 2019 - Present
      </time>
      <Job>
      Web Development Intern
      <em> @ DesignPlex Biomedical LLC</em>
      </Job>
      <Desc>
        <li>Redesigning and improving the content of the web pages.</li>
        <li>Working with PHP, WordPress, HTML, CSS, and JavaScript.</li>
        <li>Assisting in marketing and promotional activities (e.g. social media, SEO)</li>
      </Desc>
    </Entry>
  </List>
</Wrap>

  </Layout>
)

export default Experience
