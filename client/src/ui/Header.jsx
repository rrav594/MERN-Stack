import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Express Pizza</Link>
      <SearchOrder />
      <p>Your name</p>
    </header>
  );
}

export default Header;
