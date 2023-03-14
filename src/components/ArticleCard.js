import { Link } from 'react-router-dom';

import '../styles/ArticleCard.css';

function ArticleCard({ article }) {
  const { article_id, title, topic, author, body, comment_count, article_img_url, } = article;

  return (
    <div className="article-card">
      < div className="article-info" >
        <p className='topic'>{topic}</p>
        <Link to={`/articles/${article_id}`}><h3>{title}</h3></Link>
        <p className='text-preview'><span>{body}</span></p>
        <p>By: {author}</p>
        <p>comments: {comment_count}</p>
      </ div>
      <div className="img-container">
        <img src={article_img_url} alt={title} />
      </div>
    </div >
  );
}

export default ArticleCard;