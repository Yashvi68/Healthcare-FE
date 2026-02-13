import { useLocation } from "react-router"
import { roles } from "../../constants/roles"
import { useAuthStore } from "../../zustand/auth-store"
import { headerDataList } from "./data"

export const Header = ()=>{
    const location = useLocation()
    // console.log("location",location)
    const {userDetails} = useAuthStore()

//  const headerTitle = headerDataList?.find((item) => {
//     console.log("==item==",item)
//     return location?.pathname?.includes(item.route);
//   });

  const activeItem = headerDataList?.find((item) => {
        // We add a '/' because your data routes don't have them, 
        // but location.pathname always does.
        return location.pathname.includes(item.route);
    });

    // 2. Extract the LABEL string. If no item is found, default to empty string.
    const headerTitle = activeItem ? activeItem.label : "";

    const handleRoleName = (()=>{
        if(userDetails?.data?.role === "superadmin"){
            return (roles?.superAdmin)
        }
        else if(userDetails?.data?.role === "admin"){
            return (roles?.admin)
        }
        else if(userDetails?.data?.role === "teacher"){
            return (roles?.teacher)
        }
        else{
            return (roles?.student)
        }
    })
        return(
        <header>
            <p>{headerTitle}</p>
            <p>Hello <strong>{handleRoleName()}!</strong></p>
        </header>
    )
}