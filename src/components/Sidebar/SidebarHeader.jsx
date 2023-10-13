export default function SidebarHeader() {
    return (
        <div className="column">
            <div className="row">

                {/* Ngeexpand selebar 3 kolom */}
                <div className="col-3">
                    <button
                        className="btn bi bi-list text-primary fs-3 mt-2 pt-2"/>
                </div>

                {/* Ngeexpand sesisanya, font-size 5, font-weight bold*/}
                <div className="col">
                    <p className="text-light pt-4 fs-5 fw-bold"> ELECTRIC FAN </p>
                </div>

            </div>

            <hr className="text-secondary" />
        </div>
    );
}