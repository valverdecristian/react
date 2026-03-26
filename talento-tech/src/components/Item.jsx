import styles from './ItemListContainer.module.css'

const Item = ({nombre, precio, stock}) => {
  return (
    <div className={styles.productos}>
      <h3 className={styles.subtitulo}>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>Stock disponible: {stock}</p>
      <button>Comprar</button>
    </div>
  )
}

export default Item
