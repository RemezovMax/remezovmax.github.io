import { useEffect, useState } from "react";
import { retrieveLaunchParams } from "@telegram-apps/sdk";
import BottomNav from "../components/BottomNav";

export default function Profile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const { initData } = retrieveLaunchParams();
    if (initData && initData.user) {
      setUser(initData.user);
    } else {
      console.error("Данные пользователя отсутствуют или недоступны.");
    }
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <img src={user.photoUrl} alt={user.firstName} />
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <p>@{user.username}</p>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
      <BottomNav />
    </div>
  );
}
