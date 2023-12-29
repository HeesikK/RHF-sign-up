import { createBrowserRouter } from "react-router-dom";
import SignUpFormPage from "../pages/rhf_signup";
import HomePage from "../pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign-up",
    element: <SignUpFormPage />,
  },
]);

export default router;
