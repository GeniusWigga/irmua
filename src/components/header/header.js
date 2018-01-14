import Link from 'gatsby-link'
import React from 'react'
import PropTypes from 'prop-types'
import { isEqual, chain } from 'lodash'
import './header.css'
import logo from './../../../static/img/logo.svg'
import headerData from "./../../../data/header.json";

const Header = ({ toggleSubMenu, activeSubmenuClass, pathname }) => {

  const links = headerData.navigation_links;

  return (
    <header className={`header ${activeSubmenuClass}`}>
      <div className="logo">
        <img src={logo} />
      </div>
      <div onClick={toggleSubMenu} className="burger">
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
      <nav id="menu" className="menu">
        <ul className="menu_container">
          {links.map(link => {
            const path = chain(pathname)
              .split('/')
              .compact()
              .value()
            const linkTo = chain(link.link)
              .split('/')
              .compact()
              .value()

            let isActive = isEqual(path, linkTo)

            return (
              <li className={isActive ? 'active' : null} key={link.link}>
                <Link to={link.link}>{link.link_name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  toggleSubMenu: PropTypes.func.isRequired,
  activeSubmenuClass: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
}

export default Header
