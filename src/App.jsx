import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import Home from "./pages/home/Home";

import MealItems from "./pages/meal_items/MealItems";
import Meal from "./pages/meal/Meal";


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        }, {
          path: 'mealCategory/:category',
          element: <MealItems />
        }, {
          path: 'meal/:id',
          element: <Meal />
        }
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}