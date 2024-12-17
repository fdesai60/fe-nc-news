import { Link } from "react-router-dom";
const ArticleCard = ({article}) => {
    const {article_id,article_img_url,author,comment_count,created_at,title,topic,votes}=article
    
    return ( 
       <>
        <Link to ={`/articles/${article_id}`} ><h2>{title}</h2></Link>
            
           <img src={article_img_url} alt="img" />
            <p>Author: {author}</p>
            <p>Topic: {topic}</p>
            <p>Votes: {votes}</p>
        </>

     );
}
 
export default ArticleCard;