import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import Home from "./pages/home/Home";

import MealItems from "./pages/meal_items/MealItems";


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
        }
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}