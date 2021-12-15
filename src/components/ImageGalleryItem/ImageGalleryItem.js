import React from "react";
import PropTypes from "prop-types";
import css from "../../App.module.css";

const ImageGalleryItem = ({ id, webformatURL, onItemClick }) => {
  const modalContent = (id) => {
    onItemClick(id);
  };
  return (
    <img
      src={webformatURL}
      alt={""}
      className={css.ImageGalleryItemImage}
      onClick={() => {
        modalContent(id);
      }}
    />
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};
