import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Users(){
    const [users,setUsers]=useState([]);

    //Will run only one time when reload
    useEffect(()=>{
        axios.get("http://localhost:8080/users")
        .then(response => {
            console.log(response);
            setUsers(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);
  

return (
  <div className="users-container">
    <h2>Registered Users</h2>

    <div className="users-grid">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  </div>
);



}

export default Users;