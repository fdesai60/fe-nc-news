import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { useSearchParams } from "react-router-dom";
import ArticleList from "./ArticleList";
const Articles = () => {
    const [articles,setArticles]=useState([])
    const [isLoading, setIsLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get("topic");
   
    useEffect(()=>{
        getArticles(topicQuery)
        .then(articleData=>{
            setArticles(articleData)
        })
        .catch(err=>{
            console.log(err)
        })
        .finally(() => {
            setIsLoading(false);
        })
   },[])
  
    return (
        <ArticleList articles={articles}/>
     );
}
 
export default Articles;