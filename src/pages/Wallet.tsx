import { TonConnectUIProvider, TonConnectButton } from "@tonconnect/ui-react";
import { useState } from "react";
import BottomNav from "../components/BottomNav";

export default function Wallet() {
  const [wallet, setWallet] = useState<string | null>(null);

  return (
    <TonConnectUIProvider>
      <div>
        <h1>Кошелек TON</h1>
        {wallet ? (
          <p>Подключен: {wallet}</p>
        ) : (
          <TonConnectButton onConnect={(provider) => setWallet(provider.account.address)} />
        )}
        <BottomNav />
      </div>
    </TonConnectUIProvider>
  );
}
