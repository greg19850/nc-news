import { useState, useContext } from 'react';
import { UserContext } from "../context/Users";

import '../styles/NewCommentForm.scss';

function NewCommentForm({ setCommentText }) {

  const [newComment, setNewComment] = useState('');
  const [errMsg, setErrMsg] = useState('');


  const { isLogged } = useContext(UserContext);

  const handleTextChange = (e) => {
    setErrMsg('');
    setNewComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isLogged) {
      return setErrMsg('Only logged in users can add comments');
    }
    if (newComment === '') {
      return setErrMsg('Comment field cannot be empty');
    }

    setCommentText(newComment);
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
        {errMsg && <p className='error'>{errMsg}</p>}
      </div>
    </form>
  );
}

export default NewCommentForm;