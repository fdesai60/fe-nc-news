import axios from "axios";


const apiClient = axios.create({
  baseURL: "https://news-lzt1.onrender.com/api",
  timeout: 10000,
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