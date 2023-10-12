import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import Registration from "./components/Register";
import { useState } from "react";
import MainPm from "./ProductionMonitoring/MainPm";
import { useEffect } from "react";
import AuthMiddleware from "./routing/AuthMiddleware.jsx";
import MainEc from "./EnergyConsumption/MainEc";

function App() {
  // need refresh untuk ngerefresh satu page
  const [needRefresh, setNeedRefresh] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const refresh = () => {
    setNeedRefresh((needRefresh) => {
      return !needRefresh;
    });
  };
  // ini kenapa kok ditaruh disini, karena ini dipake di run model sama di tabel
  // eslint-disable-next-line no-unused-vars
  const [allTransactionData, setAllTransactionData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/alldata") // Update with your API endpoint
      .then((response) => response.json())
      .then((newData) => setAllTransactionData(newData))
      .catch((error) => console.error("Error fetching all transaction data:", error));
  }, [needRefresh]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Callback function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/dashboard"
          element={
            <AuthMiddleware>
              <Dashboard allModel={allTransactionData} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            </AuthMiddleware>
          }
        />

        <Route
          path="/prodmon"
          element={
            <AuthMiddleware>
              <MainPm allModel={allTransactionData} refreshPage={refresh} />
            </AuthMiddleware>
          }
        />
        <Route path="/energycons" element={
          <AuthMiddleware>
            <MainEc />
          </AuthMiddleware>
        } />
      </Routes>
    </Router>
  );
}

export default App;
