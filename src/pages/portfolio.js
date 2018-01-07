import React, { Component } from 'react'
import brideImage1 from '../../static/img/portfolio/bride/bride_4.jpg'
import brideImage2 from '../../static/img/portfolio/bride/bride_3.jpg'
import brideImage3 from '../../static/img/portfolio/bride/bride_5.jpg'
import brideImage4 from '../../static/img/portfolio/bride/bride_2.jpg'
import brideImage6 from '../../static/img/portfolio/bride/bride_6.jpg'
import brideImage7 from '../../static/img/portfolio/bride/bride_7.jpg'

import haircut1 from '../../static/img/portfolio/haircut/haircut_1.jpg'
import haircut2 from '../../static/img/portfolio/haircut/haircut_2.jpg'
import haircut3 from '../../static/img/portfolio/haircut/haircut_3.jpg'
import haircut4 from '../../static/img/portfolio/haircut/haircut_4.jpg'

import makeup1 from '../../static/img/portfolio/makeup/makeup_1.jpg'
import makeup2 from '../../static/img/portfolio/makeup/makeup_2.jpg'
import makeup3 from '../../static/img/portfolio/makeup/makeup_3.jpg'
import makeup4 from '../../static/img/portfolio/makeup/makeup_4.jpg'

import shooting1 from '../../static/img/portfolio/shooting/shooting_1.jpg'
import shooting2 from '../../static/img/portfolio/shooting/shooting_2.jpg'
import shooting3 from '../../static/img/portfolio/shooting/shooting_3.jpg'
import shooting4 from '../../static/img/portfolio/shooting/shooting_4.jpg'

import beforeAfter1 from '../../static/img/portfolio/beforeAfter/beforeAfter_1.jpg'
import beforeAfter2 from '../../static/img/portfolio/beforeAfter/beforeAfter_2.jpg'
import beforeAfter3 from '../../static/img/portfolio/beforeAfter/beforeAfter_3.jpg'
import beforeAfter4 from '../../static/img/portfolio/beforeAfter/beforeAfter_4.jpg'

export default class Portfolio extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Masonry = require('masonry-layout')
      const imagesloaded = require('imagesloaded')

      const grid = document.querySelector('.grid')

      const msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 10,
        percentPosition: false,
      })

      imagesloaded(grid).on('progress', function() {
        msnry.layout()
      })
    }
  }

  render() {
    return (
      <div className="site-container portfolio">
        <div className="grid">
          <div className="grid-sizer" />
          <div className="grid-item">
            <img src={brideImage1} />
          </div>
          <div className="grid-item">
            <img src={brideImage3} />
          </div>
          <div className="grid-item">
            <img src={brideImage2} />
          </div>
          <div className="grid-item">
            <img src={brideImage6} />
          </div>
          <div className="grid-item">
            <img src={brideImage4} />
          </div>
          <div className="grid-item">
            <img src={brideImage7} />
          </div>
          <div className="grid-item">
            <img src={haircut1} />
          </div>
          <div className="grid-item">
            <img src={haircut2} />
          </div>
          <div className="grid-item">
            <img src={haircut3} />
          </div>
          <div className="grid-item">
            <img src={haircut4} />
          </div>
          <div className="grid-item">
            <img src={makeup1} />
          </div>
          <div className="grid-item">
            <img src={makeup2} />
          </div>
          <div className="grid-item">
            <img src={makeup3} />
          </div>
          <div className="grid-item">
            <img src={makeup4} />
          </div>
          <div className="grid-item">
            <img src={shooting1} />
          </div>
          <div className="grid-item">
            <img src={shooting2} />
          </div>
          <div className="grid-item">
            <img src={shooting3} />
          </div>
          <div className="grid-item">
            <img src={shooting4} />
          </div>
          <div className="grid-item">
            <img src={beforeAfter1} />
          </div>
          <div className="grid-item">
            <img src={beforeAfter2} />
          </div>
          <div className="grid-item">
            <img src={beforeAfter3} />
          </div>
          <div className="grid-item">
            <img src={beforeAfter4} />
          </div>
        </div>
      </div>
    )
  }
}
