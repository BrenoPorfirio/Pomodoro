import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/Pomodoro" element={<DefaultLayout />}>
        <Route path="/Pomodoro" element={<Home />} />
        <Route path="/Pomodoro/history" element={<History />} />
      </Route>
    </Routes>
  );
}
