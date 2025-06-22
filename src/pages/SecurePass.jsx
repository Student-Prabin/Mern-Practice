import { useState } from "react";

export default function SecurePass() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4 items-center mt-10">
      <input
        type={show ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleToggle}
        className="px-4 py-1 border border-gray-300 rounded"
      >
        {show ? "Hide" : "Show"} Password
      </button>
    </div>
  );
}
