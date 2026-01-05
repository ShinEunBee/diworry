import { createBrowserRouter } from "react-router-dom"
import { MainPage } from "../../pages/home"
import { LockedPage } from "../../pages/locked"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/locked",
    element: <LockedPage />,
  },
]);
