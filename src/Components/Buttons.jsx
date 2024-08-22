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

export function ButtonNavigation({ label, href }) {
  return (
    <a
      href={href}
      className="aButtonNavigation"
    >
      <div className="borderNavigation">
        <span className="labelNavigation">{label}</span>
      </div>
    </a>
  );
}
