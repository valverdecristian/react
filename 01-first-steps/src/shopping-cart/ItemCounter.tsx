import type { Props } from './Props.interface'



const ItemCounter = ({name, quantity}: Props) => {
  return (
    <section
    style={{
        display: 'flex', alignItems: 'center', gap: 10, marginTop: 10
    }}
    >
        <h3>{name}</h3>
      <button>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  )
}

export default ItemCounter
