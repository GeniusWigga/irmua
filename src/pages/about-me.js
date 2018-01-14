import React from 'react'
import Markdown from "react-markdown"
import imprintData from './../../data/about_me.json';

const AboutMe = () => (
  <div className="site-container about-me">
    <Markdown source={imprintData.body}/>
  </div>
)

export default AboutMe
