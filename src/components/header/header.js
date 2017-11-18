import Link from 'gatsby-link'
import React from 'react'
import PropTypes from 'prop-types'
import "./header.css";
import logo from "./../../../static/img/logo.svg";

const Header = ({links, toggleSubMenu, activeSubmenuClass, pathname}) => {

  console.log("pathname: ", pathname);

  return (
    <header className={`header ${activeSubmenuClass}`}>
      <div className="logo"><img src={logo}/></div>
      <div onClick={toggleSubMenu} className="burger">
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
      <nav id="menu" className="menu">
        <ul className="menu_container">
          {links.map((link) => {
            return (
              <li className={pathname === link.to ? "active" : null} key={link.to}>
                <Link to={link.to}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
};

Header.propTypes = {
  toggleSubMenu: PropTypes.func.isRequired,
  activeSubmenuClass: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Header;