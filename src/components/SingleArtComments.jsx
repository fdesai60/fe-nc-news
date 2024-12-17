import CommentCard from "./CommentCard";
const SingleArtComments = ({comments}) => {
    return ( <div>
        <ul>
            {
                comments.map(comment=>{
                    return <li key={comment.comment_id}>
                        <CommentCard comment={comment}/>
                    </li>
                })
            }
        </ul>
    </div> );
}
 
export default SingleArtComments;