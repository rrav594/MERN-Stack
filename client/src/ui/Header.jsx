import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className=" flex items-center justify-around bg-sky-700 uppercase px-5 py-3 border-b-[6px] border-stone-900 ">
      <Link className="hover:text-green-100 tracking-[6px] text-white" to="/">
        Express Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
