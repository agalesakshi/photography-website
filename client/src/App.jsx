import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/services/:type"
        element={<ServicePage />}
      />
    </Routes>
  );
}

export default App;
