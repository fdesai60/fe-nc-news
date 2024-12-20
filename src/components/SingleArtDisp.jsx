const SingleArtDisp = ({singleArticle}) => {
      const { title, body}=singleArticle
    return ( 
        <section>
            <h2>{title}</h2>
            <p>{body}</p>
        </section>
     );
}
 
export default SingleArtDisp;