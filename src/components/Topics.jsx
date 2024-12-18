import { useState } from "react";
import { getTopics } from "../api";
import TopicList from "./TopicList";
import { useEffect } from "react";
import { useContext } from "react";
import { UsernameContext } from "../contexts/UsernameProvider";
   
const Topics = () => {
    const{username,setUsername}=useContext(UsernameContext)
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
            <h2>{username?`Hey ${username},`:""} Pick a topic to read!</h2>
            <TopicList topics={topics}/>
        </div>
     );
}
 
export default Topics;