import { useState } from "react";
import { postComment } from "../api";
import { UsernameContext } from "../contexts/UsernameProvider";
import { useContext } from "react";
import Error from "./Error";
import styles from "../css/CreateComment.module.css"
const CreateComment = ({article_id,setComments}) => 
    {
    const{username}=useContext(UsernameContext)
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError]=useState(null)
    const [searchTerm,setSearchTerm] = useState("")
    const [isClicked,setIsClicked]=useState(false)
    const handleClick=()=>{
        setIsClicked((curr)=>{
            return !curr
        })
    }

    const handleInput=(e)=>{
        setSearchTerm(e.target.value)
    }
  
    const handleSubmit = (e)=>{
        e.preventDefault()
        setError(null)
       setIsLoading(true)
        postComment(article_id,username,searchTerm)
        .then((comment)=>{
          setComments(currComments=>{
            return [comment,...currComments]
           
         })
         setSearchTerm("")
        
         })
         .catch((err)=>{
            setError(err.message)
         })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    
 
    return ( 

        <>
           

            {isLoading&&<p>Loading...</p>}
            {error && <Error error={error} />}
            <button onClick={handleClick}>Add your own comment</button>
            <form  className={ isClicked?styles.dispForm:styles.hideForm} onSubmit={handleSubmit} >
                <textarea
                name="add-comment"
                id="add-comment" 
                placeholder="My comment"
                onChange={handleInput}
                value={searchTerm}
                required>  
                </textarea>
                
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send"}
                </button>
            </form>
        </>
    );
}
 
export default CreateComment;