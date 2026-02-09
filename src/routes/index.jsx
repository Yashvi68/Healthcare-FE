import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { ForgotPassword } from "../pages/forgetPassword";
import App from "../App";

export const RoutesData = createBrowserRouter([
    {
        path : "/",
        element:<App />,
        children:[
          {
                index: true, 
                element: <Login />,
            },
            {
                path: "forgot-password", 
                element: <ForgotPassword />
            }
        ]
    }
])