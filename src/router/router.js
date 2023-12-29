import { createBrowserRouter } from "react-router-dom";
import SignUpFormPage from "../pages/rhf_signup";
import HomePage from "../pages/homepage";
import SignUpFormPage_Schema from "../pages/yup_singup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign-up",
    element: <SignUpFormPage />,
  },
  { path: "/sign-up-schema", element: <SignUpFormPage_Schema /> },
]);

export default router;
