import "../Style/ResponsiveNavigation.css";
import cross from "../assets/cross.svg";

export default function ResponsiveNavigation({
  showResponsiveNavigation,
  setShowResponsiveNavigation,
}) {
  return (
    <div className="ResponsiveNavigationRoot">
      <div
        className="containerPaths"
        onClick={() => setShowResponsiveNavigation(false)}
      >
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/menu">MENU</a>
        <a href="/reservation">RESERVATION</a>
        <a href="order">ORDER</a>
        <a href="/contact">CONTACT</a>
      </div>
      <img
        src={cross}
        className="cross"
        onClick={() => setShowResponsiveNavigation(false)}
      />
    </div>
  );
}
