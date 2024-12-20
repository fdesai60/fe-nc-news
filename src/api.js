import axios from "axios";


const apiClient = axios.create({
  baseURL: "https://news-lzt1.onrender.com/api",

});

//laoding added
export const getTopics=()=>{
   return apiClient.get("/topics")
  .then(({data}) => {
   return data.topics
  })

}

//loading added
export const getArticles = (topic,sort_by,order)=>{
  return apiClient.get("/articles",{
    params: {
      topic,
      sort_by,
      order
    }
  })
  .then(({data})=>{
       return data.articles
    })
 

}

//loading added
export const getArticleById = (id)=>{
  return apiClient.get(`/articles/${id}`)
  .then(({data})=>{
    return data.article
  })
 
}

//loading added
export const getArticleComments = (id)=>{
  return apiClient.get(`/articles/${id}/comments`)
  .then(({data})=>{
    return data.comments
  })
 
}

//no laoding since optimistic rendering
export const patchVote= (id,inc)=>{
  return apiClient.patch(`/articles/${id}`,{
    "inc_votes": inc
    })
  .then(({data})=>{
    return data.article
  })
 
}

//loading added
export const postComment =(id,username,body)=>{
  return apiClient.post(`/articles/${id}/comments`,{
    username,
    body
  })
  .then(({data})=>{
      return data.comment
  })

}

//loading added
export const deleteComment =(id)=>{
  return apiClient.delete(`/comments/${id}`)

}

//loading added
export const getUsers= ()=>{
  return apiClient.get("/users")
  .then(({data})=>{
  
    return data.users
})
}