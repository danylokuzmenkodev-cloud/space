import { useMemo, useState } from "react";
import Button from "../UI/Button";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import NavItem from "./NavItem";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const openClass = isOpen ? "is-open" : "";

  useLockBodyScroll(isOpen);

  const navItems = useMemo(
    () => [
      { label: "Home", link: "#home" },
      { label: "Products", link: "#products" },
      {
        label: "Cart",
        icon: <span className="basket-icon" />,
        onClick: () => console.log("Item clicked"),
      },
    ],
    [],
  );

  const menuOverlayJSX = isOpen && (
    <div
      className="header__overlay"
      role="button"
      tabIndex={0}
      aria-label="Close menu"
      onClick={() => setIsOpen(false)}
    ></div>
  );

  return (
    <header className="header">
      <div className="container header__container">
        <a href="/home" className="header__logo" aria-label="Company logo">
          <LogoIcon />
        </a>

        <div className={`header__burger ${openClass}`}>
          <Button
            type="icon"
            onClick={toggleMenu}
            ariaLabel="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </Button>
        </div>
        {navItems?.length && (
          <nav
            className={`header__nav ${openClass}`}
            aria-label="Main navigation"
          >
            <ul className="header__nav__list">
              {navItems.map((item, index) => (
                <NavItem item={item} key={index} />
              ))}
            </ul>
          </nav>
        )}
        {menuOverlayJSX}
      </div>
    </header>
  );
}
