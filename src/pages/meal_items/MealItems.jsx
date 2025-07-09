import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MealItemCard } from "./MealItemCard";
import { MealLoader } from "./MealLoader";

export default function MealItems() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { category } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php",
        {
          params: { c: category },
        }
      );
      setData(response.data);
    } catch (error) {
      setErr("Failed to fetch meals.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [category]);

  return (
    <div className="min-h-scree py-10 px-10 md:px-32 font-poppins">
      <h1 className="text-3xl md:text-4xl font-semibold text-orange-600 mb-10 text-center">
        {category} Meals
      </h1>

      {err && (
        <div className="text-center text-red-500 text-lg mb-6">{err}</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading
          ?
          Array.from({ length: 6 }).map((_, i) => <MealLoader key={i} />)
          : data?.meals?.map((meal) => (
            <div
              key={meal.idMeal}
            >
              <MealItemCard meal={meal} />
            </div>
          ))}
      </div>

      {!loading && data?.meals?.length === 0 && (
        <div className="text-center text-gray-600 text-lg mt-8">
          No meals found in this category.
        </div>
      )}
    </div>
  );
}
