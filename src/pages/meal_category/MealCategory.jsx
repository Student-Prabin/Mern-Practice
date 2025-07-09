import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MealCategoryLoader from "./MealCategoryLoader"; // Adjust the path as needed

export default function MealCategory() {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState("");
  const [search, setSearch] = useState("");

  const getData = async () => {
    setLoad(true);
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setData(res.data.categories);
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = data.filter((item) =>
    item.strCategory.toLowerCase().includes(search.toLowerCase())
  );

  if (load) return <MealCategoryLoader />; // Use your skeleton loader here

  if (err)
    return (
      <div className="p-10 text-center text-red-500">Error: {err}</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <div className="py-16 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-orange-600 drop-shadow-sm">
          Explore Meal Categories
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
          Dive into a delicious world of meals. Tap any category to start your
          food journey.
        </p>

        <div className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20 max-w-7xl mx-auto">
        {filteredData.map((category) => (
          <div
            key={category.idCategory}
            onClick={() => nav(`mealCategory/${category.strCategory}`)}
            className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl cursor-pointer group transition-transform hover:-translate-y-1"
          >
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <div className="absolute bottom-0 p-5 text-white">
              <h2 className="text-2xl font-bold">{category.strCategory}</h2>
              <p className="text-sm text-gray-200 line-clamp-2">
                {category.strCategoryDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
