import Link from 'gatsby-link'
import React from 'react'
import PropTypes from 'prop-types'
import { isEqual, chain } from 'lodash'
import './header.css'
import logo from './../../../static/img/logo.svg'

const Header = ({ links, toggleSubMenu, activeSubmenuClass, pathname }) => {
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
            const linkTo = chain(link.to)
              .split('/')
              .compact()
              .value()

            let isActive = isEqual(path, linkTo)

            return (
              <li className={isActive ? 'active' : null} key={link.to}>
                <Link to={link.to}>{link.name}</Link>
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
  links: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
}

export default Header
