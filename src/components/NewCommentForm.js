import { useState } from 'react';
import '../styles/NewCommentForm.scss';

function NewCommentForm({ setCommentText }) {

  const [newComment, setNewComment] = useState('');
  const [errMsg, setErrMsg] = useState(false);


  const handleTextChange = (e) => {
    setErrMsg(false);
    setNewComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (newComment === '') {
      return setErrMsg(true);
    }

    setCommentText(newComment);
    setNewComment('');
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
        {errMsg && <p className='error'>Comment field cannot be empty</p>}
      </div>
    </form>
  );
}

export default NewCommentForm;