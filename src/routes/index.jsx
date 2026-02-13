import { Login } from "../pages/login";
import { ForgotPassword } from "../pages/forgetPassword";
import { roles } from "../constants/roles"
import { MainLayout } from "../pages/main-layout";
import {UserManagement} from "../pages/user-management"
import { DashBoard } from "../pages/dashboard";
import { CaseManagement } from "../pages/case-management";
import { Admins } from "../pages/user-management/admin";

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
            element: <DashBoard />,
            role: [roles.superAdmin, roles.admin, roles.teacher],
            children: [
                {
                    path: "general-overview",
                    element: <>G-O IN PROCESS...</>,
                    role: [roles.superAdmin]
                },
                {
                    path: "student-performance-tracking",
                    element: <>SPT IN PROGRESS...</>,
                    role: [roles.admin, roles.superAdmin, roles.teacher],
                },
                {
                    path: "top-students",
                    element: <>IN PROGRESS...</>,
                    role: [roles.admin, roles.superAdmin, roles.teacher],
                },
                {
                    path: "performance-by-specialties",
                    element: <>IN PROGRESS...</>,
                    role: [roles.admin, roles.superAdmin, roles.teacher],
                },
                {
                    path: "performance-by-clinical-actions",
                    element: <>IN PROGRESS...</>,
                    role: [roles.admin, roles.superAdmin, roles.teacher],
                },
            ]
        },
        {
            path: "establishment",
            element: <>ESTABLISHMENT IN PROGRESS...</>,
            role: [roles.superAdmin],
        },
        {
            path: "user-management/*",
            element: <UserManagement />,
            role: [roles.superAdmin, roles.admin],
            children: [
                {
                    path: "admins",
                    element: <Admins />,
                    role: [roles.superAdmin],
                },
                {
                    path: "teachers",
                    element: <>TEACHERS IN PROGRESS..</>,
                    role: [roles.superAdmin, roles.admin],
                },
                {
                    path: "students",
                    element: <>STUDENTS IN PROGRESS..</>,
                    role: [roles.superAdmin, roles.admin],
                },
            ],
        },
        {
            path: "pathology",
            element: <>PATHO IN PROGRESS</>,
            role: [roles.superAdmin],
        },
        {
        path: "master-data",
        element: <>MASTER DATA ...</>,
        role: [roles.superAdmin],
      },
       {
        path: "case-management/*",
        element: <CaseManagement />,
        role: [roles.admin, roles.teacher],
        children: [
          {
            path: "",
            element: <>..</>,
            role: [roles.admin, roles.teacher],
          },
          {
            path: "create/*",
            element: <>..</>,
            role: [roles.admin, roles.teacher],
            children: [
              {
                path: ":step",
                element:<>..</>,
                role: [roles.admin, roles.teacher],
              },
            ],
          },
        ],
      },

        ]
    }


]