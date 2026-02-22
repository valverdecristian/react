import { useState } from "react";
import type { Props } from "./Props.interface";

const ItemCounter = ({ name, quantity = 1 }: Props) => {

  // desectructuracion de un arreglo
  // setCount se utiliza p/ cambiar el valor de count
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubstract = () => {
    if (count == 1) return;
    setCount(count - 1)
  }


  // const handleClick = () => {
  //   console.log(`Click ${name}`);
  // };

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
      }}
    >
      <h3>{name}</h3>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubstract}>-1</button>
    </section>
  );
};

export default ItemCounter;
