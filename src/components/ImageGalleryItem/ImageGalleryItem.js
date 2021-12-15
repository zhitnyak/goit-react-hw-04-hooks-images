import React from "react";
import PropTypes from "prop-types";
import css from "../../App.module.css";

function ImageGalleryItem({ src, alt, onClick, id }) {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => {
        onClick(src, alt, id);
      }}
    >
      <img src={src} alt={alt} className={css.ImageGalleryItemImage} id={id} />
    </li>
  );
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  dataId: PropTypes.number,
};
