import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Login(){

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = ()=>{

    API.post("token/", {
      username: username,
      password: password
    })
    .then(res=>{
      console.log(res.data);

      // ✅ token save (important)
      localStorage.setItem("access", res.data.access);

    //   alert("Login Success");

      // ✅ redirect to Add Student page
      navigate("/add");

    })
    .catch(()=>{
      alert("Invalid Login");
    });

  };

  return(
    <div className="container">

      <h2>Login</h2>

      <input
        className="form-control mb-2"
        placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button
        className="btn btn-success"
        onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default Login;