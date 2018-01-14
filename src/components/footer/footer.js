import React from 'react'
import Markdown from "react-markdown"
import './footer.css'
import footerData from "./../../../data/footer.json";

const Footer = () => {
  return (
    <footer className={`footer`}>
      <Markdown source={footerData.footer_text}/>
    </footer>
  )
}

export default Footer
