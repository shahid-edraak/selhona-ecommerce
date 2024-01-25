import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./screens/HomeScreen";
import PagesScreen from "./screens/PagesScreen";
import ServicesScreen from "./screens/ServicesScreen";
import ProjectScreen from "./screens/ProjectScreen";
import ContactScreen from "./screens/ContactScreen";
import Single_Services from "./screens/Single_Services";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages" element={<PagesScreen />} />
      <Route path="/services" element={<ServicesScreen />} />
      <Route path="/project" element={<ProjectScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/single_services" element={<Single_Services />} />
    </Routes>
  );
}

export default App;
