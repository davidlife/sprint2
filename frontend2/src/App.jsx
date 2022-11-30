import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './components/auth/login'
import Ordenes from './components/envios/ordenes'
import Registro from './components/auth/registro'
import Menu from './components/envios/ordenes'
import Registrar from './components/envios/registrar'
import Editar from './components/envios/editar'
function App() {

  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registrar" element={<Registrar />} />
        
        <Route path="/ordenes">
          <Route index element={<Ordenes />} />
          <Route path="/ordenes/:id" element={<Editar />} />
        </Route>       
      </Routes>
      

      </BrowserRouter>     
    </div>
  )
}

export default App
