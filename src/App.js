
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Menu2 from "./pages/Menu2.js";
import Menu3 from "./pages/Menu3.js";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu-2" element={<Menu2 />} />
        <Route path="/Menu-3" element={<Menu3 />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
