import Link from 'gatsby-link'
import React from 'react'
import "./footer.css";

const Footer = () => {

  return (
    <footer className={`footer`}>
      © Copyright - 2017 Ina Rudi - All rights reserved <Link to="/imprint">Impressum</Link>
    </footer>
  )
};

export default Footer;