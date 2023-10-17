import {useState} from "react";

export default function SidebarViewModel() {
    const [isSidebarOpened , setSidebarOpenedState] = useState(true);
    const toogleSidebar = () => {
        setSidebarOpenedState(() => !isSidebarOpened);
    };

    return {
        isSidebarOpened,
        toogleSidebar
    };
}