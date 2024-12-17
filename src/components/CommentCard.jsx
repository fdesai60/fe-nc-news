const CommentCard = ({comment}) => {
    const {article_id,author,body,comment_id,created_at,votes} = comment
    return ( 
        <>
            <h2>Comments</h2>
            <div>
                <h3>{author}</h3>
                <p>{body}</p>
                <p>votes: {votes}</p>
            </div>  
        </>
     );
}
 
export default CommentCard;