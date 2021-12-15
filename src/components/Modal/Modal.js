import React, { useEffect } from "react";
import PropTypes from "prop-types";
import css from "../../App.module.css";

function Modal({ onClose, onLeft, onRight, src, tags }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    } else if (e.code === "ArrowLeft") {
      onLeft();
    } else if (e.code === "ArrowRight") {
      onRight();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={css.Overlay} onClick={handleOverlayClick}>
      <div>
        <img src={src} alt={tags} className={css.Modal} />
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onLeft: PropTypes.func.isRequired,
  onRight: PropTypes.func.isRequired,
  tags: PropTypes.string,
  scr: PropTypes.string,
};
