import "./App.css";
import Asistente from "./Asistente";
import Bienvenida from "./Bienvenida";
import CuerpoPosteo from "./CuerpoPosteo";
import Encabezado from "./Encabezado";
import PieDePosteo from "./PieDePosteo";

function App() {
  const asistentes = [
    { nombre: "Juan Pérez", tarea: "Frontend Developer", emoji: "👨‍💻" },
    { nombre: "Ana Gómez", tarea: "Diseñadora UX/UI", emoji: "🎨" },
    { nombre: "Carlos Ruiz", tarea: "Backend Developer", emoji: "👩‍💻" },
  ];

  return (
    <>
      <Bienvenida />
      <p>este es el primer componente montado!</p>
      <Encabezado />
      <CuerpoPosteo />
      <PieDePosteo />
      <ul>
        {
          asistentes.map((asistente, index) => (
            <Asistente key={index} {...asistente} />
          ))
        }
      </ul>
    </>
  );
}

export default App;
