import { Button } from "../../../components/form/button"
import { Input } from "../../../components/form/input"
import { SearchIcon } from "../../../components/svg"
import { buttons } from "../../../constants/data"
import styles from "./style.module.scss"
export const Admins = ()=>{
    return(
        <div className={styles.mainContainer}>
            <div className={styles.createContainer}>
                <div>
                     <Input
                placeholder="Search"
                className={styles.searchArea}
            >

                <SearchIcon />

            </Input>
                {/* </Input> */}
                </div>
               
                <Button
                className={styles.btn}
                >{buttons.createAdmin}</Button>
            </div>
        </div>
    )
}