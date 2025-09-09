import ContactForm from "./ContactForm";
import DirectContact from "./DirectContact";
import "../styles/components/contact.css";


export default function Contact() {
  return (
    <div id="contact" className="contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact-sub-description">If you would like to get in touch, please feel free to reach out via email or connect with me on LinkedIn.</p>

      <div className="contact-methods">
        <ContactForm />
        <div className="contact-info">
          <h3>Laten we verbinden</h3>
          <p>Ik ben altijd geïnteresseerd in nieuwe projecten en samenwerkingen. Of je nu een startup bent met een geweldig idee, of een gevestigd bedrijf dat een digitale upgrade nodig heeft - laten we praten!</p>
          <h4>Volg me ook op</h4>

          <ul className="social-links">
            <li>
              <a 
                href="https://www.linkedin.com/in/jonas-de-groote-5b4b9821b/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/static/images/linkedin.svg" 
                  alt="LinkedIn" 
                  className="social-icon"
                />
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/Jonasdegroote1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="/static/images/github.svg" 
                  alt="GitHub" 
                  className="social-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:jonasdegroote5@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="/static/images/email.svg" 
                  alt="mail"
                  className="social-icon"
                />
              </a>
            </li>
          </ul>


          <DirectContact />
        </div>
      </div>
    </div>
  )
}