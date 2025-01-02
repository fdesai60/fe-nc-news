import { useState } from "react"
import { patchVote } from "../api"
const SingleArtVotes = ({votes, setVotes,singleArticle}) => {
    const [hasVoted,setHasVoted]= useState(false)
    const handleVoteInc=()=>{
     
        setVotes(currCount=>currCount+1)
        patchVote(singleArticle.article_id,1)
        .then((patchedArticle) => {
            setVotes(patchedArticle.votes); 
            setHasVoted(true)
        })
        .catch(()=>{
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
        <div>
            <h2>Votes</h2>
            {hasVoted?<button disabled>Thanks for voting!</button>:<button onClick={handleVoteInc}>+</button>}
            <h3>{votes}</h3>
            {hasVoted?<button disabled>Thanks for voting!</button>:<button onClick={handleVoteInc}>-</button>}
          </div>
     );
}
 
export default SingleArtVotes;