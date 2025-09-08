import '../styles/components/skillCard.css';

export default function SkillsCard({ tech }) {
  const className = tech.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`skill-card ${className}`} key={tech.id}>
      <div
        className="skill-icon"
        dangerouslySetInnerHTML={{ __html: tech.svgCode }}
      ></div>
      <p className="skill-name">{tech.name}</p>
    </div>
  );
}
