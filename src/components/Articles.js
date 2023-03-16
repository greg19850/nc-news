import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';
import { BsArrowDownSquare, BsArrowUpSquare } from 'react-icons/bs';

import ArticleCard from './ArticleCard';

import '../styles/Articles.scss';

const arrowUpIcon = <BsArrowUpSquare className='arrow-icon' />;
const arrowDownIcon = <BsArrowDownSquare className='arrow-icon' />;


function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [arrowIcon, setArrowIcon] = useState(arrowUpIcon);
  const [selectedSortBy, setSelectedSortBy] = useState('');
  const [selectedOrder, setSelectedOrder] = useState('ASC');

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, selectedSortBy, selectedOrder).then(data => {
      setArticles(data);
      setIsLoading(false);
    });
  }, [topic, selectedSortBy, selectedOrder]);

  const handleSelectChange = (e) => {
    setSelectedSortBy(e.target.value);
  };

  const displayArticleCards = articles.map(article => {
    return <ArticleCard key={article.article_id} article={article} />;
  });

  const handleOrder = () => {
    if (selectedOrder === 'ASC') {
      setArrowIcon(arrowDownIcon);
      setSelectedOrder('DESC');
    } else if (selectedOrder === 'DESC') {
      setArrowIcon(arrowUpIcon);
      setSelectedOrder('ASC');
    }
  };

  const loadingMsg = <p className='loading'>Loading Articles...</p>;

  return (
    <div className="articles">
      <div className="sort-field">
        {/* <label htmlFor="sort">Sort Articles:</label> */}
        <select name="sort" id="sort" value={selectedSortBy} onChange={handleSelectChange}>
          <option disabled value="">Sort Articles by...</option>
          <option value="created_at">Date Created</option>
          <option value="title">Title</option>
          <option value="topic">Topic</option>
          <option value="author">Author</option>
          <option value="body">Article Text</option>
          <option value="votes">Votes</option>
        </select>
        <button onClick={handleOrder}>{arrowIcon}</button>
      </div>
      {isLoading ? loadingMsg : displayArticleCards}
    </div>
  );
}

export default Articles;