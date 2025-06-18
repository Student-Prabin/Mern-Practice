export default function MenuItems({ title, desc }) {
  return (
    <div>

      <h1 className="text-2xl font-light mb-4">{title}</h1>
      <h2 className="text-gray-500">{desc}</h2>
    </div>

  )
}