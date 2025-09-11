import "../../styles/components/ProjectDescription.css"

export default function ProjectDetails({ project }) {
  if (!project || !project.description) return null;

  // Split de description op dubbele newlines
  const paragraphs = project.description.split("\n\n");

  return (
    <section className="project-description__details">
      <h2>Project Details</h2>
      {paragraphs.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </section>
  );
}
