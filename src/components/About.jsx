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

        <p>Dankzij mijn studies <span className="primary-color">Programmeren</span> aan de Arteveldehogeschool, aangevuld met opleidingen in 3D-printing, modelleren en grafische media, heb ik een brede achtergrond die technologie en design samenbrengt. Tijdens mijn stages en werkervaring bij onder andere Esign en Urban Food Fest heb ik niet alleen mijn technische vaardigheden verder ontwikkeld, maar ook geleerd hoe belangrijk samenwerking, communicatie en flexibiliteit zijn binnen een teamomgeving.</p>

        <p>Met een sterke basis in <span className="primary-color">React</span>, TypeScript en moderne CSS-frameworks, en ervaring met creatieve tools zoals Illustrator, Photoshop, Blender en AutoCAD, draag ik bij aan projecten waarin gebruiksvriendelijkheid en visueel design centraal staan. Ik geloof in clean code, teamwork en het bouwen van oplossingen die zowel technisch betrouwbaar als esthetisch sterk zijn.</p>

        <p>Naast mijn werk ben ik gepassioneerd door sport, design, tekenen en architectuur, die mij steeds opnieuw inspiratie geven voor <span className="primary-color">creatieve projecten</span>. Ik hou ervan om nieuwe technologieën te verkennen, persoonlijke projecten uit te werken en mijn kennis te delen met anderen.</p>
        <p className='color-white'>Ik kijk ernaar uit om verder te <span className="primary-color">groeien als developer</span> en samen te werken aan uitdagende projecten waar ik mijn creativiteit en technische expertise kan inzetten.</p>
      </div>
    </div>
  )
}
