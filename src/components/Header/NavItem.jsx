import Button from "../UI/Button";

export default function NavItem({ item }) {
  if (item.link) {
    return (
      <li className="header__nav__list-item">
        <a href={item.link}>{item.label}</a>
      </li>
    );
  }
  if (item.onClick) {
    return (
      <li className="header__nav__list-item">
        <Button
          type="primary"
          size="small"
          ariaLabel={item.label}
          onClick={item.onClick}
        >
          {item.icon}
        </Button>
      </li>
    );
  }
  return null;
}
