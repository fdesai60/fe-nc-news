import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import SingleArtDisp from "./SingleArtDisp";
import SingleArtComments from "./SingleArtComments";
import { getArticleComments } from "../api";
import SingleArtVotes from "./SingleArtVotes";
import Error from "./Error";
import styles from "../css/SingleArticle.module.css"

const SingleArticle = () => {
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError]=useState(null)
    const [singleArticle,setSingleArticle]=useState([]) 
    const [comments,setComments]=useState([])
    const [votes,setVotes]=useState(0)

    useEffect(()=>{
        Promise.all([getArticleById(article_id),getArticleComments(article_id)])
        .then(([singleArticleData,comments])=>{
            setError(null)
            setSingleArticle(singleArticleData)
            setVotes(singleArticleData.votes)
            setComments(comments)
        })
         .catch(err=>{
            setError(err.message)
        })
        .finally(() => {
            setIsLoading(false);
        })


    },[article_id])

  
    return ( 
        <>
        {isLoading&&<p>Loading...</p> }
        {error && <Error error={error} />}
        <div className={styles.singleArticleContainer}>
            <div>
                <SingleArtDisp singleArticle={singleArticle}/>
                <SingleArtVotes  votes={votes} setVotes={setVotes} singleArticle={singleArticle}/>
            </div>
            <SingleArtComments  article_id={article_id} comments={comments} setComments={setComments}/>
         </div>

        </>
     );
}
 
export default SingleArticle;