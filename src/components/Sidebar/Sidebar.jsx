import { useNavigate } from "react-router-dom";
import localStorageKey from "../../constant/localStorageKey.jsx";
import SidebarItem from "./SidebarItem.jsx";
import SidebarHeader from "./SidebarHeader.jsx";

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
    <div className="col-auto d-flex flex-column vh-100" style={{color: 'red'}}>
      <SidebarHeader />

      <div className="flex-grow-1 flex-column d-flex pb-3 justify-content-between">
        <ul className="nav nav-pills flex-column">
          <SidebarItem href={'/dashboard'} text={'Dashboard'} icon={'bi-house-door-fill'}/>
          <SidebarItem href={'/account'} text={'Account'} icon={'bi-person-fill'}/>
          <SidebarItem href={'/apps'} text={'Apps'} icon={'bi-circle-fill'}/>
        </ul>

        {/* Semua item ini, bakalan ada di bagian bawah */}
        <ul className="nav nav-pills flex-column">
          <SidebarItem href={''} text={'Help'} icon={'bi-info-circle'}/>
          <SidebarItem href={''} text={'Settings'} icon={'bi-gear-fill'}/>
          <SidebarItem href={''} text={'Logout'} icon={'bi-box-arrow-right'} onClick={handleLogout}/>
        </ul>
      </div>

    </div>
  );
}
