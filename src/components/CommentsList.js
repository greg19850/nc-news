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
    return (
      <li key={comment.comment_id}>
        <p className="comment-body">{comment.body}</p>
        <p className="comment-author">{comment.author}</p>
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