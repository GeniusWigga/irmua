import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './../components/header/header';
import Footer from './../components/footer/footer';

import './../../static/font-awesome-4.7.0/css/font-awesome.css'
import './index.css'

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.func
  };

  links = [
    {
      name: "Home",
      to: "/"
    },
    {
      name: "Leistungen",
      to: "/services"
    },
    {
      name: "Portfolio",
      to: "/portfolio"
    },
    {
      name: "Zu meiner Person",
      to: "/about-me"
    },
  ];

  constructor(props) {
    super(props);

    this.state = {
      isMobileSubmenuOpen: false
    }
  }

  toggleMobileSubmenu = () => {
    this.setState({
      isMobileSubmenuOpen: !this.state.isMobileSubmenuOpen
    })
  };

  render() {
    const {children, history} = this.props;
    const {isMobileSubmenuOpen} = this.state;

    const activeSubmenuClass = isMobileSubmenuOpen ? "active" : "";

    return (
      <div>
        <Helmet
          title="Hair and Make up Artist Ina Rudi"
        />
        <Header
          pathname={history.location.pathname}
          links={this.links}
          activeSubmenuClass={activeSubmenuClass}
          toggleSubMenu={this.toggleMobileSubmenu}
        />
        <div className="layout">
          {children()}
        </div>
        <Footer />
      </div>
    );
  }
}
