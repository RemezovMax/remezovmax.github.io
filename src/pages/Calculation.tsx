import { useState } from "react";

export default function Calculation() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    try {
      setResult(eval(value));
    } catch (e) {
      alert("Ошибка в выражении!");
    }
  };

  return (
    <div>
      <h1>Математический расчет</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={calculate}>Вычислить</button>
      {result !== null && <p>Результат: {result}</p>}
    </div>
  );
}
