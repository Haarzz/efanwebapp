import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Registration from "./Dashboard/Account/Register";
import MainPm from "./ProductionMonitoring/MainPm";
import AuthMiddleware from "./routing/AuthMiddleware.jsx";
import MainEc from "./EnergyConsumption/MainEc";
import MainSPI from "./SparePartInventory/MainSPI";
import SidebarScaffolding from "./components/Sidebar/SidebarScaffolding.jsx";
import MainAcc from "./Dashboard/Account/MainAcc";
import MainAdmin from "./Dashboard/Account/AdminPage/MainAdmin.jsx"
import { WebsocketProvider } from "./Contexts/WebsocketProvider.jsx";
import AdminMiddleware from "./routing/AdminMiddleware.jsx";
import TransactionHistory from "./Dashboard/Account/TransactionHistoryPage/TransactionHistory.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/efanadmin" element={
          <AdminMiddleware>
            <MainAdmin />
          </AdminMiddleware>} />
          <Route
            path="/all-transaction"
            element={
              <AdminMiddleware>
                <TransactionHistory />
                </AdminMiddleware>
            }
          />

          <Route element={<SidebarScaffolding />}>
            <Route
              path="/dashboard"
              element={
                <AuthMiddleware>
                  <Dashboard />
                </AuthMiddleware>
              }
            />

            <Route
              path="/energycons"
              element={
                <AuthMiddleware>
                  <MainEc />
                </AuthMiddleware>
              }
            />

            <Route
              path="/prodmon"
              element={
                <AuthMiddleware>
                  <WebsocketProvider>
                    <MainPm />
                  </WebsocketProvider>
                </AuthMiddleware>
              }
            />
            <Route
              path="/account"
              element={
                <AuthMiddleware>
                  <MainAcc />
                </AuthMiddleware>
              }
            />
          </Route>

          <Route
            path="/sparepart"
            element={
              <AuthMiddleware>
                <MainSPI />
              </AuthMiddleware>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
