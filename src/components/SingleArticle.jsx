import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import SingleArtDisp from "./SingleArtDisp";

const SingleArticle = () => {
    const {article_id} = useParams()
    const [singleArticle,setSingleArticle]=useState([]) 
  

    useEffect(()=>{
        getArticleById(article_id)
        .then(singleArticleData=>{
           setSingleArticle(singleArticleData)
        })
    },[article_id])
    return ( 
        <>
         <SingleArtDisp singleArticle={singleArticle}/>
         {/* <SingleArtVotes/>
         <SingleArtComments/> */}
        </>
     );
}
 
export default SingleArticle;