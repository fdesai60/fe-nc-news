import styles from "../css/SingleArtDisp.module.css"
const SingleArtDisp = ({singleArticle}) => {
      const { title, body,
        article_img_url}=singleArticle
 
    return ( 
        <div className={styles.disp}>
            <h2>{title}</h2>
            <div>
                <img className={styles.img} src={article_img_url} alt="img" />
                <p>{body}</p>
            </div>
           
        </div>
     );
}
 
export default SingleArtDisp;