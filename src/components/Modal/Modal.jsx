import React, { Component } from "react";
import css from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown)
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();      
    }
  }

  overlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();      
    }
  }

  render () {
    const { largeImageURL, imageAlt } = this.props.image;

    return (
      <div
      className={css.Overlay}
      onClick={this.overlayClick}>
  <div class={css.Modal}>
    <img 
    src={largeImageURL} 
    alt={imageAlt} />
  </div>
</div>
    );
  }
};

export default Modal;

Modal.propType = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
};

