import axios from "axios"
import { useState } from "react";

export default function Home() {

  // const m = axios.get('https://jsonplaceholder.typicode.com/posts');
  // console.log(m)
  const [msg, setMsg] = useState("");

  const mi = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success bhayo')
    }, 2000);
  });

  mi.then((val) => {
    console.log(`Success: ${val}`);
    setMsg(val);
  }).catch((err) => {
    console.log(`Rejected: ${err}`);
    setMsg(err);
  })
  // .finally(() => {
  //   console.log('hello');
  // })

  return (
    <div className="p-10">
      <h1>{msg}</h1>
    </div>
  )
}