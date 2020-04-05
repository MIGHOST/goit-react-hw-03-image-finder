import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    imgUrl: PropTypes.string.isRequired,
  };
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) return;
    this.props.onClose();
  };

  render() {
    const { imgUrl } = this.props;

    return (
      <div
        className={styles.Overlay}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.Modal}>
          <img src={imgUrl} alt="img" />
        </div>
      </div>
    );
  }
}

export default Modal;
