import { useState } from "react"
import { patchVote } from "../api"
import Error from "./Error"
import styles from "../css/SingleArtVotes.module.css"

const SingleArtVotes = ({votes, setVotes,singleArticle}) => {
    const [hasVoted,setHasVoted]= useState(false)
    const [error,setError]=useState(null)

  
    const handleVoteInc=()=>{
     
        setVotes(currCount=>currCount+1)
        patchVote(singleArticle.article_id,1)
        .then((patchedArticle) => {
            setError(null)
            setVotes(patchedArticle.votes); 
            setHasVoted(true)
        })
        .catch((err)=>{
            setError(err.message)
            setVotes((currCount) => currCount - 1)
        }
        ) 
       
    }
   
    const handleVoteDec=()=>{
   
        setVotes(currCount=>currCount-1)
        patchVote(singleArticle.article_id,-1)
        .then((patchedArticle) => {
            setVotes(patchedArticle.votes); 
            setHasVoted(true)
        })
        .catch(() => {
            setVotes((currCount) => currCount + 1)
            
          });
        
    }
    
    
    return ( 
        <>
            {error&& <Error error={error}/>}
            <div>
                <div className={styles.voteContainer}>
                <button disabled={hasVoted}
                        onClick={handleVoteInc}>+
                </button>
                <h3>{votes}</h3>
                <button disabled={hasVoted}
                        onClick={handleVoteDec}>-
                    </button>
                </div>
            </div>
          </>
     );
}
 
export default SingleArtVotes;