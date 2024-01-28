import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className=" bg-stone-700 uppercase px-4 py-4 m-4 space-x-4 sm:px-y flex items-center justify-between">
      <p className="text-stone-200 text-semibold sm:space-x-6">
        Cartoverview Page
      </p>
      <Link className="text-sky-700" to="/cart">
        Open Cart
      </Link>
    </div>
  );
}

export default CartOverview;
