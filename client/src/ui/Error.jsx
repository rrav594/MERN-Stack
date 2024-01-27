import { useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  //   console.log(error);
  return (
    <div>
      <h1>{error.data || error.message}</h1>
      <h1>Something went bad</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Error;
