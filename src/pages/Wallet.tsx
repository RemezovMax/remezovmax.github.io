import { TonConnectUIProvider, TonConnectButton } from "@tonconnect/ui-react";
import BottomNav from "../components/BottomNav";

export default function Wallet() {
  return (
    <TonConnectUIProvider>
      <div>
        <h1>Подключение TON-кошелька</h1>
        <TonConnectButton />
      <BottomNav />
      </div>
    </TonConnectUIProvider>
  );
}
