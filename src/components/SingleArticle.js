import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../context/Users";
import { getSingleArticle, updateArticleVotes } from "../utils/api";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";
import Modal from "./Modal";

import { FaRegCommentAlt } from 'react-icons/fa';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';


import '../styles/SingleArticle.scss';

const commentIcon = <FaRegCommentAlt className="comment-icon" />;
const thumbUpIcon = <FiThumbsUp className="upVote-icon" />;
const thumbDownIcon = <FiThumbsDown className="downVote-icon" />;


function SingleArticle() {

  const [singleArticle, setSingleArticle] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [commentsList, setCommentsList] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const [modalIsActive, setModalIsActive] = useState(false);
  const [confirmCommentDelete, setConfirmCommentDelete] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState('');
  const [msgClass, setMsgClass] = useState('');

  const { title, topic, author, body, created_at, votes, article_img_url, comment_count } = singleArticle;

  const { alreadyVoted, setAlreadyVoted, loggedUser, isLogged } = useContext(UserContext);

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

  const updateVote = (newVote) => {
    if (!isLogged) {
      return setErrMsg('Please log in. Voting available only for logged users');
    }

    if (alreadyVoted.some(user => {
      return user.username === loggedUser.username && user.article === article_id;
    })) {
      return setErrMsg('This user already voted!');
    } else {
      setAlreadyVoted((currentState) => {
        const userInfo = {
          username: loggedUser.username,
          article: article_id
        };
        return [...currentState, userInfo];
      });
    };

    setSingleArticle((currentArticle) => {
      return { ...currentArticle, votes: currentArticle.votes + newVote };
    });

    updateArticleVotes(article_id, newVote).catch((err) => {
      setErrMsg('Something went wrong, please try again.');
      setSingleArticle((currentArticle) => {
        return { ...currentArticle, votes: currentArticle.votes - newVote };
      });
    });
  };

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
            <p>Votes: {votes}</p>
            <button className="vote-up" onClick={() => updateVote(1)}>{thumbUpIcon}</button>
            <button className="vote-down" onClick={() => updateVote(-1)}>{thumbDownIcon}</button>
            {errMsg && <p className="error">{errMsg}</p>}
          </div>
          <div className="comments-container">
            <p><span>{commentIcon}</span>{comment_count} comments</p>
            <NewCommentForm article_id={article_id} setCommentsList={setCommentsList} />
            <CommentsList
              commentsList={commentsList}
              setCommentsList={setCommentsList}
              article_id={article_id}
              setModalIsActive={setModalIsActive}
              confirmCommentDelete={confirmCommentDelete}
              setConfirmCommentDelete={setConfirmCommentDelete}
              setDeleteMsg={setDeleteMsg}
              setMsgClass={setMsgClass}
            />
          </div>
        </div>
        {modalIsActive &&
          <Modal
            setConfirmCommentDelete={setConfirmCommentDelete}
            modalIsActive={modalIsActive}
            setModalIsActive={setModalIsActive}
            deleteMsg={deleteMsg} s
            etDeleteMsg={setDeleteMsg}
            msgClass={msgClass} />}
      </div>
  );
};

export default SingleArticle;