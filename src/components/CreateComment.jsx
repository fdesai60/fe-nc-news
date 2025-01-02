import { useState } from "react";
import { postComment } from "../api";
import { UsernameContext } from "../contexts/UsernameProvider";
import { useContext } from "react";
import Error from "./Error";

const CreateComment = ({article_id,setComments}) => 
    {
    const{username}=useContext(UsernameContext)
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError]=useState(null)
    const [searchTerm,setSearchTerm] = useState("")
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
            <h2>Add your own comment</h2>
            <form onSubmit={handleSubmit} >
                <label htmlFor="add-comment">Comment: 
                    <textarea
                    name="add-comment"
                    id="add-comment" 
                    placeholder="my comment"
                    onChange={handleInput}
                    value={searchTerm}
                    required>
                    
                    </textarea>
                </label>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send"}
                </button>
            </form>
        </>
    );
}
 
export default CreateComment;