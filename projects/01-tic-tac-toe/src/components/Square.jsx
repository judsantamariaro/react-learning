import PropTypes from "prop-types";

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

Square.propTypes = {
  children: PropTypes.string,
  isSelected: PropTypes.bool,
  updateBoard: PropTypes.func,
  index: PropTypes.number,
};

export default Square;
