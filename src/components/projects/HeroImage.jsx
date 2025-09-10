export default function HeroImage({ url, alt }) {
  if (!url) return null;

  return (
    <div className="hero-image">
      <img src={url} alt={alt} />
    </div>
  );
}
