import { patchVote } from "../api"
const SingleArtVotes = ({votes, setVotes,singleArticle}) => {
    const handleVoteInc=()=>{
        setVotes(currCount=>currCount+1)
        patchVote(singleArticle.article_id,1)
        .catch(currCount=>currCount-1)
    }

    const handleVoteDec=()=>{
        setVotes(currCount=>currCount-1)
        patchVote(singleArticle.article_id,-1)
        .catch(currCount=>currCount+1)
        
    }
    
    
    return ( 
        <div>
            <h2>Votes</h2>
            <button onClick={handleVoteInc}>+</button>
            <h3>{votes}</h3>
            <button onClick={handleVoteDec} >-</button>
        
          </div>
     );
}
 
export default SingleArtVotes;