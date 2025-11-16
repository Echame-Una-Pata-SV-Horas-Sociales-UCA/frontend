import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Nosotros from './pages/nosotros'
import Adopta from './pages/adopta'
import Apadrina from './pages/apadrina'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/adopta" element={<Adopta />} />
        <Route path="/apadrina" element={<Apadrina />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
