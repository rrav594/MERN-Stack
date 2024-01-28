import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const classname = "text-sm text-blue-600 hover:text-blue-500 hover:underline";
  if (to === "-1") {
    const navigate = useNavigate();
    return (
      <button className={classname} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link className={classname} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
