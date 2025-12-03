import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Nosotros from './pages/nosotros'
import Adopta from './pages/adopta'
import Apadrina from './pages/apadrina'
import AnimalDetalle from './pages/animalDetalle'
import AdoptionForm from './pages/adoptionForm'
import Denuncia from './pages/denuncia'
import DenunciaForm from './pages/denunciaForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/adopta" element={<Adopta />} />
        <Route path="/apadrina" element={<Apadrina />} />
      <Route path="/refugio" element={<Home />} />
       <Route path="/animal" element={<AnimalDetalle />} />
{/*      <Route path="/adopta/:id" element={<AnimalDetalle />} />*/}        
        <Route path="/adoption-form" element={<AdoptionForm />} />
        <Route path="/denuncia" element={<Denuncia />} />
        <Route path="/denuncia-form" element={<DenunciaForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
