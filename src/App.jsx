import {  useContext } from "react"
import { Routes , Route, Navigate, } from "react-router-dom"

import HomePage from "./components/HomePage"
import Login from "./components/Login"
import { AuthContext } from "./context/AuthContext"
import Signup from "./components/Signup"
function App() {
const {isLoggedIn} = useContext(AuthContext)
 
  return (
    <>
     <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path='/'   element={isLoggedIn? <HomePage/>: <Navigate to='/login'/>}>
     
      </Route>
     </Routes>
    </>
  )
}

export default App
