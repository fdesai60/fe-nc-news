import { useContext, useEffect, useState } from "react";
import { UsernameContext } from "../contexts/UsernameProvider";
import CommentCard from "./CommentCard";
import { deleteComment } from "../api";
import Error from "./Error";
const DeleteComments = ({comments}) => {
    const {username}=useContext(UsernameContext)
    const [myComments,setMyComments]=useState([])
    const [error,setError]=useState(null)
    const [isHidden,setIsHidden]= useState(true)
    const [isLoading, setIsLoading] = useState(false);

    const handleDisplay=()=>{
        setIsHidden(curr=>!curr)
        
    }
    const handleDelete=(id)=>{
        setIsLoading(true)
       deleteComment(id)
       .then(()=>{
        setError(null)
        setMyComments((currComments) => currComments.filter((comment) => comment.comment_id !== id))
       })
       .catch((err)=>{
            setError(err.message)
       })
       .finally(()=>{
        setIsLoading(false)
       })
    }
    useEffect(() => {
        setMyComments(comments.filter((comm) => comm.author === username));  
    }, [comments,username]);


    
    return ( 
             <>
             {isLoading&&<p>Loading...</p>}
             {error && <Error error={error} />}
             <button onClick={handleDisplay}>{isHidden?"View my comments":"Hide my comments"}</button>
            {!isHidden?
            (<ul>
                {myComments.map(myComm=>{
                    return <li key={myComm.comment_id}>
                        <CommentCard comment ={myComm}/>
                        <button onClick={()=>handleDelete(myComm.comment_id)} >🗑️</button>
                        </li>
                })}
             </ul>):null}
        </>
  
    );
}
 
export default DeleteComments;