import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Survey from "./pages/Survey";
import Result from "./pages/Result";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/result" element={<Result />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
