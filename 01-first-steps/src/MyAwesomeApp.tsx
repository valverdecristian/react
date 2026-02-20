import './App.css'
const name = 'Cristian';
const lastName = 'Valverde'
const isActive = true;

function MyAwesomeApp() {
  return (
    <>
      <h1>{name}</h1>
      <h3>{lastName}</h3>
      <h2>{isActive? 'activo':'no activo'}</h2>
    </>
  )
}

export default MyAwesomeApp
