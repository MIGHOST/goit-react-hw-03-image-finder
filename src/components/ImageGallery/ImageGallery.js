import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, onImgClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(image => (
        <ImageGalleryItem key={image.id} {...image} onImgClick={onImgClick} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGallery;
