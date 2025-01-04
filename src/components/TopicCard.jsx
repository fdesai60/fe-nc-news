import { Link } from "react-router-dom";
import styles from "../css/TopicCard.module.css"

const TopicCard = ({topic}) => {

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
                        <h3>{topic.slug}</h3>
                        <p>{topic.description}</p> 
                    </Link>
                    
                </>
            }
         </div>
     );
}
 
export default TopicCard;