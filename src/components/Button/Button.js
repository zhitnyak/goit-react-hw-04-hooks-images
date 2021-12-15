import PropTypes from "prop-types";
import css from "../../App.module.css";

const Button = ({ onClick }) => {
  return (
    <button type="button" className={css.Button} onClick={onClick}>
      Load more
    </button>
  );
};
export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
