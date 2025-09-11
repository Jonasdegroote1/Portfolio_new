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
        <p>Als gepassioneerde <span className="primary-color">front-end developer</span> combineer ik creativiteit met technische expertise om digitale ervaringen te creëren die zowel visueel aantrekkelijk als gebruiksvriendelijk zijn. Mijn focus ligt op het bouwen van moderne, responsieve webapplicaties waar design en functionaliteit hand in hand gaan.</p>

        <p>Dankzij mijn studies <p>Dankzij mijn studies Programmeren aan de Arteveldehogeschool en ervaring bij onder andere Esign en Urban Food Fest, heb ik niet alleen mijn technische vaardigheden verder ontwikkeld, maar ook geleerd hoe belangrijk <span className="primary-color">samenwerking</span> is binnen een team.</p>

        <p>Met een sterke basis in <span className="primary-color">React</span>, TypeScript en moderne CSS-frameworks, en ervaring met creatieve tools zoals Illustrator, Photoshop, Blender en AutoCAD, draag ik bij aan projecten waarin gebruiksvriendelijkheid en visueel design centraal staan. Ik geloof in clean code, teamwork en het bouwen van oplossingen die zowel technisch betrouwbaar als esthetisch sterk zijn.</p>

        <p>Met een sterke basis in <span className="primary-color">React</span>, TypeScript en CSS-frameworks, en ervaring met creatieve tools zoals Illustrator, Photoshop, Blender en AutoCAD, draag ik bij aan projecten waarin gebruiksvriendelijkheid en visueel design centraal staan. Naast werk ben ik gepassioneerd door sport, design en tekenen, die mij inspiratie geven voor <span className="primary-color">creatieve projecten</span>.</p>
        <p className='color-white'>Ik kijk ernaar uit om verder te <span className="primary-color">groeien als developer</span> en bij te dragen aan uitdagende projecten waar creativiteit en technische expertise samenkomen.</p>
      </div>
    </div>
  )
}
