
import TopicCard from "./TopicCard";
const TopicList = ({topics}) => {
  
    return ( 
        <>
          
        <div>
            { <ul>
                {
                    topics.map(topic=>{
                        return <li key ={topic.slug} ><TopicCard topic={topic}/></li>
                    })
                }
            </ul> }
        </div>
       </>
     );
}
 
export default TopicList;