import React, { Component } from 'react'
import Markdown from "react-markdown"
import imprintData from './../../data/imprint.json';
import './index.css'

export default class Imprint extends Component {
  render() {
    return (
      <div className="site-container imprint">
        <Markdown source={imprintData.body}/>
      </div>
    )
  }
}
