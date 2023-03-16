import { useEffect } from "react";
import { getAllComments } from "../utils/api";

import '../styles/CommentsList.scss';

function CommentsList({ commentsList, setCommentsList, article_id }) {
  useEffect(() => {


    getAllComments(article_id)
      .then(uploadedComments => {
        setCommentsList(uploadedComments);
      });
  }, [article_id]);

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
        <p className="votes">votes: {comment.votes}</p>
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