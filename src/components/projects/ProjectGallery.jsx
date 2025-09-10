export default function ProjectGallery({ gallery, title }) {
  if (!gallery?.length) return null;

  return (
    <section className="project-gallery">
      <h2>Project Gallery</h2>
      <div className="gallery-grid">
        {gallery.map((img) => (
          <div key={img.id} className="gallery-item">
            <img src={img.url} alt={title} />
          </div>
        ))}
      </div>
    </section>
  );
}
