## 🛡️ React StrictMode

Es una "etiqueta de advertencia" que envuelve a tu aplicación para detectar problemas potenciales durante el desarrollo.

**Doble Renderizado (Solo en Desarrollo)**: React renderizará tus componentes dos veces. Esto lo hace para detectar funciones impuras o efectos secundarios que podrían causar bugs difíciles de encontrar. Si ves que un console.log aparece dos veces, es por esto.

**Verificación de Efectos**: Ejecuta los efectos (useEffect) dos veces (montar -> desmontar -> montar). Esto te obliga a escribir siempre la función de limpieza (cleanup), asegurando que no queden fugas de memoria, algo vital si venís de manejar suscripciones en Angular.

**Detección de APIs Obsoletas**: Te avisará en la consola si estás usando métodos antiguos o "deprecados" que React planea eliminar en futuras versiones.

**Asegura el Futuro**: Ayuda a que tu aplicación sea compatible con funciones avanzadas como el Concurrent Rendering, que permite a React pausar y reanudar actualizaciones de la interfaz.


## Tips

**Valores Booleanos**: no generan nada de codigo interno en react, para que muestre su valor hay que usar to string o un ternario.