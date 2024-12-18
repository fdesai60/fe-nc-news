import { useContext, useState } from "react";
import { UsernameContext } from "../contexts/UsernameProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [searchInput,setSearchInput]=useState("")
    const{username,setUsername}=useContext(UsernameContext)
    let navigate = useNavigate()

    const handleChange=(e)=>{
        setSearchInput(e.target.value)

    }

 

    const handleSubmit=(e)=>{

        e.preventDefault()
        setUsername(searchInput)
        navigate("/")
        // could make get request to /users and check if valid user, then render either welocme or sign up page

    }
 

    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username
                <input type="text" onChange={handleChange} required />
            </label>
            <label htmlFor="Password">Password
                <input type="password" required />
            </label>
            <button type="Submit">Login</button>
        </form>
     );
}
 
export default Login;