import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";
import DeleteComments from "./DeleteComments";
import styles from "../css/SingleArtComments.module.css"
const SingleArtComments = ({comments,setComments,article_id}) => {
  
  return ( 
    <div className={styles.comments}>
        <h2>View all comments</h2>
        {comments.length===0?<p>Be the first to comment on this article!</p>:(  <ul>
            {
                comments.map((comment)=>{
                    return <li key={comment.comment_id}>
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