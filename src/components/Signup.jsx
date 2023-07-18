import  { useContext, useState } from "react";

import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  const {setIsLoggedIn} = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try{
      // Make signup API request
        const response = await api.post('/register', { userName, passWord });
      
        
        navigate('/login')
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleSubmit}> Register</button>
      </form>
    </div>
  );
};

export default Signup;
