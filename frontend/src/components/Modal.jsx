import "./Modal.css"

function Modal({onClose, onDelete, offDay}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-text">Choose an action</p>
        <button className="option-button delete" onClick={onDelete}>Delete</button>
        <button className="option-button rest" onClick={offDay}>Day off</button>
        <button className="option-button cancel" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
