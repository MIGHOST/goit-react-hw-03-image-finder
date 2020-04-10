import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from '../Spinner/Spinner';

const ImageGallery = ({ items, onImgClick, onFetch, hasMore }) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={onFetch}
      hasMore={hasMore}
      loader={
        <div className="loader" key={0}>
          <Spinner />
        </div>
      }
    >
      <ul className={styles.ImageGallery}>
        {items.map(image => (
          <ImageGalleryItem key={image.id} {...image} onImgClick={onImgClick} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onImgClick: PropTypes.func.isRequired,
  onFetch: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default ImageGallery;
