import Navbar from './components/Navbar'
import AnnexesPage from './pages/AnnexesPage'
import HomePage from './pages/HomePage'
import PdfReaderPage from './pages/PdfReaderPage'
import ResourcesPage from './pages/ResourcesPage'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const navItems = [
    { label: 'Inicio', to: '/' },
    { label: 'Recursos', to: '/resources' },
    { label: 'Guía de recomendaciones', to: '/resources/actividades-modelo-cel' },
    { label: 'Anexos de la experiencia', to: '/annexes' },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar items={navItems} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/:slug" element={<PdfReaderPage />} />
        <Route path="/annexes" element={<AnnexesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  )
}

export default App
