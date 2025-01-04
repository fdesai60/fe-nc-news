import { Link } from "react-router-dom";
import styles from "../css/TopicCard.module.css"

const TopicCard = ({topic}) => {
    const formattedSlug = topic.slug.split("")[0].toUpperCase() + topic.slug.toLowerCase().slice(1)
    return (
         <div className={styles.eachTopic}>
            {
                topic.slug === "All articles"
            ? <>
                    <Link  to = "/articles">
                        <h3>{topic.slug}</h3>
                        <p>{topic.description}</p> 
                    </Link>
                </>
                : 
                <>
                    <Link className={styles.topic} to = {`/articles?topic=${topic.slug}`}> 
                        <h3>{formattedSlug}</h3>
                        <p>{topic.description}</p> 
                    </Link>
                    
                </>
            }
         </div>
     );
}
 
export default TopicCard;