export default function SidebarItem({ text , href , icon , onClick}){
    return (
        <li className="nav-item text-light">
            <a href={href} className="nav-link text-light" aria-current="page" onClick={onClick}>
                <span className={`ms-2 ${icon}`}>
                    <span className="ms-2">{text}</span>
                </span>
            </a>
        </li>
    );
}