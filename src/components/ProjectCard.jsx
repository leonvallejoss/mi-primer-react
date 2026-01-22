export function ProjectCard({ name, description }) {
  return (
    <article
      style={{
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: 12,
        padding: 16,
      }}
    >
      <h2 style={{ margin: 0, fontSize: 18 }}>{name}</h2>
      <p style={{ margin: '8px 0 0', opacity: 0.8 }}>{description}</p>
    </article>
  )
}
