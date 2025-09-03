import React from 'react';
import "../styles/components/about.css";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-image">
        <img src="/static/images/me.jpg" alt="Foto van Jonas" />
      </div>
      <div className="about-content">
        <h2>Over mij</h2>
        <p>Als gepassioneerde front-end developer combineer ik creativiteit met technische expertise om digitale ervaringen te creëren die zowel visueel aantrekkelijk als gebruiksvriendelijk zijn. Mijn focus ligt op het bouwen van moderne, responsieve webapplicaties.</p>

        <p>Met een sterke achtergrond in <span className="primary-color">React</span>, <span className="primary-color">TypeScript</span>  en moderne CSS frameworks, help ik bedrijven en particulieren hun digitale visie tot leven te brengen. Ik geloof in clean code, intuïtieve user interfaces en pixel-perfect implementaties.</p>

        <p>Wanneer ik niet aan het coderen ben, verken ik graag nieuwe technologieën, werk ik aan persoonlijke projecten, of deel ik mijn kennis met de developer community. Ik ben altijd op zoek naar nieuwe uitdagingen en interessante samenwerkingen.</p>

        <p className='color-white'>Klaar voor een nieuwe uitdaging? Laten we samen iets geweldigs bouwen!</p>
      </div>
    </div>
  )
}