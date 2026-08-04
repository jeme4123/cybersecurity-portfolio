import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import LinuxMemoryProject from "./pages/LinuxMemoryProject";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/projects/linux-memory"
        element={<LinuxMemoryProject />}
      />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;