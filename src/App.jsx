import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Registration from "./components/Register";
import MainPm from "./ProductionMonitoring/MainPm";
import AuthMiddleware from "./routing/AuthMiddleware.jsx";
import MainEc from "./EnergyConsumption/MainEc";
import MainSPI from "./SparePartInventory/MainSPI";
import { ChakraProvider } from '@chakra-ui/react'
import SidebarScaffolding from "./components/Sidebar/SidebarScaffolding.jsx";

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        <Route element={<SidebarScaffolding/>}>
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
                        <MainPm/>
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
    </ChakraProvider>
  );
}

export default App;
