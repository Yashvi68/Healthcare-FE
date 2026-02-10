import { useEffect } from "react";
import { useToastStore } from "../../zustand/toastMessage-store"
import { clearMessage } from "../../zustand/toastMessage-store/action";
import { CloseIcon, ErrorIcon, SuccessIcon } from "../svg";
import styles from "./style.module.scss"

export const ToastMessage = () => {
    const { message, status } = useToastStore()
    console.log("Toast Debug:", { message, status });
    
    useEffect(() => {
        const timer = setTimeout(() => {
            clearMessage(); // Store ka existing action
        }, 6000);
        
        return () => clearTimeout(timer); // Cleanup (agar user ne pehle hi close kar diya)
    }, [message]);
    
    
    if (!message) return null;
    return (
        <div className={`${styles.toastContainer} ${styles[status]}`}>

            <div className={styles.toastIcon}>
                {status === 'success' ? <SuccessIcon /> : <ErrorIcon />}
            </div>


            <div className={styles.toastContent}>
                <p className={styles.toastTitle}>
                    {status === 'success' ? 'Success' : 'Error'}
                </p>
                <p className={styles.toastMessage}>{message}</p>
            </div>

            <div className={styles.toastClose}>
                <CloseIcon
                    fillColor="#9CA3AF"
                    handleClick={() => clearMessage()}
                    className={styles.closeSvg}
                />
            </div>
        </div>

    )
}