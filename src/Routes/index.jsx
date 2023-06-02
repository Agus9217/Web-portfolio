import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Home } from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
