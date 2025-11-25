import PropTypes from "prop-types";

export default function InfoBlock({ title, description, cta }) {
  if (!title && !description && !cta) return null;

  return (
    <div className="info-block">
      {title && <div className="info-block__title">{title}</div>}
      {description && (
        <div className="info-block__description">{description}</div>
      )}
      {cta && <div className="info-block__cta">{cta}</div>}
    </div>
  );
}

InfoBlock.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  cta: PropTypes.node,
};

InfoBlock.defaultProps = {
  title: null,
  description: null,
  cta: null,
};
