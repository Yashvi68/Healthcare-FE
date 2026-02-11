import { NavLink, useNavigate } from "react-router";
import logo from "../../assets/images/logo.png"
import styles from "./style.module.scss";
import { buttons } from "../../constants/data";
import {sideBarData}  from "../../constants/sideBarData";
import { filterByRole } from "../../utils/filterByRole";
import { useAuthStore } from "../../zustand/auth-store";
import { roles } from "../../constants/roles";
import { LogOutIcon } from "../svg";
import { setMessage, setStatus } from "../../zustand/toastMessage-store/action";
import { setUserDetails } from "../../zustand/auth-store/actions";
import { useState } from "react";
// import { handleLogOut } from "../../utils/logOutFnc";

export const SideBar = () => {
    const[selectedItem, setSelectedItem] = useState(null)
    const { userDetails } = useAuthStore()
    const sideData = sideBarData()
    const currentRole = userDetails?.role || roles.superAdmin;
    const authenticatedMenu = filterByRole(sideData, currentRole)
    const navigate = useNavigate()
    const handleLogOut = ()=>{
        localStorage.removeItem('token')
        setUserDetails(null)
        setStatus("success")
        setMessage("Logged out successfully")
        navigate("/")
    }

    return (
        <>
            <figure className={styles.logo}>
                <img src={logo} alt="reyna" />
            </figure>
            {/* side bar items */}
            <div className={styles.sideMenuContainer}>
                {authenticatedMenu.map((item, index) => {
                    return (
                        <div className={styles.menuChildItems} key={index}>
                            <div className={styles.menuItems}>
                                <NavLink
                                to={item.navigate}>
                                    <div className={styles.items}>
                                        <div className={styles.itemIcon}>{item?.icon}</div>
                                        <p className={styles.menuName}>{item?.title}</p>
                                    </div>

                                    <div className={styles.childArrow}>
                                        {/* up/down arrow */}
                                    </div>
                                </NavLink>
                            </div>
                            {/**agar item k bhi children hai then.. */}
                            {item?.children?.length && (
                                <ul>
                                    {item?.children?.map((elem,elemId)=>{
                                        return(
                                            <li key={elemId}>
                                                <NavLink to={elem.navigate}>
                                                    {elem.title}
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </div>
                    )
                })}

            </div>
            {/* logout */}
            <div 
            className={styles.logOutContainer}
            onClick={handleLogOut}
            >
                <LogOutIcon />
                <p>{buttons.logout}</p>
            </div>
        </>
    )
}