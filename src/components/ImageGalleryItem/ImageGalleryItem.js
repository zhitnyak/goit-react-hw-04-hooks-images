import PropTypes from "prop-types";
import css from "../../App.module.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, modalOpen }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => {
        modalOpen(largeImageURL, tags);
      }}
    >
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  modalOpen: PropTypes.func,
  tags: PropTypes.string,
};
