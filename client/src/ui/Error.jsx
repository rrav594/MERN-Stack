import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  //   console.log(error);
  return (
    <div>
      <h1>{error.data || error.message}</h1>
      <h1>Something went bad</h1>

      <LinkButton to="-1">&larr; Go Back</LinkButton>
    </div>
  );
}

export default Error;
