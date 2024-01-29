import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center px-4 sm:my-16">
      <h1 className="mb-8 text-center text-3xl font-bold text-stone-500 md:text-3xl">
        Home
      </h1>
      <p className="text-yellow-700 ">Order here</p>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
