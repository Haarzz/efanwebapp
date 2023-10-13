import Sidebar from "./Sidebar/Sidebar.jsx";

export default function Scaffolding({ children }){
    console.log('ngebangun nav drawer');
    return (
    <div className="container-fluid">
        <div className="row full-width">
            <Sidebar />
            {children}
        </div>
    </div>
    );
}