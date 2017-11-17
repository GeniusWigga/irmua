import React, {Component} from 'react'
import Masonry from "masonry-layout";
import imagesloaded from "imagesloaded";

import brideImage1 from "./../../static/img/portfolio/4.jpg";
import brideImage2 from "./../../static/img/portfolio/3.jpg";
import brideImage3 from "./../../static/img/portfolio/5.jpg";
import brideImage4 from "./../../static/img/portfolio/2.jpg";

export default class Portfolio extends Component {

  componentDidMount() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const grid = document.querySelector('.grid');

      const msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 10,
        percentPosition: false
      });

      imagesloaded(grid).on('progress', function () {
        msnry.layout();
      });

    }
  }

  render() {
    return (
      <div className="site-container portfolio">
        <div className="grid">
          <div className="grid-sizer" />
          <div className="grid-item"><img src={brideImage1} /></div>
          <div className="grid-item"><img src={brideImage3} /></div>
          <div className="grid-item"><img src={brideImage2} /></div>
          <div className="grid-item"><img src={brideImage4} /></div>
        </div>
      </div>
    );
  }
}

