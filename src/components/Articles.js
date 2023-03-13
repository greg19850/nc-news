import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';

import ArticleCard from './ArticleCard';

import '../styles/Articles.css';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then(data => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);

  const displayArticleCards = articles.map(article => {
    return <ArticleCard key={article.article_id} article={article} />;
  });

  const loadingMsg = <p className='loading'>Loading Articles...</p>;

  return (
    <div className="articles">
      {isLoading ? loadingMsg : displayArticleCards}
    </div>
  );
}

export default Articles;