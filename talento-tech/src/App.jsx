import './App.css'
import Bienvenida from './Bienvenida';
import CuerpoPosteo from './CuerpoPosteo';
import Encabezado from './Encabezado';
import PieDePosteo from './PieDePosteo';

function App() {
  return (
    <>
      <Bienvenida/>
      <p>este es el primer componente montado!</p>
      <Encabezado/>
      <CuerpoPosteo/>
      <PieDePosteo/>
    </>
  );
}

export default App
