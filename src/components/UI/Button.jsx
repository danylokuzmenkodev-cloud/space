import PropTypes from "prop-types";

export default function Button({ children, ariaLabel, type, size, ...props }) {
  const className = `button button--${type} button--${size}`;

  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "icon"]),
  size: PropTypes.oneOf(["small", "large"]),
};

Button.defaultProps = {
  type: "primary",
  size: "small",
};
