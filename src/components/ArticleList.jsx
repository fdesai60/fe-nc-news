import ArticleCard from "./ArticleCard";
const ArticleList = ({articles}) => {
    return ( 
        <ul className = "article-list">
            {articles.map(article=>{
                return <li  className = "article-card" key={article.article_id}>
                        <ArticleCard article={article}/>
                    </li> 
            })}
        </ul>
     );
}
 
export default ArticleList;