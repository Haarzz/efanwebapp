import {Link} from "react-router-dom";

export default function SmartManufacturingCard({ imageLink , title , href }){
    return (
        <Link className="text-decoration-none text-dark" to={href}>
            <div className="col">
                <div className="card rounded-0" id="bodycard">
                    <img src={imageLink} className="card-img-top rounded-0" alt="..." id="imagesize" />
                    <div className="card-body" id="bodycard">
                        <h6 className="card-title">{title}</h6>
                    </div>
                </div>
            </div>
        </Link>
    )
}