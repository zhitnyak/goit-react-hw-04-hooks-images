import PropTypes from "prop-types";
import React, { Component } from "react";
import css from "../../App.module.css";

class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
    onClick: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.cleanEventListener);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.cleanEventListener);
  }

  cleanEventListener = (e) => {
    if (e.code === "Escape") {
      this.props.onClick();
    }
  };
  render() {
    const { onClick, largeImageURL, alt } = this.props;
    return (
      <div className={css.Overlay} onClick={onClick}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt={alt} />
        </div>
      </div>
    );
  }
}
export default Modal;

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
