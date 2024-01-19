import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./screens/HomeScreen";
import PagesScreen from "./screens/PagesScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages" element={<PagesScreen />} />
    </Routes>
  );
}

export default App;
