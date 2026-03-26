import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Layout } from './components/layout/Layout';

function App3() {

  return (
    <>
      <Layout>
        <h1>Bienvenidos a mi pagina</h1>
        <p>Este es el contenido principal</p>
        <ItemListContainer Mensaje="Nuestros productos destacados"/>
      </Layout>
    </>
  );
}

export default App3;
