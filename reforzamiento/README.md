## 🏗️ Variables, Tipos y Objetos

`const` vs `let`: Usamos const por defecto para todo lo que no cambie su referencia; let solo si el valor necesita ser reasignado (TypeScript mostrará el tipo en este caso porque es mutable).

**Clog Pro**: Para ver el nombre de la variable junto a su valor en la consola, envolvela en llaves: ``console.log({ firstName, lastName });``.

**Template Strings**: Usá backticks (`) para concatenar variables de forma limpia con ${}.

**Inmutabilidad y Clonación**: Aunque un objeto sea const, podés cambiar sus propiedades internas. Para crear una copia real y no solo una referencia, usá ``structuredClone(objeto)``.

**Conversión Rápida**: Podés convertir un string a number simplemente anteponiendo el símbolo + (ej: +'10').


## 🧩 Desestructuración (El "Desarme")

**Objetos**: Podés extraer propiedades y renombrarlas en el mismo paso: const { nombre: name } = persona;.

**Arreglos**: La desestructuración es por posición. Podés saltar elementos dejando el espacio entre comas: const [a, , c] = array;.

**Operador Rest (...)**: Sirve para capturar "todo lo demás" en un nuevo arreglo u objeto.

**Aserción as const**: Transforma un arreglo en una Tupla fija (solo lectura, orden estricto y longitud definida), vital para que TypeScript entienda los Hooks.


## ⚡ Funciones y Lógica de React

**Funciones Flecha**: Son el estándar en React. Si retornás un objeto de forma implícita, recordá envolverlo en paréntesis: ``const fn = () => ({ id: 1 });``.

**Shorthand (Paso por referencia)**: Si los argumentos que recibe una función son los mismos que entrega el método anterior, pasá solo el nombre: ``nombres.forEach(console.log);``.

**Regla de Hooks**: Cualquier función que empiece con use (como useState) debe seguir las reglas de React y no ejecutarse en el nivel superior (top level) del archivo.

**Manipulación de Datos**: Preferí .filter() o .find() sobre .forEach() cuando necesites transformar o buscar datos en arreglos de forma declarativa.


## ⏳ Asincronía y APIs

**Promesas**: Tienen tres estados (pendiente, resuelta, rechazada). El método .finally() se ejecuta siempre, sin importar el resultado.

**Fetch API**: Recordá que fetch devuelve una promesa que debe ser transformada (generalmente a ``.json()``) antes de poder usar los datos.

**Async / Await**: Es la forma más limpia de manejar asincronía. Permite leer el código de forma secuencial y requiere un bloque try...catch para manejar errores de forma profesional.

**Tip de Pro**: En TypeScript, siempre definí Interfaces para tus objetos y Enums o Union Types para propiedades con valores fijos (como Owner.DC o Owner.Marvel), esto evita errores de escritura y mejora el autocompletado.