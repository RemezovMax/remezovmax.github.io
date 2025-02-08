import { useState } from "react";
import BottomNav from "../components/BottomNav";

export default function Calculation() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    if (!isNaN(sum)) setResult(sum);
    else alert("Введите корректные числа");
  };

  return (
    <div>
      <h1>Калькулятор</h1>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Число 1" />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Число 2" />
      <button onClick={calculate}>Рассчитать</button>
      {result !== null && <p>Результат: {result}</p>}
      <BottomNav />
    </div>
  );
}
