import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";
import Layout from "../layout/Layout";
import Alluser from "../allUser/Alluser";
export const router = createBrowserRouter([


    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path:'/all/users',
                element:<Alluser></Alluser>,
            }
        ]
    },






]);

export default router;