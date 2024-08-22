import "../Style/Buttons.css";

export default function ButtonPrimary({ label, href, onClick }) {
  return (
    <a
      href={href}
      className="aButtonPrimary"
    >
      <div
        className="borderPrimary"
        onClick={onClick}
      >
        <span className="labelPrimary">{label}</span>
      </div>
    </a>
  );
}

export function ButtonSecondary({ label, href, onClick }) {
  return (
    <a
      href={href}
      className="aButtonSecondary"
    >
      <div
        className="borderSecondary"
        onClick={onClick}
      >
        <span className="labelSecondary">{label}</span>
      </div>
    </a>
  );
}

export function ButtonNavigation({ label, href, pathName }) {
  return (
    <a
      href={href}
      className="aButtonNavigation"
    >
      <div
        className={
          pathName === "/contact"
            ? "borderNavigationchanging"
            : "borderNavigation"
        }
      >
        <span
          className={
            pathName === "/contact"
              ? "labelNavigationChanging"
              : "labelNavigation"
          }
        >
          {label}
        </span>
      </div>
    </a>
  );
}
