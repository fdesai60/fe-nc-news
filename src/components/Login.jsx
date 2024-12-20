import { useContext, useEffect, useState } from "react";
import { UsernameContext } from "../contexts/UsernameProvider";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../api";


const Login = () => {
    const [searchUsername,setSearchUsername]=useState("")
    const{username,setUsername}=useContext(UsernameContext)
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate()

    const handleChange=(e)=>{
        setSearchUsername(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        getUsers()
          .then((res) => {
              let userExists = res.some(user => user.username === searchUsername);
              if (userExists) {
                  setUsername(searchUsername); 
                  navigate("/"); 
                //THE FOLLOWING USERNAMES EXIST:
                // tickle122
                // grumpy19
                // happyamy2016
                // cooljmessy
                // weegembump
                // jessjelly
              } else {
                  alert("User not found, using a guest account."); 
                  navigate("/"); 
                 
              }
          })
          .catch((err) => console.error("Error fetching users:", err))
          .finally(()=>{
            setIsLoading(false)
          });
    };
    
    if(isLoading){
        return <p>Loading...</p> 
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username
                <input type="text" onChange={handleChange} value={searchUsername} required id="username" />
            </label>
            <label htmlFor="password">Password
                <input type="password" id="password" required />
                {/* db currently doesn't store passwords, so not controlling this component just yet as this can be any value for now */}
            </label>
            <button type="Submit">Login</button>
        </form>
     );
}
 
export default Login;