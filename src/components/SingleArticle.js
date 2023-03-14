import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaRegCommentAlt } from 'react-icons/fa';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import CommentsList from "./CommentsList";
import { getSingleArticle } from "../utils/api";

import '../styles/SingleArticle.scss';

const commentIcon = <FaRegCommentAlt className="comment-icon" />;
const thumbUpIcon = <FiThumbsUp className="upVote-icon" />;
const thumbDownIcon = <FiThumbsDown className="downVote-icon" />;


function SingleArticle() {

  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [commentsList, setCommentsList] = useState([]);

  const { title, topic, author, body, created_at, votes, article_img_url, comment_count } = singleArticle;

  let { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id)
      .then((selectedArticle) => {
        setIsLoading(false);
        setSingleArticle(selectedArticle);
      });
  }, [article_id]);


  let date = '';
  let time = '';
  if (typeof created_at === 'string') {
    date = created_at.slice(0, 10);
    time = created_at.slice(11, 16);
  }
  const loadingMsg = <p className='loading'>Loading Article...</p>;

  return (
    isLoading ?
      loadingMsg :
      <div className="single-article-container">
        <div className="single-article">
          <p className="topic">{topic}</p>
          <h3 className="article-header">{title}</h3>
          <div className="img-container">
            <img src={article_img_url} alt={title} />
          </div>
          <p>By: {author}</p>
          <p>{date} {time}</p>
          <p className="article-body">{body}</p>
          <div className="votes-container">
            <p>Votes:</p>
            <p>{votes}</p>
            <p>{thumbUpIcon}</p>
            <p>{thumbDownIcon}</p>
          </div>
          <div className="comments-container">
            <p><span>{commentIcon}</span>{comment_count} comments</p>
            <div>Comment Form Component</div>
            <CommentsList commentsList={commentsList} setCommentsList={setCommentsList} article_id={article_id} />
          </div>
        </div>
      </div>
  );
}

export default SingleArticle;