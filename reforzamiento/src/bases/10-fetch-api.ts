const API_KEY = 'valor';

const myReq = fetch(`url${API_KEY}`);

// hay una forma mas limpia de hacer esto, ya que esta muy anidado
myReq
// promesas en cadena, ya que inmediatamente despues del then se devuelve otra promesa
.then((response) => response.json())
// ya tenemos la data producto de la promesa anterior
.then((data) => console.log(data))
.catch((err) => {
    console.error(err);
})