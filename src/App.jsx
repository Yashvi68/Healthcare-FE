import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { ToastMessage } from "./components/toastMessages"
import { useMemo } from "react"
import { useAuthStore } from "./zustand/auth-store"
import { filterByRole } from "./utils/filterByRole"
import { RoutesData } from "./routes"

function App() {
  const {userDetails} = useAuthStore()
  const useAuthRoutes= useMemo(()=>{
    if(userDetails?.role?.length){
      return filterByRole(RoutesData,userDetails.role)
    }
      return RoutesData
  }, [userDetails])

  const router = createBrowserRouter(useAuthRoutes)

  return (
    <>
     <ToastMessage />
     {/* <p>Test</p> */}
     <RouterProvider router={router} />
    
    </>
  )
}

export default App
