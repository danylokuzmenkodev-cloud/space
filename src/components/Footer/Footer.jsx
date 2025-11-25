import { ReactComponent as RocketIcon } from "../../assets/icons/rocket.svg";

export default function Footer() {
  return (
    <footer
      className="footer"
      aria-label="Site footer with rocket icon and message"
    >
      <div className="footer__container container">
        <div className="footer__content">
          <RocketIcon className="footer__icon" />
          <p className="footer__text">Exciting space adventure!</p>
        </div>
      </div>
    </footer>
  );
}
