export function Header({ title, subtitle }) {
  return (
    <header style={{ padding: '16px 0' }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      <p style={{ margin: '8px 0 0', opacity: 0.8 }}>{subtitle}</p>
    </header>
  )
}
