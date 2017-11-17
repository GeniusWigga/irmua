import React from 'react'
import aboutMeImage from "./../../static/img/about_me.jpg";

const AboutMe = () => (
  <div className="site-container about-me">
    <h2>Warum ich?</h2>
    <p>Was zeichnet meine Person als Hair- und Make-up Artist aus?</p>
    <p>
      Mit liegt es am Herzen Ihre schönste Seite hervorheben, so dass Sie sich vor allem in Ihrer Haut wohl fühlen und
      vor allem sich selber treu bleiben.
    </p>
    <p>
      Meine Stärken sind vor allem mein Ehrgeiz, Perfektionismus und die Leidenschaft zu meinem Beruf. Ich bilde mich
      regelmäßig fort und versuche stets meine Arbeiten zu verbessern.
    </p>

    <img src={aboutMeImage} alt="Ina Rudi" />

    <h2>Hochzeitsstyling</h2>
    <p>
      Nach nun mittlerweile fünf Jahren Erfahrung im Braut Make-up Bereich, fühle ich mich noch immer geehrt, den
      schönsten Tag im Leben einer Frau begleiten zu dürfen. Ich habe in den Jahren viele Tipps und Tricks gesammelt,
      mit denen ich versuche, jeder Braut zur Seite zu stehen.
    </p>

    <p>
      Mithilfe einer Weiterbildung bei Julia Fratichelli habe ich die nötigen Techniken und Methoden erlernt, Ihre
      Wunschfrisur zu zaubern und somit Ihr Hochzeitstyling komplett zu machen.
    </p>

    <p>
      Wenn Sie eine zuverlässige und, professionelle Hair- und Make-up Artistin suchen, werde ich mein Bestes geben um
      Ihren Ansprüchen gerecht zu werden. In meinem "Portfolio" können Sie sich erste Eindrücke meiner Arbeiten
      verschaffen.
    </p>

  </div>
);

export default AboutMe
