import { Route, Routes } from "react-router";

import Home from "./pages/Home.jsx";
import LinuxMemoryProject from "./pages/LinuxMemoryProject.jsx";
import WindowsForensicsProject from "./pages/WindowsForensicsProject.jsx";
import NetworkTrafficProject from "./pages/NetworkTrafficProject.jsx";
import CriticalInfrastructureProject from "./pages/CriticalInfrastructureProject.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />

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

        <Route
          path="/projects/critical-infrastructure"
          element={<CriticalInfrastructureProject />}
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;