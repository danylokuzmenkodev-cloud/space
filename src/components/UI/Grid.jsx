import PropTypes from "prop-types";

export default function Grid({ items, renderItem }) {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <div key={index} className={`grid__item grid__item-${index + 1}`}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
};
