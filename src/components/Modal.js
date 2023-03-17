import '../styles/Modal.scss';

function Modal({ ModalIsActive, setModalIsActive, setConfirmCommentDelete, deleteMsg, msgClass }) {

  const handleCommentDeleteConfirm = () => {
    setConfirmCommentDelete(true);
    setModalIsActive(false);
  };

  const handleCommentDeleteCancel = () => {
    setConfirmCommentDelete(false);
    setModalIsActive(false);
  };

  return (
    <div className="modal">
      {deleteMsg ?
        <div className="modal-content"><h3 className={msgClass}>{deleteMsg}</h3></div>
        : <div className="modal-content">
          <h3>Are you sure you want to delete your comment?</h3>
          <div className="buttons-container">
            <button className='confirm' onClick={handleCommentDeleteConfirm}>Yes, delete comment</button>
            <button className='cancel' onClick={handleCommentDeleteCancel}>No, I changed my mind</button>
          </div>
        </div>}
    </div>
  );
}

export default Modal;