import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { useSearchParams } from "react-router-dom";
import ArticleList from "./ArticleList";
const Articles = () => {
    const [articles,setArticles]=useState([])
    const [isLoading, setIsLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get("topic");
    const [sortBy,setSortBy] = useState("created_at")
    const [order,setOrder]=useState("asc")
   
    useEffect(()=>{
       //now make anoter one for asc/desc
       //do the error handling
       //make the corrections how u think they need to be done so if u have a meeting u can ask
       //do anything major u wanted to do in to do list, but not too much coz u wanna dedicate time to getting through every single lecture and fully understnading it
        getArticles(topicQuery,sortBy,order)
        .then(articleData=>{
            setArticles(articleData)
        })
        .catch(err=>{
            console.log(err)
        })
        .finally(() => {
            setIsLoading(false);
        })
   },[topicQuery,sortBy,order])
  
    return (
        <ArticleList order={order} setOrder={setOrder} articles={articles} sortBy={sortBy} setSortBy={setSortBy}/>
     );
}
 
export default Articles;