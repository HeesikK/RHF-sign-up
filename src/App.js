import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
