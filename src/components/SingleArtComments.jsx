import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";
import DeleteComments from "./DeleteComments";
import styles from "../css/SingleArtComments.module.css"
import { useState } from "react";
const SingleArtComments = ({comments,setComments,article_id}) => {
    const [isClicked,setIsClicked]=useState(false)
    const handleClick=()=>{
        setIsClicked((curr)=>{
            return !curr
        })
    }

  return ( 
    <div className={styles.comments}>
        <button onClick={handleClick}>{isClicked?"Hide comments":"Read comments"}</button>
        {comments.length===0?<p>Be the first to comment on this article!</p>:(  <ul className={isClicked?styles.dispCommentsList:styles.hideCommentsList}>
            {
                comments.map((comment)=>{
                    return <li className={styles.commentLi} key={comment.comment_id}>
                        <CommentCard comment={comment}/>
                    </li>
                })
                
            }
        </ul>)}
      
        <CreateComment article_id={article_id} setComments={setComments}/>
        <DeleteComments comments={comments}></DeleteComments> 
    </div> );
}
 
export default SingleArtComments;