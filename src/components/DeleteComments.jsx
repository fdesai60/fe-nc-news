import { useContext, useEffect, useState } from "react";
import { UsernameContext } from "../contexts/UsernameProvider";
import CommentCard from "./CommentCard";
import { deleteComment } from "../api";
import Error from "./Error";
import styles from "../css/DeleteComments.module.css"
const DeleteComments = ({comments}) => {
    const {username}=useContext(UsernameContext)
    const [myComments,setMyComments]=useState([])
    const [error,setError]=useState(null)
    const [isLoading, setIsLoading] = useState(false);

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
        <div className="delComments">
            { myComments.length>0
            ? (
            <ul>
                {myComments.map(myComm=>{
                    return <li 
                    className={styles.commentLi} key={myComm.comment_id}>
                        <CommentCard comment ={myComm}/>
                        <button className={styles.delButton} 
                            onClick={()=>{
                                handleDelete(myComm.comment_id)
                                } }>🗑️
                        </button>
                     </li>
                })}
            </ul>
            ):
            <p>Make your first comment on this article!</p>
            }
        </div>
   </>
    );
}
 
export default DeleteComments;