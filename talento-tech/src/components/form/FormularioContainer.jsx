import { useState } from "react";
import FormularioProducto from "./FormularioProducto";

const FormularioContainer = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    precio: "",
    stock: ""
  });

  const [imagenFile, setImagenFile] = useState(null);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };

  const manejarCambioImagen = (evento) => {
    // como solo permitimos subir un archivo, tomamos el primero (indice 0)
    setImagenFile(evento.target.files[0]);
  };


  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    if (!imagenFile) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }

    // --- Lógica para subir la imagen a Imgbb ---
    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    const formData = new FormData();
    formData.append('image', imagenFile);

    try {
      const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData
      });

      const datosImgbb = await respuestaImgbb.json();

      if (datosImgbb.success) {
        console.log("Imagen subida con éxito. URL:", datosImgbb.data.url)
        const productoCompleto = {
          ...datosForm,
          urlImagen: datosImgbb.data.url
        };

        console.log("Enviando los siguientes datos COMPLETOS a la API", productoCompleto);
      } else {
        throw new Error("Error al subir la imagen: " + datosImgbb.error.message);
      }
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      alert("Hubo un error al subir la imagen. Por favor, intentá nuevamente.");
    }
  };

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      manejarCambioImagen={manejarCambioImagen}
    />
  );
};

export default FormularioContainer;
