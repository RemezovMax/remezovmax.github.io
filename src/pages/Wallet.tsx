import { TonConnectUIProvider, TonConnectButton } from "@tonconnect/ui-react";

export default function Wallet() {
  return (
    <TonConnectUIProvider>
      <div>
        <h1>Подключение TON-кошелька</h1>
        <TonConnectButton />
      </div>
    </TonConnectUIProvider>
  );
}
