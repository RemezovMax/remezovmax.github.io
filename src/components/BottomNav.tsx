import { NavLink } from "react-router-dom";
import "./BottomNav.css"; // Добавим стили

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/index" className="nav-item">🏠 Главная</NavLink>
      <NavLink to="/conditions" className="nav-item">📋 Вкладки</NavLink>
      <NavLink to="/calculation" className="nav-item">🧮 Калькулятор</NavLink>
      <NavLink to="/profile" className="nav-item">👤 Профиль</NavLink>
    </nav>
  );
}
