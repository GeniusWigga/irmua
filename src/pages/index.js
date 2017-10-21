import React, {Component} from 'react'
import "swiper/dist/css/swiper.min.css";
import "./index.css"
import slide1 from "./../../static/img/foto1.jpg";
import slide2 from "./../../static/img/foto2.jpg";
import slide3 from "./../../static/img/foto3.jpg";

export default class Home extends Component {

  componentDidMount() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const swiper = require("./../scripts/swiper");
      swiper.mySwiper()
    }
  }

  render() {
    return (
      <div className="home">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img src={slide1} alt="Ina Rudi Portfolio Image" /></div>
            <div className="swiper-slide"><img src={slide2} alt="Ina Rudi Portfolio Image" /></div>
            <div className="swiper-slide"><img src={slide3} alt="Ina Rudi Portfolio Image" /></div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    )
  }
}
