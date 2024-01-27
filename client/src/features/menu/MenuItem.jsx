import { formatCurrency } from "../../utils/helper";

export default function MenuItem({ pizza }) {
  //   const { id, name, unitPrice, imageUrl, ingredients, soldOut } = pizza;
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <p>name</p>
      <p>price:{!soldOut ? formatCurrency(unitPrice) : "No Price"}</p>
      <p>{ingredients.join(", ")}</p>
      <p></p>
    </li>
  );
}
