import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
