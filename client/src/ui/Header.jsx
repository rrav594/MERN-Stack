import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Express Pizza</Link>

      <p>Your name</p>
    </header>
  );
}

export default Header;
