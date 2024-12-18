import axios from "axios";


const apiClient = axios.create({
  baseURL: "https://news-lzt1.onrender.com/api",

});

export const getTopics=()=>{
   return apiClient.get("/topics")
  .then(({data}) => {
   return data.topics
  })
  .catch((error) => {
    console.log(error)
  });
}

export const getArticles = (topic)=>{
  return apiClient.get("/articles",{
    params: {
      topic
    }
  })
  .then(({data})=>{
       return data.articles
    })
    .catch((error) => {
      console.log(error)
    });
}


export const getArticleById = (id)=>{
  return apiClient.get(`/articles/${id}`)
  .then(({data})=>{
    return data.article
  })
  .catch((error) => {
    console.log(error)
  });
}


export const getArticleComments = (id)=>{
  return apiClient.get(`/articles/${id}/comments`)
  .then(({data})=>{
    return data.comments
  })
  .catch((error) => {
    console.log(error)
  });
}


export const patchVote= (id,inc)=>{
  return apiClient.patch(`/articles/${id}`,{
    "inc_votes": inc
    })
  .then(({data})=>{
    return data.article
  })
  .catch((error) => {
    console.log(error)
  });
}

export const postComment =(id,username,body)=>{
  return apiClient.post(`/articles/${id}/comments`,{
    username,
    body
  })
  .then(({data})=>{
  
      return data.comment
  })
  .catch((error) => {
    console.log(username)
    console.log(error)
  });
}
