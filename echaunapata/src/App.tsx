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
import { Toaster } from "react-hot-toast";
import ScrollToTop from './components/commons/ScrollToTop';
import HubNetwork from './pages/hubNetwork';
import Voluntarios from './pages/voluntarios';


function App() {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/adopta" element={<Adopta />} />
        <Route path="/apadrina" element={<Apadrina />} />
      <Route path="/refugio" element={<Home />} />
       <Route path="/animal/:id" element={<AnimalDetalle />} />
{/*      <Route path="/adopta/:id" element={<AnimalDetalle />} />*/}        
        <Route path="/adoption-form" element={<AdoptionForm />} />
        <Route path="/denuncia" element={<Denuncia />} />
        <Route path="/denuncia-form" element={<DenunciaForm />} />
        <Route path="/red-de-apoyo" element={<HubNetwork />} />
        <Route path="/voluntarios" element={<Voluntarios />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
