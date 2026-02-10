import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { ForgotPassword } from "../pages/forgetPassword";
import {roles} from "../constants/roles"
import App from "../App";

export const RoutesData = createBrowserRouter([
    {
        path:"*",
        element:<>PAGE NOT FOUND</>,
        role:[roles.superAdmin, roles.admin, roles.teacher, roles.student]
    },
    {
        path : "/",
        element:<App />,
        children:[
          {
            path: "",
                index: true, 
                element: <Login />,
                role:[roles.superAdmin, roles.admin,roles.teacher,roles.student]
            },
            {
                path: "forgot-password", 
                element: <ForgotPassword />
            }
        ]
    },
    
])