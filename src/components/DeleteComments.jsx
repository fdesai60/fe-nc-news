import { useContext, useEffect, useState } from "react";
import { UsernameContext } from "../contexts/UsernameProvider";
import CommentCard from "./CommentCard";
import { deleteComment } from "../api";
const DeleteComments = ({comments}) => {
    const {username,setUsername}=useContext(UsernameContext)
    const [myComments,setMyComments]=useState([])
    const [isHidden,setIsHidden]= useState(true)

    const handleDisplay=()=>{
        setIsHidden(curr=>!curr)
        
    }
    const handleDelete=(id)=>{
       deleteComment(id)
       .then(()=>{
        setMyComments((currComments) => currComments.filter((comment) => comment.comment_id !== id))
       })
       .catch((err)=>{
        alert(err)
       })
    }
    useEffect(() => {
        setMyComments(comments.filter((comm) => comm.author === username));  
    }, [comments,username]);

    return ( 
             <>
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