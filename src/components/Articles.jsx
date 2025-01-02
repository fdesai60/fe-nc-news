import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { useSearchParams } from "react-router-dom";
import ArticleList from "./ArticleList";
import Error from "./Error";
const Articles = () => {
    const [articles,setArticles]=useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError]=useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get("topic");
    const [sortBy,setSortBy] = useState("created_at")
    const [order,setOrder]=useState("asc")
   
    useEffect(()=>{
        setIsLoading(true)
        getArticles(topicQuery,sortBy,order)
        .then(articleData=>{
            setArticles(articleData)
            setError(null)
        })
        .catch((err)=>{
            setError(err.message)
        })
        .finally(() => {
            setIsLoading(false);
        })
   },[topicQuery,sortBy,order])
  

    return (
        <>
        {isLoading && <p>Loading...</p> }
        {error&&<Error err ={error}/>}
     <ArticleList order={order} setOrder={setOrder} articles={articles} sortBy={sortBy} setSortBy={setSortBy} />
        </>
    )
}
 
export default Articles;