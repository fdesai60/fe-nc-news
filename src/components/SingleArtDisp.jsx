const SingleArtDisp = ({singleArticle}) => {
      const { title, body,
        article_img_url}=singleArticle
 
    return ( 
        <section>
            <img src={article_img_url} alt="img" />
            <h2>{title}</h2>
            <p>{body}</p>
           
        </section>
     );
}
 
export default SingleArtDisp;