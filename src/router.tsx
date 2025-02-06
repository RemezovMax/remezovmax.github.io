import { BrowserRouter, Route, Routes } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Index from "./pages/Index";
import Conditions from "./pages/Conditions";
import Calculation from "./pages/Calculation";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Wallet from "./pages/Wallet";

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/index" element={<Index />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/calculation" element={<Calculation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
  );
}
