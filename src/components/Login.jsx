
import  { useContext, useState } from "react";

import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
 
  const navigate = useNavigate()
  const {setIsLoggedIn,setUser} = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try{
      // Make Login API request
        const response = await api.post('/login', { userName, passWord });
        localStorage.setItem('token', response.data.token);
        
        setUser(response.data.userName)
        setIsLoggedIn(true)
        console.log(response)
        navigate('/')
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
        <button onClick={handleSubmit}> Login</button>
      </form>
    </div>
  );
};

export default Login;