import axios from "axios";


const apiClient = axios.create({
  baseURL: "https://news-lzt1.onrender.com/api",

});

export const getTopics=()=>{
   return apiClient.get("/topics")
  .then(({data}) => {
   return data.topics
  })

}

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


export const getArticleById = (id)=>{
  return apiClient.get(`/articles/${id}`)
  .then(({data})=>{
    return data.article
  })
 
}


export const getArticleComments = (id)=>{
  return apiClient.get(`/articles/${id}/comments`)
  .then(({data})=>{
    return data.comments
  })
 
}


export const patchVote= (id,inc)=>{
  return apiClient.patch(`/articles/${id}`,{
    "inc_votes": inc
    })
  .then(({data})=>{
    return data.article
  })
 
}

export const postComment =(id,username,body)=>{
  return apiClient.post(`/articles/${id}/comments`,{
    username,
    body
  })
  .then(({data})=>{
  
      return data.comment
  })

}

export const deleteComment =(id)=>{
  return apiClient.delete(`/comments/${id}`)

}

export const getUsers= ()=>{
  return apiClient.get("/users")
  .then(({data})=>{
  
    return data.users
})
}