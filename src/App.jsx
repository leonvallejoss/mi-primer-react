import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'

function App() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: 24 }}>
      <Header
        title="Hola, soy León"
        subtitle="Frontend Developer | React & JavaScript"
      />

      <div style={{ display: 'grid', gap: 12 }}>
        <ProjectCard
          name="Mi primer proyecto React"
          description="Practice project build with React + Vite, focused on fundamentals."
        />
        <ProjectCard
          name="Next project (coming soon)"
          description="A small app to practice components, props,and state."
        />
      </div>
    </div>
  )
}

export default App
