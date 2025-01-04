import styles from "../css/SingleArtDisp.module.css"
const SingleArtDisp = ({singleArticle}) => {
      const { title, body,
        article_img_url}=singleArticle
 
    return ( 
        <div className={styles.disp}>
            <img className={styles.img} src={article_img_url} alt="img" />
            <h2>{title}</h2>
            <p>{body}</p>
           
        </div>
     );
}
 
export default SingleArtDisp;