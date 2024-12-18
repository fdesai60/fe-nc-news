import { createContext, useState } from "react";
export const UsernameContext= createContext()

const UsernameProvider = ({children}) => {
    const [username,setUsername]= useState("cooljmessy")
    
    return (
        <UsernameContext.Provider value ={{username,setUsername}}>
          {children}
        </UsernameContext.Provider>
      );
}
 
export default UsernameProvider;