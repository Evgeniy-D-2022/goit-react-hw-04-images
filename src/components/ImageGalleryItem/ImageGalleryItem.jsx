import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class  ImageGalleryItem extends Component {
  state = {
    showModal: false,
  }

  onModal = () => {
    this.setState(({showModal}) => ({showModal: !showModal}))
  }
  render () {
    const { picture } = this.props;
    const { webformatURL, tags } = picture;

    return (
      <li className={css.ImageGalleryItem}>
    <img 
    className={css.ImageGalleryItem_image}
    src={webformatURL} 
    alt={tags}
    onClick={this.onModal}
     />
     {this.state.showModal && <Modal onClose={this.onModal} image={picture}/>}
  </li>
    )
  }
  }
 
  

export default ImageGalleryItem;

ImageGalleryItem.propType = {
  webformatURL: PropTypes.object,
}




