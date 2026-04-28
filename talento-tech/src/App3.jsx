import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Layout } from './components/layout/Layout';
import { Contador } from './components/EjemploUseEffect';
import Productos from './components/Productos';
import FormularioContainer from './components/form/FormularioContainer';

function App3() {

  return (
    <>
      <Layout>
        <h1>Bienvenidos a mi página</h1>
        <p>Este es el contenido principal</p>
        <ItemListContainer Mensaje="Nuestros productos destacados"/>
        <Contador/>
        <Productos Mensaje="Productos Locales"/>
        <FormularioContainer/>
      </Layout>
    </>
  );
}

export default App3;
