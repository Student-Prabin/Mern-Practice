export default function About() {
  return (
    <>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 ">
        <img className="max-sm:hidden opacity-75" src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="burger" />

        <div className="flex flex-col items-center  p-4 gap-7">
          <h1 className="text-4xl tracking-[4px] font-new">About Catering</h1>
          <p className="text-xl tracking-[3px]">Tradition since 1889</p>

          <p className="font-new">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use&nbsp;
            <span className="bg-gray-200">seasonal</span> ingredients.</p>

          <p className="opacity-80 font-new">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

      </div>
    </>
  )
}