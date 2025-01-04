import { Link } from "react-router-dom";
const ArticleCard = ({article}) => {
    const {article_id,article_img_url,author,title,topic,votes}=article
    
    return ( 
       <>
        <Link to ={`/articles/${article_id}`} >
            <h3>{title.toLowerCase()}</h3>
            <img src={article_img_url} alt="img" />
            <p>Author: {author}</p>
            <p>Topic: {topic}</p>
            <p>Votes: {votes}</p>
           
        </Link>
            
          
        </>

     );
}
 
export default ArticleCard;