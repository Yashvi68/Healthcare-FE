import { Outlet } from "react-router"
import { SideBar } from "../../components/sidebar"
import styles from "./style.module.scss";
import { Header } from "../../components/header";

export const MainLayout = () => {
    return (
        <>
            <main className={styles.mainContainer}>
                <aside className={styles.sidebarContainer}>
                    <SideBar />
                </aside>
                <section className={styles.mainContentContainer}>
                    <Header />
                    <Outlet />
                </section>
            </main>
        </>
    )
}