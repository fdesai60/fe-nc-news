import CreateComment from "./CreateComment";
import DeleteComments from "./DeleteComments";
import ViewComments from "./viewComments";
const SingleArtComments = ({comments,setComments,article_id,chosenComSect}) => {
 
  return ( 
        <div>
            {chosenComSect=== "view" && <ViewComments comments={comments} />}
            {chosenComSect=== "add" && <CreateComment comments={comments} article_id={article_id} setComments={setComments}/>}
            {chosenComSect=== "delete" && <DeleteComments  comments={comments}  />}
        </div>    
    
);
}
 
export default SingleArtComments;