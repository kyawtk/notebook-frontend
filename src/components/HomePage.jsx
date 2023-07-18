import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";





const HomePage = () => {
  const {user}  = useContext(AuthContext)
  
 return <div className=""> Home page : YOu are logged in as {user}</div>
};

export default HomePage;
