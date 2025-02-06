import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const nextPage = () => {
    if (page < 3) setPage(page + 1);
    else navigate("/index");
  };

  return (
    <div>
      <h1>Ознакомление {page + 1}/4</h1>
      <p>Описание {page + 1}-й страницы...</p>
      <button onClick={nextPage}>{page === 3 ? "Начать" : "Далее"}</button>
    </div>
  );
}
