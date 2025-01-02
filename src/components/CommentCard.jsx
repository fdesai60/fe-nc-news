const CommentCard = ({comment}) => {
    const {author,body} = comment
    return ( 
        <>
            <div>
                <h3>{author}</h3>
                <p>{body}</p>
            </div>  
        </>
     );
}
 
export default CommentCard;