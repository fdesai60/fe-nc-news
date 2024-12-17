import ArticleCard from "./ArticleCard";
const ArticleList = ({articles}) => {
    return ( 
        <ul class = "article-list">
            {articles.map(article=>{
                return <li  class = "article-card" key={article.article_id}>
                        <ArticleCard article={article}/>
                    </li> 
            })}
        </ul>
     );
}
 
export default ArticleList;