import { useAuthStore } from "../zustand/auth-store"
import * as icon from "../components/svg"
import { roles } from "./roles"

export const sideBarData = () => {
    const { userDetails } = useAuthStore()
    return [
        {
            title: "Dashboard",
            navigate: "/dashboard/general-overview",
            icon: <icon.DashbordIcon />,
            role: [roles.admin, roles.superAdmin, roles.teacher],
            children: [
                {
                    title: "General Overview",
                    navigate: "/dashboard/general-overview",
                    role: [roles.admin, roles.superAdmin, roles.teacher],
                },
                {
                    title: "Student Performance Tracking",
                    navigate: "/dashboard/student-performance-tracking",
                    role: [roles.admin, roles.superAdmin, roles.teacher],
                },
                {
                    title: "Top Students By Speciality",
                    navigate: "/dashboard/top-students",
                    role: [roles.admin, roles.superAdmin, roles.teacher],
                },
                {
                    title: "Performance By Speciality",
                    navigate: "/dashboard/performance-by-specialties",
                    role: [roles.admin, roles.superAdmin, roles.teacher]
                },
                {
                    title: "Performance By Clinical Actions",
                    navigate: "/dashboard/performance-by-clinical-actions",
                    role: [roles.admin, roles.superAdmin, roles.teacher],
                }
            ]
        },
        {
            title: "Case Management",
            navigate: "/case-management",
            icon: <icon.CaseManagementIcon />,
            role: [roles.admin, roles.teacher],
        },
            {
      title: "Point System",
      navigate: "/point-system",
      icon: <icon.PointSystemIcon />,
      role: [roles.admin],
    },
    {
      title: "User Management",
      navigate:
        userDetails?.role === roles.superAdmin
          ? "/user-management/admins"
          : "/user-management/teachers",
      icon: <icon.UserManagementIcon />,
      role: [roles.superAdmin, roles.admin],

      children: [
        {
          title: "Admins",
          navigate: "/user-management/admins",
          role: [roles.superAdmin],
        },
        {
          title : "Teachers",
          navigate: "/user-management/teachers",
          role: [roles.superAdmin, roles.admin],
        },
        {
          title:"Students",
          navigate: "/user-management/students",
          role: [roles.superAdmin, roles.admin],
        },
      ],
    },
     {
      title: "Establishment",
      navigate: "/establishment",
      icon: <icon.EstlablishmentIcon />, 
      role: [roles.superAdmin],
    },

     {
      title: "Pathology",
      navigate: "/pathology",
      icon: <icon.PathologyIcon />,
      role: [roles.superAdmin],
    },

     {
      title: "Specialty",
      navigate: "/specialty",
      icon: <icon.SpecialtyIcon />,
      role: [roles.superAdmin],
    },

     {
      title: "Domain",
      navigate: "/domain",
      icon: <icon.DomainIcon />,
      role: [roles.superAdmin],
    },

      {
      title: "Materials ",
      navigate: "/materials",
      icon: <icon.MaterialsIcon />,
      role: [roles.superAdmin],
    },

        {
      title: "Treatment ",
      navigate: "/treatment",
      icon: <icon.TreatmentIcon />,
      role: [roles.superAdmin],
    },

     {
      title: "Complimentary Examinations",
      navigate: "/complimentary-examinations",
      icon: <icon.ComplimentaryExaminationsIcon />,
      role: [roles.superAdmin],
    },

        {
      title: "Target Groups",
      navigate: "/target-groups",
      icon: <icon.TargetGroupIcon />,
      role: [roles.admin],
    },

        {
      title: "Monitoring Learner Peformance",
      navigate: "/monitor-peformance",
      icon: <icon.MonitorIcon />,
      role: [roles.teacher],
    },

        {
      title: "Clinical Case",
      navigate: "/student-case",
      icon: <icon.TargetGroupIcon />,
      role: [roles.student],
    },

    {
      title: "Virtual Patients",
      navigate: "/seeding-panel",
      icon: <icon.VirtualPatientIcon />,
      role: [roles.superAdmin],
    },

    ]
}