import Button from "./Button";

export default function Header() {
  return (
    <div className="bg-white z-1 shadow-lg p-2 flex justify-between sticky top-0">
      <Button text='Gourmet au Catering' />
      <nav className="flex gap-5 max-sm:hidden">
        <Button text='About' />
        <Button text='Menu' />
        <Button text='Contact' />
      </nav>
    </div >
  )
}