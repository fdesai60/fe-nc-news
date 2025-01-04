import ArticleCard from "./ArticleCard";
import styles from "../css/ArticleList.module.css"
const ArticleList = ({order,setOrder,articles,setSortBy,sortBy}) => {
   
    
    const handleSortBy=(e)=>{
        setSortBy(e.target.value)
    }

    const handleOrder=(e)=>{
        setOrder(e.target.value)
    }

    return ( 
        <>
           <form >
                <label htmlFor="sort-articles">Sort your articles by:</label>
                <select name="sort-articles" id="sort-articles" value ={sortBy} onChange={handleSortBy}>
                    <option value="created_at">Date</option>
                    <option value="author">Author</option> 
                    <option value="votes">Votes</option>   
                </select>
                
                <label htmlFor="order-articles">Order:</label>
                <select name="order-articless" id="order-articles" value ={order} onChange={handleOrder}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option> 
                </select>
            </form>
           
        <ul className = {styles.articleList}>
            {articles.map(article=>{
                return <li  className = {styles.articleCard} key={article.article_id}>
                        <ArticleCard article={article}/>
                    </li> 
            })}
        </ul>

        </>
     );
}
 
export default ArticleList;