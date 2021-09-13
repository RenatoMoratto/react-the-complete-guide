import ReactDOM from 'react-dom';

import style from './Modal.module.css';

function Backdrop(props) {
  return <div className={style.backdrop} onClick={props.onClose} />;
}

function ModalOverlay({ children }) {
  return (
    <div className={style.modal}>
      <div className={style.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

function Modal({ children, ...props }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
