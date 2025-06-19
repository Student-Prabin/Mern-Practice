import { NavLink } from "react-router";

export default function Button({ link, text }) {
  return (
    <>
      <button className="text-md italic hover:bg-gray-200 p-2"><a href={'#' + link}>{text}</a></button>
    </>
  )
}