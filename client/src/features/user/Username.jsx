import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="hidden text-sm font-semibold md:block w-[100px] overflow-x-auto">
      {username}
    </div>
  );
}

export default Username;
