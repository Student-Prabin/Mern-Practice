import { useState } from "react";

export default function LiveTyping() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <input
        type="text"
        placeholder="Type Here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <p className="text-xl font-semibold">You typed: {text}</p>
    </div>
  );
}
