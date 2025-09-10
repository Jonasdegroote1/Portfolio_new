import { PROJECT_BY_SLUG_QUERY } from "@/lib/queries";
import ProjectHeader from "@/components/projects/ProjectHeader";
import HeroImage from "@/components/projects/HeroImage";
import ProjectDetails from "@/components/projects/ProjectDetails";
import MetaSection from "@/components/projects/MetaSection";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectLinks from "@/components/projects/ProjectLinks";

export default async function ProjectPage({ params }) {
  const res = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: PROJECT_BY_SLUG_QUERY,
      variables: { slug: params.slug },
    }),
    cache: "no-store",
  });

  const { data } = await res.json();
  const project = data.project;

  if (!project) {
    return <div className="not-found">Project niet gevonden.</div>;
  }

  return (
    <div className="project-page">
      <ProjectHeader project={project} />

      {/* <HeroImage url={project.heroImage?.url} alt={project.title} />
      <ProjectDetails description={project.description} />
      <MetaSection
        categories={project.categories}
        technologies={project.technologies}
      />
      <ProjectGallery gallery={project.gallery} title={project.title} />
      <ProjectLinks liveDemo={project.liveDemo} viewCode={project.viewCode} /> */}
    </div>
  );
}
