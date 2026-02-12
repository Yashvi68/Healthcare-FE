import { Outlet } from "react-router"
import { SideBar } from "../../components/sidebar"
import styles from "./style.module.scss";

export const MainLayout = ()=>{
    return(
        <>
        <main className={styles.mainContainer}>
            <aside className={styles.sidebarContainer}>
                <SideBar />
            </aside>
            <section className={styles.mainContentContainer}>
                <Outlet />
            </section>
        </main>
        </>
    )
}