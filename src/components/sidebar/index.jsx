import { NavLink, useNavigate } from "react-router";
import logo from "../../assets/images/logo.png"
import styles from "./style.module.scss";
import { buttons } from "../../constants/data";
import { sideBarData } from "../../constants/sideBarData";
import { filterByRole } from "../../utils/filterByRole";
import { useAuthStore } from "../../zustand/auth-store";
import { roles } from "../../constants/roles";
import { DownArrowIcon, LogOutIcon, UpArrowIcon } from "../svg";
import { setMessage, setStatus } from "../../zustand/toastMessage-store/action";
import { setUserDetails } from "../../zustand/auth-store/actions";
import { useState } from "react";

export const SideBar = () => {
    const [selectedItem, setSelectedItem] = useState(null) //menu tracking --> initially sab close h

    const { userDetails } = useAuthStore()
    const sideData = sideBarData()
    const currentRole = userDetails?.role || roles.superAdmin;
    const authenticatedMenu = filterByRole(sideData, currentRole)
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('token')
        setUserDetails(null)
        setStatus("success")
        setMessage("Logged out successfully")
        navigate("/")
    }

    const handleToggle = (index) => {
        setSelectedItem(prev => prev === index ? null : index)
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
                            {/* role acc menu items */}
                            <div
                                className={styles.menuItems}
                                onClick={() => handleToggle(index)}
                            >
                                <NavLink
                                    to={item.navigate}
                                    className={({ isActive }) =>
                                        isActive ? styles.activeMenuItem : styles.menuLink
                                    }
                                >
                                    {/* items */}
                                    <div className={styles.items}>
                                        <div className={styles.itemIcon}>{item?.icon}</div>
                                        <p className={styles.menuName}>{item?.title}</p>
                                    </div>

                                    {/* up-down arrow */}
                                    <div className={styles.childArrow}>
                                        {item?.children && (
                                            selectedItem === index ?
                                                <UpArrowIcon /> :
                                                <DownArrowIcon />
                                        )}
                                    </div>
                                </NavLink>
                            </div>
                            {/**agar item k bhi children hai then.. */}
                            {item?.children?.length > 0 && selectedItem === index && (
                                <ul>
                                    {item?.children?.map((elem, elemId) => {
                                        return (
                                            <li key={elemId} className={styles.list}>
                                                <NavLink
                                                    to={elem.navigate}
                                                     className={({ isActive }) =>
    isActive ? styles.activeSubMenu : styles.subMenu
  }
                                                >
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