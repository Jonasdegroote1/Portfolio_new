import React from 'react';
import '../styles/components/hero.css';
import Blob from './Blob';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className='primary-color'>Jonas</span> – <br/> Front-End Developer</h1>
        <p>Ik bouw clean en gebruiksvriendelijke webapps die zowel mooi als functioneel zijn.</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Bekijk mijn werk</a>
          <a href="#contact" className="btn btn-secondary">Download CV</a>
        </div>
      </div>
      <div className='blob-container'>
        <Blob />
      </div>
    </section>
  );
}