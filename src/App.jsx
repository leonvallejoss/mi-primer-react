import { useState } from 'react'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'

const projects = [
  {
    id: 1,
    name: 'Mi primer proyecto React',
    description:
      'Practice project built with React + Vite, focused on fundamentals.',
  },
  {
    id: 2,
    name: 'Next project (coming soon)',
    description: 'A small app to practice components, props, and state.',
  },
]

function App() {
  const [projectList] = useState(projects)

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 24 }}>
      <Header
        title="Hola, soy León"
        subtitle="Frontend Developer | React & JavaScript"
      />

      <div style={{ display: 'grid', gap: 12 }}>
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
    </div>
  )
}

export default App
