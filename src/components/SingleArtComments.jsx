import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";
const SingleArtComments = ({comments,setComments,article_id}) => {
    return ( <div>
        <h2>Comments</h2>
        <ul>
            {
                comments.map(comment=>{
                    return <li key={comment.comment_id}>
                        <CommentCard comment={comment}/>
                    </li>
                })
            }
        </ul>
        <CreateComment article_id={article_id} setComments={setComments}/> 
    </div> );
}
 
export default SingleArtComments;