import { useEffect, useState } from "react";
import { useInitData } from "@twa-dev/sdk";

export default function Profile() {
  const initData = useInitData();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (initData?.user) {
      setUser(initData.user);
    }
  }, [initData]);

  return (
    <div>
      {user ? (
        <div>
          <img src={user.photo_url} alt={user.first_name} />
          <h2>{user.first_name} {user.last_name}</h2>
          <p>@{user.username}</p>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}
