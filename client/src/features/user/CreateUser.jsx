import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="mb-4 text-sm text-gray-800 md:text-base">
          Welcome! Please start by telling us your name:
        </p>
        <input
          className="input w-72 mb-8"
          type="text"
          placeholder="Your Name goes here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {username !== "" && (
          <div>
            <Button type="primary">Start Ordering</Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateUser;
