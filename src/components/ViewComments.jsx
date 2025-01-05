
import styles from "../css/ViewComments.module.css"
import CommentCard from "./CommentCard"
const ViewComments = ({comments}) => {
    
    return ( 
        <div className={styles.viewComments}>
            <ul className={styles.dispCommentsList}>
                {
                comments.map((comment)=>{
                    return <li className={styles.commentLi} key={comment.comment_id}>
                    <CommentCard comment={comment}/>
                    </li>
                    })
            
                }
            </ul>
        </div>

     );
}
 
export default ViewComments;