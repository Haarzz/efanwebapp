import { useNavigate } from "react-router-dom";
import localStorageKey from "../../constant/localStorageKey.jsx";
import SidebarItem from "./SidebarItem.jsx";
import SidebarHeader from "./SidebarHeader.jsx";
import SidebarViewModel from "./SidebarViewModel.jsx";

export default function Sidebar() {
  const viewModel = SidebarViewModel();

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
      <SidebarHeader toogleSidebar={viewModel.toogleSidebar} isSidebarOpened={viewModel.isSidebarOpened}/>

        <div className="flex-grow-1 flex-column d-flex pb-3 justify-content-between">
          <ul className="nav nav-pills flex-column">
            <SidebarItem href={'/dashboard'} text={'Dashboard'} icon={'bi-house-door-fill'} isSidebarOpened={viewModel.isSidebarOpened}/>
            <SidebarItem href={'/account'} text={'Account'} icon={'bi-person-fill'} isSidebarOpened={viewModel.isSidebarOpened}/>
            <SidebarItem href={'/apps'} text={'Apps'} icon={'bi-circle-fill'} isSidebarOpened={viewModel.isSidebarOpened}/>
          </ul>

          {/* Semua item ini, bakalan ada di bagian bawah */}
          <ul className="nav nav-pills flex-column">
            <SidebarItem href={''} text={'Help'} icon={'bi-info-circle'} isSidebarOpened={viewModel.isSidebarOpened}/>
            <SidebarItem href={''} text={'Settings'} icon={'bi-gear-fill'} isSidebarOpened={viewModel.isSidebarOpened}/>
            <SidebarItem href={''} text={'Logout'} icon={'bi-box-arrow-right'} onClick={handleLogout} isSidebarOpened={viewModel.isSidebarOpened}/>
          </ul>
        </div>
    </div>
  );
}
