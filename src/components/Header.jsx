export default function Header() {
  return (
    <div className="bg-white shadow-lg p-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-2xl font-bold">Recipe Explorer</h1>
      <button className=" px-4 py-2 rounded hover:bg-gray-500">
        Load New Recipes
      </button>
    </div>
  );
}
