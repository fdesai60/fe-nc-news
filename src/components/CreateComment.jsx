import { useState } from "react";
import { postComment } from "../api";
import { UsernameContext } from "../contexts/UsernameProvider";
import { useContext } from "react";

const CreateComment = ({article_id,setComments}) => 
    {
    const [isLoading, setIsLoading] = useState(false);
    const{username,setUsername}=useContext(UsernameContext)
    const [searchTerm,setSearchTerm] = useState("")
    const handleInput=(e)=>{
        setSearchTerm(e.target.value)
    }
  
    const handeSubmit = (e)=>{
        e.preventDefault()
       setIsLoading(true)
        postComment(article_id,username,searchTerm)
        .then((comment)=>{
          setComments(currComments=>{
            return [comment,...currComments]
           
         })
         setSearchTerm("")
        
         })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    if(isLoading){
        return <p>Loading...</p>
    }
    
    
    return ( 

        <>
            <h2>Add your own comment</h2>
            <form onSubmit={handeSubmit} >
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
                <button type="submit">Send</button>
            </form>
        </>
    );
}
 
export default CreateComment;