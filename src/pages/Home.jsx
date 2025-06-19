import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";


export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-15">

        <div id="top" className="h-[570px] bg-[url(https://www.w3schools.com/w3images/hamburger.jpg)] bg-cover bg-center bg-no-repeat flex items-end pl-6 pb-7">
          <h1 className="text-3xl opacity-50 tracking-wider">
            Le Catering
          </h1>
        </div>
        <div className="w-[80vw] m-auto flex flex-col gap-10">
          <br id="about" />
          <About />
          <hr id='menu' className="w-[80vw] m-auto" />
          <Menu />
          <hr div id='contact' className="w-[80vw] m-auto" />
          <Contact />

        </div>
        <div className="bg-gray-200 h-30 flex items-center justify-center">Made by &nbsp;<span className="underline">Prabin Dahal</span></div>
      </div>
    </ div>
  )
}