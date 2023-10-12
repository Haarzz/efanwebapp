export default function SmartManufacturingCard({ imageLink , title , href }){
    return (
        <a className="text-decoration-none text-dark" href={href}>
            <div className="col">
                <div className="card rounded-0" id="bodycard">
                    <img src={imageLink} className="card-img-top rounded-0" alt="..." id="imagesize" />
                    <div className="card-body" id="bodycard">
                        <h6 className="card-title">{title}</h6>
                    </div>
                </div>
            </div>
        </a>
    )
}