import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import AddService from "../Components/AddService/AddService";
import ServiceDetails from "../Components/Service/ServiceDetails";
import MyReviews from "../Components/Review/MyReviews";
import PrivateRoute from "./PrivateRoute";
import UpdateReview from "../Components/Review/UpdateReview";

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
        loader: () => fetch("https://project-root-server.vercel.app/services"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/service/${params.id}`),
      },
      {
        path: "/addService",
        element: <AddService></AddService>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/reviews/${params.id}`),
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
