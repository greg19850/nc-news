import axios from "axios";

const articlesApi = axios.create({
  baseURL: 'https://nc-backend-project-nc-news.onrender.com/api'
});

export const getCategories = () => {
  return articlesApi.get('/topics').then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = () => {
  return articlesApi.get('/articles').then(({ data }) => {
    return data.articles;
  });
};