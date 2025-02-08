import { useState } from "react";
import { evaluate } from "mathjs"; // Импортируем функцию для вычислений
import BottomNav from "../components/BottomNav";

export default function Calculation() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<number | string | null>(null);

  const calculate = () => {
    try {
      const res = evaluate(value); // Вычисляем выражение с помощью math.js
      setResult(res);
    } catch (e) {
      setResult("Ошибка в выражении!"); // Если ошибка, показываем сообщение
    }
  };

  return (
    <div>
      <h1>Математический расчет</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите выражение, например: 2+2*2"
      />
      <button onClick={calculate}>Вычислить</button>
      {result !== null && <p>Результат: {result}</p>}
      <BottomNav />
    </div>
  );
}
