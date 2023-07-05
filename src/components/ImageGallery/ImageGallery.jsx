import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';

function ImageGallery ({ pictures }) {
  return (
    <div>
       <ul className={css.ImageGallery}>
  {pictures.map(picture => (
    <ImageGalleryItem key={picture.id} picture={picture}/>
  ))}
</ul>
    </div>
   
  )
}

export default ImageGallery;

ImageGallery.propType = {
  pictures: PropTypes.array,
}
