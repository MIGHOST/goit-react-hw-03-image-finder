import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onImgClick }) => (
  <li
    className={styles.ImageGalleryItem}
    onClick={() => onImgClick(largeImageURL)}
  >
    <img
      src={webformatURL}
      alt="img"
      className={styles.ImageGalleryItem_image}
    />
  </li>
);

ImageGalleryItem.propType = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
