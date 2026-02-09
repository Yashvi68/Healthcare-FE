import styles from "./style.module.scss"
import { Image } from "../image"
import logo from "../../assets/images/logo.png"
export const LoginLayout = (props) => {
    const { heading, subHeading, children, imageSrc, imageAlt } = props
    return (
        <div className={styles.mainContainer}>
            <figure>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                />
            </figure>
            <div className={styles.loginContainer}>
                {/* <figure className={styles.logo}>
                    <img src={logo} alt="logo" />
                </figure> */}
                <h2 className={styles.heading}>  {heading}</h2>
                <p className={styles.subHeading}>{subHeading}</p>
                {children}
            </div>
        </div>
    )
}