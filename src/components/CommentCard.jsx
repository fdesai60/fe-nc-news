const CommentCard = ({comment}) => {
    const {author,body,votes} = comment
    return ( 
        <>
            <div>
                <h3>{author}</h3>
                <p>{body}</p>
                <p>votes: {votes}</p>
            </div>  
        </>
     );
}
 
export default CommentCard;