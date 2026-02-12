import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css"
function Signup(){

    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

const navigate=useNavigate();//used for navigation

const handleSubmit = (e)=>{
    e.preventDefault();

    const payload={
        id,
        name,
        email,
        password
    };

    axios.post('http://signup-env.eba-zziypauj.ap-south-1.elasticbeanstalk.com/users',payload)
    .then(response => {
        console.log(response.data);
        navigate("/users");

    })
    .catch(error => {
        console.log(error);
    });
};


return (
  <div className="container">
    <div className="card">
      <h2>User Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  </div>
);
}

export default Signup;