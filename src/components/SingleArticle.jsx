import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import SingleArtDisp from "./SingleArtDisp";
import SingleArtComments from "./SingleArtComments";
import { getArticleComments } from "../api";
import SingleArtVotes from "./SingleArtVotes";
import Error from "./Error";
import styles from "../css/SingleArticle.module.css"
import { NavLink } from "react-router-dom";
import { Routes,Route } from "react-router-dom";

const SingleArticle = () => {
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError]=useState(null)
    const [singleArticle,setSingleArticle]=useState([]) 
    const [comments,setComments]=useState([])
    const [votes,setVotes]=useState(0)
    const [expand,setExpand]=useState(false)
    const [chosenComSect,setChosenComSect]= useState("view")

   const handleCommentsClick=(e)=>{
        setExpand(curr=>!curr)
   }

   const handleChosen=(optn)=>{
        setChosenComSect(optn)
   }
   
    useEffect(()=>{
        setIsLoading(true)
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
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to={`/articles/${article_id}/read`} >Read</NavLink>
                </li>
                <li>
                     
                    <NavLink
                      to={`/articles/${article_id}/comments`}
                      onClick={handleCommentsClick}
                       >{expand?"Hide dropdown":"Comments"}</NavLink>
                </li>
                <li>
                    <NavLink  to={`/articles/${article_id}/vote`} >Vote</NavLink>
                </li>
            </ul>
        </nav>
       
       
        
        {expand && 
            <div className={styles.expand}>
                <ul>
                  <li>
                   <button onClick={()=>{
                    handleChosen("view")
                   }}>View comments</button>
                  </li>
                  <li>
                    <button onClick={()=>{
                    handleChosen("add")
                   }}>Add Comments</button>
                  </li>
                  <li>
                    <button onClick={()=>{
                    handleChosen("delete")
                   }}>Delete Comment</button>
                  </li>
                </ul>
              </div> }

              {error && <Error error={error} />}    

         <div className={styles.routing}>
            <Routes>
                <Route
                    path="/read"
                    element={<SingleArtDisp singleArticle={singleArticle} />}
                />
                <Route
                    path="/comments"
                    element={<SingleArtComments comments={comments} 
                    chosenComSect={chosenComSect} setComments={setComments} article_id={article_id} />}
                />
                <Route
                    path="/vote"
                    element={<SingleArtVotes votes={votes} setVotes={setVotes} singleArticle={singleArticle} />}
                />
            </Routes>
         </div>

        </>
     );
}
 
export default SingleArticle;




