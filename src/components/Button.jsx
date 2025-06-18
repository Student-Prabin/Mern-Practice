import { NavLink } from "react-router";

export default function Button({ text }) {
  return (
    <>
      <button className="text-md italic hover:bg-gray-200 p-2"><NavLink>{text}</NavLink></button>
    </>
  )
}