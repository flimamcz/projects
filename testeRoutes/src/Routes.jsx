import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './pages/Cart'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  );
}
