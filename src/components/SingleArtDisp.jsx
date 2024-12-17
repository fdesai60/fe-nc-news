const SingleArtDisp = ({singleArticle}) => {
      const { title, topic, author, body, created_at, votes, article_img_url, comment_count}=singleArticle
    return ( 
        <section>
            <h2>{title}</h2>
            <p>{body}</p>
        </section>
     );
}
 
export default SingleArtDisp;