import { createBrowserRouter } from "react-router-dom"
import { ListPage } from "@/pages/home"
import { LockedPage } from "@/pages/locked"

export const router = createBrowserRouter([
  {
    path: "/locked",
    element: <LockedPage />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
]);
