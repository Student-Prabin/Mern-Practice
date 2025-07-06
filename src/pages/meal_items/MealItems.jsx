import { useParams } from "react-router"

export default function MealItems() {
  const { category } = useParams();
  console.log(category);
  return (
    <div>

    </div>
  )
}