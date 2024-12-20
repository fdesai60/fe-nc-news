import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import SingleArtDisp from "./SingleArtDisp";
import SingleArtComments from "./SingleArtComments";
import { getArticleComments } from "../api";
import SingleArtVotes from "./SingleArtVotes";

const SingleArticle = () => {
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [singleArticle,setSingleArticle]=useState([]) 
    const [comments,setComments]=useState([])
    const [votes,setVotes]=useState(0)

    useEffect(()=>{
        Promise.all([getArticleById(article_id),getArticleComments(article_id)])
        .then(([singleArticleData,comments])=>{
            setSingleArticle(singleArticleData)
            setVotes(singleArticleData.votes)
            setComments(comments)
        })
         .catch(err=>{
            console.log(err)
        })
        .finally(() => {
            setIsLoading(false);
        })


    },[article_id])

    if(isLoading){
        return <p>Loading...</p> 
    }

    return ( 
        <>
         <SingleArtDisp singleArticle={singleArticle}/>
         <SingleArtVotes votes={votes} setVotes={setVotes} singleArticle={singleArticle}/>
         <SingleArtComments article_id={article_id} comments={comments} setComments={setComments}/>
         

        </>
     );
}
 
export default SingleArticle;