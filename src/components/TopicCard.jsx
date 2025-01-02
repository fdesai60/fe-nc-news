import { Link } from "react-router-dom";

const TopicCard = ({topic}) => {

    return (
         <>
            {
                topic.slug === "All articles"
            ? <>
                    <Link to = "/articles">
                        <h2>{topic.slug}</h2>
                        <p>{topic.description}</p> 
                    </Link>
                </>
                : 
                <>
                    <Link to = {`/articles?topic=${topic.slug}`}> 
                        <h2>{topic.slug}</h2>
                        <p>{topic.description}</p> 
                    </Link>
                    
                </>
            }
         </>
     );
}
 
export default TopicCard;