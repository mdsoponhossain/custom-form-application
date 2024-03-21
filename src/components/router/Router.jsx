import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";
import Layout from "../layout/Layout";
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
            }
        ]
    },






]);

export default router;