import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";

import ArticleCard from './ArticleCard';

function SortedArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic).then(data => {
      setArticles(data);
      setIsLoading(false);
    });
  }, [topic]);

  const displayArticleCards = articles.map(article => {
    return <ArticleCard key={article.article_id} article={article} />;
  });

  const loadingMsg = <p className='loading'>Loading Articles...</p>;
  return (
    <div className="sorted-articles">
      {isLoading ? loadingMsg : displayArticleCards}
    </div>
  );
}

export default SortedArticles;