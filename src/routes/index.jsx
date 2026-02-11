import { Login } from "../pages/login";
import { ForgotPassword } from "../pages/forgetPassword";
import { roles } from "../constants/roles"
import { SideBar } from "../components/sidebar";

// export const RoutesData = createBrowserRouter()
export const RoutesData = [
    {
        path: "*",
        element: <>PAGE NOT FOUND</>,
        role: [roles.superAdmin, roles.admin, roles.teacher, roles.student]
    },
    {
        path: "/",
        element: <Login />,
        role: [roles.superAdmin, roles.admin, roles.teacher, roles.student]
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
        role: [roles.superAdmin, roles.admin, roles.teacher, roles.student]
    },
    {
        path:"/*",
        element:<SideBar />,
        role: [roles.superAdmin, roles.admin, roles.teacher, roles.student],
        children:[{
            path:"dashboard/*",
            element:<>DASHBOARD IN PROGRESS</>,
            role: [roles.superAdmin, roles.admin, roles.teacher],
            children:[{
                
            }]
        }]
    }


]