import { Outlet } from "react-router-dom"
import { ToastMessage } from "./components/toastMessages"

function App() {

  return (
    <>
     <ToastMessage />
     <Outlet />
    </>
  )
}

export default App
