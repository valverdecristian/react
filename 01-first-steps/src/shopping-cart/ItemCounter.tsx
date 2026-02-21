import type { Props } from "./Props.interface";

const ItemCounter = ({ name, quantity }: Props) => {
  const handleClick = () => {
    console.log(`Click ${name}`);
  };

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
      <button onClick={handleClick}>+1</button>
      <span>{quantity}</span>
      <button onClick={handleClick}>-1</button>
    </section>
  );
};

export default ItemCounter;
