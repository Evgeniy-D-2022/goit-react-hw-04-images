import React, { useEffect } from "react";
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ onClose, children }) => {
  useEffect(()=> {
    window.addEventListener('keydown', keyDown)
    return () =>{
      window.removeEventListener('keydown', keyDown)
    }
  });

  const keyDown = e => {
    if (e.code === 'Escape') {
     onClose();      
    }
  }

  const overlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();      
    }
  }

    return (
      <div
      className={css.Overlay}
      onClick={overlayClick}>
  <div className={css.Modal} onClick={onClose}>
        {children}
         </div>
         {/* <div className={css.Modal}>{picture}</div> */}
  </div>
    );
  };

// class Modal extends Component {

//   componentDidMount() {
//     window.addEventListener('keydown', this.keyDown)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.keyDown)
//   }

//   keyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();      
//     }
//   }

//   overlayClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();      
//     }
//   }

//   render () {
//     const { largeImageURL, imageAlt } = this.props.image;

//     return (
//       <div
//       className={css.Overlay}
//       onClick={this.overlayClick}>
//   <div className={css.Modal}>
//     <img 
//     src={largeImageURL} 
//     alt={imageAlt} />
//   </div>
// </div>
//     );
//   }
// };

export default Modal;

Modal.propType = {
  onClose: PropTypes.func,
  // picture: PropTypes.object,
};

