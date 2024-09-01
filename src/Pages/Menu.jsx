import menu from "../assets/menu-little-lemon.jpg";
import "../Style/Menu.css";

export default function Menu() {
  return (
    <div className="containerImageMenu">
      <img
        className="imageMenu"
        src={menu}
        alt="image of the menu"
      />
    </div>
  );
}
