import { useState, useContext } from 'react';
import { UserContext } from "../context/Users";

import '../styles/NewCommentForm.scss';
import { postNewComment } from '../utils/api';

function NewCommentForm({ article_id, setCommentsList }) {

  const [newComment, setNewComment] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const { loggedUser, isLogged } = useContext(UserContext);

  const handleTextChange = (e) => {
    setErrMsg('');
    setNewComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isLogged) {
      return setErrMsg('Only logged users can add comments');
    }
    if (newComment === '') {
      return setErrMsg('Comment field cannot be empty');
    }

    postNewComment(article_id, loggedUser.username, newComment)
      .then(commentFromApi => {
        setSuccessMsg('Comment successfully posted!');
        setTimeout(() => {
          setSuccessMsg('');
        }, 3000);

        setCommentsList(currentList => {
          return [commentFromApi, ...currentList];
        });
      }).catch((err) => {
        return setErrMsg('Something went wrong. Please try again');
      });


    setNewComment('');
    setErrMsg('');
  };

  return (
    <form className="comment-form" onSubmit={handleFormSubmit}>
      <textarea
        name="comment-text"
        id="comment-text"
        rows="10"
        placeholder="what are your thoughts?"
        value={newComment}
        onChange={handleTextChange}
      ></textarea>
      <div className="submit-container">
        <button type="submit">Add Comment</button>
        {(errMsg && <p className='error'>{errMsg}</p>) ||
          (successMsg && <p className='success'>{successMsg}</p>)}
      </div>
    </form>
  );
}

export default NewCommentForm;