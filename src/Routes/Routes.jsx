import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import AddService from "../Components/AddService/AddService";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addService",
        element: <AddService></AddService>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
