import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import MainPage from "../pages/main/main";
import DetailPage from "../pages/detail/detail";
import SearchPage from "../pages/search/search";
const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      { path: "/movie/:type", element: <MainPage /> },
      { path: "/detail/:id", element: <DetailPage /> },
      { path: "/search", element: <SearchPage /> },
    ],
  },
]);
export default router;
