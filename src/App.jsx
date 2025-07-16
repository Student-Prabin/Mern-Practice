import { createBrowserRouter, RouterProvider } from "react-router"

import UserList from "./features/users/UserList";
import UserForm from "./features/users/UserForm";
import RootLayout from "./components/RootLayout";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <UserList />
        },
        {
          path: 'add-user',
          element: <UserForm />
        }

      ]
    },


  ]);





  return <RouterProvider router={router} />
}