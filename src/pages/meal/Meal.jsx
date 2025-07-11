import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MealLoader from "./MealLoader";

export default function Meal() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/lookup.php",
        { params: { i: id } }
      );
      setData(response.data);
    } catch (err) {

    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (!data) {
    return <MealLoader />;
  }

  const meal = data.meals[0];
  const youTubeId = meal.strYoutube ? meal.strYoutube.split("v=")[1] : null;

  const ingredients = [];
  const measures = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) ingredients.push(ingredient.trim());
    if (measure && measure.trim()) measures.push(measure.trim());
  }

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-6 md:px-24 font-poppins text-gray-900">
      <div className="max-w-7xl mx-auto space-y-10">

        <div className="flex items-center gap-4">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-full w-24 h-24 border-4 border-orange-500 shadow-[0_0_8px_rgba(251,146,60,0.7)]"
          />
          <Typography
            variant="h2"
            className="text-orange-600 font-extrabold tracking-wide"
          >
            {meal.strMeal}
          </Typography>
        </div>

        {youTubeId && (
          <section className="bg-white rounded-xl shadow-2xl border border-orange-300 overflow-hidden max-w-4xl mx-auto">
            <iframe
              src={`https://www.youtube.com/embed/${youTubeId}`}
              title="Cooking tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            />
          </section>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="flex flex-col">
            <Typography
              variant="h5"
              className="text-orange-600 font-semibold border-b-2 border-orange-300 pb-1 mb-3"
            >
              Ingredients
            </Typography>
            <ul className="list-disc list-inside text-lg space-y-1 overflow-y-auto pr-2 flex-1 min-h-[220px]">
              {ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <Typography
              variant="h5"
              className="text-orange-600 font-semibold border-b-2 border-orange-300 pb-1 mb-3"
            >
              Measurements
            </Typography>
            <ul className="list-disc list-inside text-lg space-y-1 overflow-y-auto pr-2 flex-1 min-h-[220px]">
              {measures.map((mes, idx) => (
                <li key={idx}>{mes}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <Typography
            variant="h5"
            className="text-orange-600 font-semibold border-b-2 border-orange-300 pb-2 mb-6"
          >
            Instructions
          </Typography>
          <Typography
            className="text-lg leading-relaxed text-gray-900 tracking-wide whitespace-pre-line"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, letterSpacing: '0.02em' }}
          >
            {meal.strInstructions}
          </Typography>
        </div>
      </div>
    </div>
  );
}
