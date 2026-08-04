import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import LinuxMemoryProject from "./pages/LinuxMemoryProject";
import WindowsForensicsProject from "./pages/WindowsForensicsProject";
import NetworkTrafficProject from "./pages/NetworkTrafficProject";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/projects/linux-memory"
        element={<LinuxMemoryProject />}
      />

      <Route
        path="/projects/windows-forensics"
        element={<WindowsForensicsProject />}
      />

      <Route
        path="/projects/network-traffic"
        element={<NetworkTrafficProject />}
      />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;