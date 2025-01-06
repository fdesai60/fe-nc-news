import { useContext, useState } from "react";
import { UsernameContext } from "../contexts/UsernameProvider";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../api";
import Error from "./Error";
import styles from "../css/Login.module.css"

const Login = () => {
    const [searchUsername,setSearchUsername]=useState("")
    const{setUsername}=useContext(UsernameContext)
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError]=useState(null)
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
              setError(null)
              if (userExists) {
                  setUsername(searchUsername); 
                  
                  navigate("/"); 
              } else {
                  alert("User not found, using a guest account."); 
                  navigate("/"); 
                 
              }
          })
          .catch((err) => {
            setError(err.message)
          })
          .finally(()=>{
            setIsLoading(false)
          });
    };
    
    return ( 
        <>
            {isLoading&&<p>Loading...</p>}
            {error && <Error error={error} />}
            <div className={styles.login}>
                <h2>Login here:</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="username">Username
                        <input type="text" onChange={handleChange} value={searchUsername} required id="username" />
                    </label>
                    <label htmlFor="password">Password
                        <input type="password" id="password" required />
                    </label>
                    <button type="Submit">Login</button>
                </form>
            </div>
        </>
     );
}
 
export default Login;