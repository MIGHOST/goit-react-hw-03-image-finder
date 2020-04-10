import React, { Component } from 'react';
import styles from './App.module.css';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import * as imgApi from '../../services/img-api';
import ErrorNotification from '../Error/ErrorNotification';
import Modal from '../Modal/Modal';

class App extends Component {
  state = {
    images: [],  
    searchQuery: '',
    page: 1,
    largeImageUrl: '',
    isOpen: false,
    error: null,
    hasMore: true,
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.fetchImages();
    }
  }
  openModal = urlImg => {
    this.setState({ largeImageUrl: urlImg, isOpen: true });
  };
  closeModal = () => this.setState({ largeImageUrl: '', isOpen: false });

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    imgApi
      .fetchImg(searchQuery, page)
      .then(({ images, total }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
          hasMore: total > 12 * page,
        })),
      )
      .catch(error => this.setState({ error }));
  };

  handleSearchFormSubmit = query => {
    const { searchQuery } = this.state;
    if (searchQuery === query) return;
    this.setState({ searchQuery: query, images: [], page: 1 });
  };

  render() {
    const { images, isOpen, largeImageUrl, error, hasMore } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {images.length > 0 && (
          <ImageGallery
            items={images}
            onImgClick={this.openModal}
            onFetch={this.fetchImages}
            hasMore={hasMore}
          />
        )}
        {isOpen && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageUrl} alt="img" />
          </Modal>
        )}
        {error && <ErrorNotification text={error.message} />}
        {images.length > 0 && <Button />}
      </div>
    );
  }
}

export default App;
