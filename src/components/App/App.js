import React, { Component } from 'react';
import styles from './App.module.css';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import * as imgApi from '../../services/img-api';
import Spinner from '../Spinner/Spinner';
import ErrorNotification from '../Error/ErrorNotification';
import Modal from '../Modal/Modal';

class App extends Component {
  state = {
    images: [],
    loading: false,
    searchQuery: '',
    page: 1,
    largeImageUrl: '',
    isOpen: false,
    error: null,
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

    this.setState({ loading: true });

    imgApi
      .fetchImg(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    const { searchQuery } = this.state;
    if (searchQuery === query) return;
    this.setState({ searchQuery: query, images: [], page: 1 });
  };

  render() {
    const { images, loading, isOpen, largeImageUrl, error } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {images.length > 0 && (
          <ImageGallery items={images} onImgClick={this.openModal} />
        )}
        {loading && <Spinner />}
        {isOpen && <Modal imgUrl={largeImageUrl} onClose={this.closeModal} />}
        {error && <ErrorNotification text={error.message} />}
        {images.length > 0 && !loading && <Button onClick={this.fetchImages} />}
      </div>
    );
  }
}

export default App;
