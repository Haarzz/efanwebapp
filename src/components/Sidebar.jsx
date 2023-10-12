import { useNavigate } from "react-router-dom";
import localStorageKey from "../constant/localStorageKey.jsx";

export default function Sidebar() {
    const navigate = useNavigate();
const handleLogout = () => {
  try {
    localStorage.setItem(localStorageKey.JWT_TOKEN_KEY , null);
    navigate("/login");
  } catch {
    console.log("Error Logout");
  }
};
  return (
    <div className="col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
      <div>
        <div className="listicon">
          <div className="row">
            <div className="col-3">
              <button className="btn bi bi-list text-primary fs-3 mt-2 pt-2"></button>
            </div>
            <div className="col">
              <p className="text-light pt-4 fs-5 fw-bold"> ELECTRIC FAN </p>
            </div>
          </div>
        </div>
        <hr className="text-secondary" />
        <ul className="nav nav-pills flex-column">
          <li className="nav-item text-light">
            <a href="/Dashboard" className="nav-link text-light" aria-current="page">
              <span className="ms-2 bi bi-house-door-fill d-none d-sm-inline"> &nbsp;Dashboard</span>
            </a>
          </li>
          <li className="nav-item text-light">
            <a href="/account" className="nav-link text-light" aria-current="page">
              <span className="ms-2 bi bi-person-fill d-none d-sm-inline"> &nbsp;Account</span>
            </a>
          </li>
          <li className="nav-item text-light">
            <a href="/apps" className="nav-link text-light  " aria-current="page">
              <span className="ms-2 bi bi-circle-fill d-none d-sm-inline"> &nbsp;Apps</span>
            </a>
          </li>
        </ul>
      </div>
      <ul className="nav nav-pills flex-column mb-3">
        <li className="nav-item text-light">
          <a href="/src/Dashboard/component/Help" className="nav-link text-light  " aria-current="page">
            <span className="ms-2 bi bi-info-circle d-none d-sm-inline"> &nbsp;Help</span>
          </a>
        </li>
        <li className="nav-item text-light">
          <a href="/settings" className="nav-link text-light" aria-current="page">
            <span className="ms-2 bi bi-gear-fill d-none d-sm-inline"> &nbsp;Settings</span>
          </a>
        </li>
        <li className="nav-item text-light">
          <a href="" onClick={handleLogout} className="nav-link text-light" aria-current="page">
            <span className="ms-2 bi bi-box-arrow-right d-none d-sm-inline"> &nbsp;Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
