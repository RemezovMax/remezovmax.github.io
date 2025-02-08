import { NavLink } from "react-router-dom";
import "./BottomNav.css"; // Добавим стили

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/index" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>🏠 Главная</NavLink>
      <NavLink to="/conditions" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>📋 Вкладки</NavLink>
      <NavLink to="/calculation" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>🧮 Калькулятор</NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>👤 Профиль</NavLink>
    </nav>
  );
}
