import { useState } from "react";
import { getTopics } from "../api";
import TopicList from "./TopicList";
import { useEffect } from "react";
import { useContext } from "react";
import { UsernameContext } from "../contexts/UsernameProvider";
import Error from "./Error";

const Topics = () => {
    const{username}=useContext(UsernameContext)
    const [isLoading, setIsLoading] = useState(true);
    const [topics,setTopics] = useState([])
    const [error,setError]=useState(null)

   

   useEffect(()=>{
    getTopics()
    .then((topicData)=>{
        const topicCalledAllIncl= [{slug: 'All articles', description: 'Choose from any topic'}, ...topicData]
     
        setTopics(topicCalledAllIncl)
        setError(null)
  
   })
   .catch((err)=>{
    setError(err.message)
   })
   .finally(()=>{
    setIsLoading(false)
   })
   },[])
    return ( 
        <>
            {error&& <Error err={error}/>}
            {isLoading&&<p>Loading...</p> }
            <div>
                <h2>{`Hey ${username},`} Pick a topic to read!</h2>
                <TopicList topics={topics}/>
            </div>
        </>
     );
}
 
export default Topics;