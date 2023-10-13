import Sidebar from "./Sidebar/Sidebar.jsx";
import {Outlet} from "react-router-dom";

export default function SidebarScaffolding(){
    return (
    <div className="container-fluid">
        <div className="row full-width">
            <Sidebar />
            <Outlet />
        </div>
    </div>
    );
}