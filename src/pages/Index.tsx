import { useState, useEffect } from "react";
import BottomNav from "./BottomNav";

export default function Index() {
  const [tabs, setTabs] = useState<string[]>([]);

  useEffect(() => {
    const savedTabs = JSON.parse(localStorage.getItem("userTabs") || "[]");
    setTabs(savedTabs);
  }, []);

  const addTab = () => {
    const name = prompt("Введите название вкладки") || "";
    if (name) {
      const newTabs = [...tabs, name];
      setTabs(newTabs);
      localStorage.setItem("userTabs", JSON.stringify(newTabs));
    }
  };

  return (
    <div>
      <h1>Ваши вкладки</h1>
      {tabs.map((tab, index) => (
        <div key={index}>{tab}</div>
      ))}
      <button onClick={addTab}>Добавить вкладку</button>
      <BottomNav />
    </div>
  );
}
