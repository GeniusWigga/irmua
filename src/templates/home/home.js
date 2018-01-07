import React, { Component } from 'react'
import 'swiper/dist/css/swiper.min.css'
import './home.css'
import Script from 'react-load-script'

export default class Home extends Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const swiper = require('../../scripts/swiper')
      swiper.mySwiper()
    }
  }

  render() {
    const { pathContext } = this.props

    const { image } = pathContext

    return (
      <div className="home">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {image.map((image, index) => (
              <div key={index} className="swiper-slide">
                <img src={image.image} alt={image.alt} />
              </div>
            ))}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    )
  }
}
