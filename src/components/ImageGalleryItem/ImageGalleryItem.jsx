import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const  ImageGalleryItem =({ picture }) => {
  const [showModal, setShowModal] = useState(false);
  
  const onModal = () => {
    setShowModal(showModal => (showModal = !showModal))
  }
 
    return (
      <li className={css.ImageGalleryItem}>
    <img 
    className={css.ImageGalleryItem_image}
    src={picture.webformatURL} 
    alt={picture.tags}
    onClick={onModal}
     />
     {showModal && 
     (<Modal onClose={onModal}>
         <img 
         src={picture.largeImageURL} 
        alt={picture.tags}/>
         </Modal>)}
  </li>
    )
  };
  

export default ImageGalleryItem;

ImageGalleryItem.propType = {
  picture: PropTypes.object,
}




