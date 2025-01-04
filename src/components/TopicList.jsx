import TopicCard from "./TopicCard";
import styles from '../css/TopicList.module.css'
const TopicList = ({topics}) => {
  
    return (    
        <div className={styles.topicContainer}>
            { <ul>
                {
                    topics.map(topic=>{
                        return <li key ={topic.slug} ><TopicCard topic={topic}/></li>
                    })
                }
            </ul> }
        </div>
    
     );
}
 
export default TopicList;