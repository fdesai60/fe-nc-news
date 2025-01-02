import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";
import DeleteComments from "./DeleteComments";
const SingleArtComments = ({comments,setComments,article_id}) => {
  
  return ( <div>
        <h2>View all comments</h2>
        {comments.length===0?<p>Be the first to comment on this article!</p>:(  <ul>
            {
                comments.map((comment,id)=>{
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