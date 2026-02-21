import './App.css'
import ItemCounter from './shopping-cart/ItemCounter'
import type { ItemInCart } from './shopping-cart/ItemInCart.interface'

const itemsInCart: ItemInCart[] = [
    {productName: 'Nintendo', quantity: 1},
    {productName: 'Play', quantity: 2},
    {productName: 'Controller', quantity: 5},
]

function App() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {
        itemsInCart.map(({productName, quantity})=> (
          <ItemCounter key={productName} name={productName} quantity={quantity}/>
        ))
      }
    </>
  )
}

export default App
