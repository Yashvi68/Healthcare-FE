import { useNavigate } from "react-router"
import { useAuthStore } from "../zustand/auth-store"
import { setMessage } from "../zustand/toastMessage-store/action"
 const handleLogOut = ()=>{
    const {userDetails} = useAuthStore()
    const navigate = useNavigate()
    navigate("/")
    userDetails(null)
    setMessage("Logges Out Successfully")
}