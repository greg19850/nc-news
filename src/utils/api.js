import axios from "axios";

const articlesApi = axios.create({
  baseURL: 'https://nc-backend-project-nc-news.onrender.com/api'
});

export const getArticles = () => {
  return articlesApi.get('/articles').then(({ data }) => {
    return data.articles;
  });
};

export const getSingleArticle = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getAllComments = (article_id) => {
  return articlesApi.get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const updateArticleVotes = (article_id, newVote) => {
  return articlesApi.patch(`/articles/${article_id}`, {
    inc_votes: newVote
  }).then(({ data }) => {
    return data.article;
  });
};

export const getUsers = () => {
  return articlesApi.get('/users')
    .then(({ data }) => {
      return data.users;
    });
};

export const postNewComment = (article_id, username, comment_text) => {

  return articlesApi.post(`/articles/${article_id}/comments`, {
    author: username, body: comment_text
  }).then(({ data }) => {
    return data.comment;
  });
};