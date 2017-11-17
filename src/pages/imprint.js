import React, {Component} from 'react'
import Link from 'gatsby-link'

import './index.css'

export default class Imprint extends Component {

  render() {
    return (
      <div className="imprint">
        <h2>Impressum</h2>

        <address>
          Ina Rudi<br />
          Georg-Winkler-Str. 1<br />
          80995 München
        </address>

        <h4>Telefonnummer:</h4>
        <p>
          <a>+49 (0) 171 22 333 87</a><br />
          <a href="mailto:ina.rudi@googlemail.com">ina.rudi@googlemail.com</a>
        </p>

        <h4>Angaben der Quelle für verwendetes Bilder- und Grafikmaterial:</h4>
        <p>
          <a href="http://frankjagow.de/Fotografie/" target="_blank">Frank Jagow</a><br />
          <a href="http://www.christian-lindlbauer.de/" target="_blank">Christian Lindlbauer</a><br />
        </p>

        <h4>Rechtliche Erklärung:</h4>
        <p>Die Inhalte dieser Seite wurden im Rahmen des Zumutbaren auf Richtigkeit und Vollständigkeit geprüft.
          Wir übernehmen daher keine Haftung oder Garantie für Aktualität, Richtigkeit und Vollständigkeit der auf
          dieser Website bereitgestellten Informationen.
          Der Inhalt dieser Webseite ist urheberrechtlich geschützt. Aus Gründen des Urheberrechts ist die unerlaubte
          Speicherung und Vervielfältigung von Daten, Texten und Bildmaterial aus dieser Webseite nicht gestattet.</p>
      </div>
    );
  }
}
