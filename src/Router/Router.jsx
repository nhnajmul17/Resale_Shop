import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import CategoryDetails from "../Components/Home/Category/CategoryDetails/CategoryDetails";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/category/:name',
                element: <CategoryDetails></CategoryDetails>

            },


            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/reset',
                element: <ResetPassword></ResetPassword>
            },
        ]
    }

])