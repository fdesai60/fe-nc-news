import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import SingleArtDisp from "./SingleArtDisp";
import SingleArtComments from "./SingleArtComments";
import { getArticleComments } from "../api";
import SingleArtVotes from "./SingleArtVotes";

const SingleArticle = () => {
    const {article_id} = useParams()
    const [singleArticle,setSingleArticle]=useState([]) 
    const [comments,setComments]=useState([])
  

    useEffect(()=>{
        getArticleById(article_id)
        .then(singleArticleData=>{
           setSingleArticle(singleArticleData)
        })

        getArticleComments(article_id)
        .then(comments=>{
            setComments(comments)
        })

    },[article_id])
    return ( 
        <>
         <SingleArtDisp singleArticle={singleArticle}/>
         {/* <SingleArtVotes/> */}
         <SingleArtComments comments={comments}/>
        </>
     );
}
 
export default SingleArticle;