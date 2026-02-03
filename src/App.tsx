import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExecutiveReport from "./pages/ExecutiveReport";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/executive-report" element={<ExecutiveReport />} />
    </Routes>
  );
}

export default App;
