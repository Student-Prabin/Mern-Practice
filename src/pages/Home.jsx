import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";


export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-15">

        <div className="h-[570px] bg-[url(https://www.w3schools.com/w3images/hamburger.jpg)] bg-cover bg-center bg-no-repeat flex items-end pl-6 pb-7">
          <h1 className="text-3xl opacity-50 tracking-wider">
            Le Catering
          </h1>
        </div>
        <About />
        <hr className="w-[80vw] m-auto" />
        <Menu />
        <hr className="w-[80vw] m-auto" />
        <Contact />
        <div className="bg-gray-200 h-30 flex items-center justify-center">Made by &nbsp;<span className="underline">Prabin Dahal</span></div>
      </div>
    </ div>
  )
}