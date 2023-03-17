import { useEffect, useContext, useState } from "react";
import { deleteComment, getAllComments } from "../utils/api";
import { UserContext } from "../context/Users";

import { BsTrash3 } from 'react-icons/bs';

import '../styles/CommentsList.scss';

const binIcon = <BsTrash3 className="bin-icon" />;

function CommentsList({ commentsList, setCommentsList, article_id, setModalIsActive, confirmCommentDelete, setConfirmCommentDelete, setDeleteMsg }) {

  const [deleteCommentId, setDeleteCommentId] = useState(null);
  const [deleteBtnDisabled, setDeleteBtnDisabled] = useState(false);

  const { loggedUser } = useContext(UserContext);


  useEffect(() => {
    setConfirmCommentDelete(false);
    getAllComments(article_id)
      .then(uploadedComments => {
        setCommentsList(uploadedComments);
      });
  }, [article_id]);

  useEffect(() => {
    if (confirmCommentDelete) {
      setDeleteBtnDisabled(true);
      deleteComment(deleteCommentId)
        .then((resStatus) => {
          if (resStatus === 204) {
            getAllComments(article_id)
              .then(uploadedComments => {
                setCommentsList(uploadedComments);
                setConfirmCommentDelete(false);
                setDeleteMsg('Comment Deleted');
                setDeleteBtnDisabled(false);
                setModalIsActive(true);
                setTimeout(() => {
                  setModalIsActive(false);
                  setDeleteMsg('');
                }, 1000);
              });
          }
        });
    }
  }, [confirmCommentDelete, deleteCommentId]);

  const handleCommentDelete = (comment_id) => {
    setModalIsActive(true);
    setDeleteCommentId(comment_id);
  };

  const allCommentsList = commentsList.map(comment => {
    let date = '';
    let time = '';

    if (typeof comment.created_at === 'string') {
      date = comment.created_at.slice(0, 10);
      time = comment.created_at.slice(11, 19);
    }

    return (
      <li key={comment.comment_id}>
        <div className="comment-info">
          <p className="comment-author">{comment.author}</p>
          <p className="comment-date">posted: {date} at {time}</p>
        </div>
        <p className="comment-body">{comment.body}</p>
        <div className="comment-bottom-row">
          <p className="votes">votes: {comment.votes}</p>
          {loggedUser && comment.author === loggedUser.username ?
            <button disabled={deleteBtnDisabled} onClick={() => handleCommentDelete(comment.comment_id)}>{binIcon}</button> : null}
        </div>
      </li>);
  });



  return (
    <div className="commentsList-container">
      <h3 className="comment-header">Comments</h3>
      <ul>
        {allCommentsList}
      </ul>
    </div>
  );
}

export default CommentsList;