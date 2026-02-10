import { Outlet } from "react-router-dom"
import { ToastMessage } from "./components/toastMessages"

function App() {

  return (
    <>
     <ToastMessage />
     {/* <p>Test</p> */}
     <Outlet />
    </>
  )
}

export default App
