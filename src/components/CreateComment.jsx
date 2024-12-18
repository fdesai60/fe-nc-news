import { useState } from "react";
import { postComment } from "../api";
import { UsernameContext } from "../contexts/UsernameProvider";
import { useContext } from "react";

const CreateComment = ({article_id,setComments}) => 
    {
    const{username,setUsername}=useContext(UsernameContext)
    const [searchTerm,setSearchTerm] = useState("")
        console.log(article_id)
    const hanldeInput=(e)=>{
        setSearchTerm(e.target.value)
    }
  
    const handeSubmit = (e)=>{
        e.preventDefault()
        setSearchTerm("")
        const temporaryComment= {article_id: Date.now(),
            author:  username,
            body:  searchTerm,
            comment_id : Date.now(),
            created_at : "2024-12-17T23:52:06.394Z",
            votes :  0}
        setComments(currComments=>{
            return [...currComments,temporaryComment]
        })
        postComment(article_id,username,searchTerm)
        .catch(err=>{
            console.log(err)
            setComments(currComments=>{
                return currComments.slice(0,-1)
        })
        })
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
                    onChange={hanldeInput}
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