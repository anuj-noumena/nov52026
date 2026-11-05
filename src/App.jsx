import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar /> {/* Always visible on every page */}
      <Routes>
        {/* Route = "when URL is X, render component Y" */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Wildcard = catch-all 404 */}
      </Routes>
    </div>
  );
}

export default App;
