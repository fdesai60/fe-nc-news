import { useState } from "react";
import { getTopics } from "../api";
import TopicList from "./TopicList";
import { useEffect } from "react";
const Topics = () => {
    const [topics,setTopics] = useState([])
    const [err,setErr]=useState(null)

   

   useEffect(()=>{
    getTopics()
    .then((topicData)=>{
        const topicCalledAllIncl= [{slug: 'All articles', description: 'Choose from any topic'}, ...topicData]
     
        setTopics(topicCalledAllIncl)
  
   })
   .catch((err)=>{
    setErr(err)
   })
   },[])
    return ( 
 
        <div>
            <h2>Please select a topic/view all articles</h2>
            <TopicList topics={topics}/>
        </div>
     );
}
 
export default Topics;