import {Link} from "react-router-dom";

export default function SidebarItem({ text , href , icon , onClick , isSidebarOpened}){

    return (
        <li className="nav-item text-light">
            <Link to={href} className="nav-link text-light" aria-current="page" onClick={onClick}>
                <span className={`ms-2 ${icon}`}>
                    {isSidebarOpened &&
                        <span className="ms-2">{text}</span>
                    }
                </span>
            </Link>
        </li>
    );
}