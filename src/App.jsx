import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayOut from "./components/RootLayout";
import NowPlaying from "./features/now_playing/NowPlaying";
import SearchPage from "./features/search/SearchPage";
import Popular from "./features/popular/Popuar";
import TopRated from "./features/top_rated/TopRated";
import Upcoming from "./features/upcoming/Upcoming";

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <NowPlaying />
        },
        {
          path: 'movie-search/:query',
          element: <SearchPage />
        },
        {
          path: 'popular',
          element: <Popular />
        },
        {
          path: 'top_rated',
          element: <TopRated />
        },
        {
          path: 'upcoming',
          element: <Upcoming />
        }
      ]
    },


  ]);





  return <RouterProvider router={router} />
}