import Sidebar from "./Sidebar.jsx";
import {Outlet} from "react-router-dom";

export default function SidebarScaffolding(){
    return (
    <div className="container-fluid">
        <div className="row vw-100 d-flex">
            <Sidebar />

            <div className="flex-grow-1 col">
                <Outlet/>
            </div>
        </div>
    </div>
    );
}