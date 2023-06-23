import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import MainPage from "../pages/main/main";
import DetailPage from "../pages/detail/detail";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      { path: "/movie/:type", element: <MainPage /> },
      { path: "/detail/:id", element: <DetailPage /> },
    ],
  },
]);
export default router;
