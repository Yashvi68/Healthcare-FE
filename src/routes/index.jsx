import { Login } from "../pages/login";
import { ForgotPassword } from "../pages/forgetPassword";
import { roles } from "../constants/roles"
// import { SideBar } from "../components/sidebar";
import { MainLayout } from "../pages/main-layout";

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
        path: "/*",
        element: <MainLayout />,
        role: [roles.superAdmin, roles.admin, roles.teacher, roles.student],
        children: [{
            path: "dashboard/*",
            element: <>DASHBOARD IN PROGRESS</>,
            role: [roles.superAdmin, roles.admin, roles.teacher],
            children: [
                {
                    path: "general-overview",
                    element: <>IN PROCESS...</>,
                    role: [roles.superAdmin]
                },
                {
                    path: "student-performance-tracking",
                    element: <>IN PROGRESS...</>,
                    role: [roles.admin, roles.superAdmin, roles.teacher],
                },
                {
            path: "top-students",
            element:  <>IN PROGRESS...</>,
            role: [roles.admin, roles.superAdmin, roles.teacher],
          },
          {
            path: "performance-by-specialties",
            element:  <>IN PROGRESS...</>,
            role: [roles.admin, roles.superAdmin, roles.teacher],
          },
          {
            path: "performance-by-clinical-actions",
            element:  <>IN PROGRESS...</>,
            role: [roles.admin, roles.superAdmin, roles.teacher],
          },
            ]
        },
        {
        path: "establishment",
        element: <>IN PROGRESS...</>,
        role: [roles.superAdmin],
      },
       {
        path: "user-management/*",
        element:<>USER MANAGEMENT IN PROGRESS..</>,
        role: [roles.superAdmin, roles.admin],
        children: [
          {
            path: "admins",
            element:<>ADMINS IN PROGRESS..</> ,
            role: [roles.superAdmin],
          },
          {
            path: "teachers",
            element: <>TEACHERS IN PROGRESS..</>,
            role: [roles.superAdmin, roles.admin],
          },
          {
            path: "students",
            element:<>STUDENTS IN PROGRESS..</>,
            role: [roles.superAdmin, roles.admin],
          },
        ],
      },
      {
        path: "pathology",
        element: <>PATHO IN PROGRESS</>,
        role: [roles.superAdmin],
      },
    
    ]
    }


]