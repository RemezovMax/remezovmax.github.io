import { useEffect, useState } from "react";
import { isTMA } from "@telegram-apps/bridge";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isInTelegram, setIsInTelegram] = useState<boolean | null>(null);

  useEffect(() => {
    const checkEnvironment = async () => {
      const result = await isTMA();
      setIsInTelegram(result);
    };
    checkEnvironment();
  }, []);

  if (isInTelegram === null) return <p>Проверка среды...</p>;

  if (!isInTelegram) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Откройте приложение в Telegram</h2>
        <p>Это мини-приложение работает только внутри Telegram.</p>
      </div>
    );
  }

  return <>{children}</>;
}
