import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { useNavigate } from "react-router";

export function MealItemCard({ meal }) {
  const nav = useNavigate();

  return (
    <Card className=" overflow-hidden cursor-pointer"
      onClick={() => nav(`/meal/${meal.idMeal}`)}>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          className="w-full"
          src={meal.strMealThumb}
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {meal.strMeal}
        </Typography>

      </CardBody>

    </Card>
  );
}