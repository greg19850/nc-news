import { Link } from 'react-router-dom';

import '../styles/ArticleCard.scss';

function ArticleCard({ article }) {
  const { article_id, title, topic, author, body, comment_count, article_img_url, votes, created_at } = article;

  let date = '';
  let time = '';
  if (typeof created_at === 'string') {
    date = created_at.slice(0, 10);
    time = created_at.slice(11, 19);
  }
  return (
    <div className="article-card">
      < div className="article-info" >
        <p className='topic'>{topic}</p>
        <Link to={`/articles/${article_id}`}><h3>{title}</h3></Link>
        <p className='text-preview'><span>{body}</span></p>
        <p className='author'>By: {author}</p>
        <p className='time-created'>Created: <span>{date} </span> - {time}</p>
        <div className="comments-and-votes">
          <p className='comments'>comments: {comment_count}</p>
          <p className='votes'>votes: {votes}</p>
        </div>
      </ div>
      <div className="img-container">
        <img src={article_img_url} alt={title} />
      </div>
    </div >
  );
}

export default ArticleCard;