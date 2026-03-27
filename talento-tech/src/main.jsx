import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App3 from './App3.jsx'

fetch('/data/productos.json')
 .then(respuesta => {
    console.log('Respuesta cruda del servidor:', respuesta);
    return respuesta.json();
 })
 .then(datos => {
    console.log('¡Productos cargados!', datos);
 })
 .catch(error => {
    console.error('¡Ups! Hubo un error:', error);
 })
 .finally(() => {
    console.log('Petición finalizada'); // Cerramos el bloque que faltaba
 });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App3 />
  </StrictMode>,
)
