import Sidebar from "./Sidebar.jsx";
import {Outlet} from "react-router-dom";
import ColorThemes from "../../themes/ColorThemes.jsx";

export default function SidebarScaffolding(){
    return (
    <div className="container-fluid" style={{backgroundColor: ColorThemes.background}}>
        <div className="row vw-100 d-flex">
            <Sidebar />

            <div className="flex-grow-1 col">
                <Outlet/>
            </div>
        </div>
    </div>
    );
}