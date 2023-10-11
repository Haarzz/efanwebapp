import "./Dashboard.css";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import Information from "./Information";
import Help from "./Help";
import PropTypes from "prop-types";

Dashboard.propTypes = {
  allModel: PropTypes.any,
  refreshPage: PropTypes.func,
};

export default function Dashboard() {


  const dashboardTitle = "Dashboard";
  useEffect(() => {
    const oriTitle = document.title;
    document.title = dashboardTitle;
    return () => {
      document.title = oriTitle;
    };
  });

  return (
    <div className="container-fluid">
      <div className="row full-width vw-100">
        <Sidebar />
        <div className="col-8 pt-1" id="pagelink">
          <h2 className="fw-bolder text-start m-2" id="dashboardmid">
            DASHBOARD
          </h2>
          <div className="card mx-2 rounded-0" style={{width: "auto",height: "auto"}} id="applist">
            <div className="card-header fs-5 rounded-0" id="appbox">
              Applications
            </div>
            <div className="card-body rounded-0" id="applist">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card rounded-0" id="bodycard">
                    <img href="#" src="https://i.ibb.co/gyDKrVq/painting-mountain-lake-with-mountain-background.jpg" className="card-img-top rounded-0" alt="..." id="bodycard" />
                    <div className="card-body" id="bodycard">
                      <a className="text-decoration-none text-dark" href="/sparepart"><h6 className="card-title">Spare Part Inventory</h6></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-0" id="bodycard">
                    <img href="#" src="https://i.ibb.co/gyDKrVq/painting-mountain-lake-with-mountain-background.jpg" className="card-img-top rounded-0" alt="..." id="bodycard" />
                    <div className="card-body" id="bodycard">
                    <a className="text-decoration-none text-dark" href="http://localhost:5174/"><h6 className="card-title">Energy Consumption</h6></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-0" id="bodycard">
                    <img href="#" src="https://i.ibb.co/gyDKrVq/painting-mountain-lake-with-mountain-background.jpg" className="card-img-top rounded-0" alt="..." id="bodycard" />
                    <div className="card-body" id="bodycard">
                    <a className="text-decoration-none text-dark" href="/prodmon"><h6 className="card-title">Production Monitoring</h6></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-0" id="bodycard">
                    <img href="#" src="https://i.ibb.co/gyDKrVq/painting-mountain-lake-with-mountain-background.jpg" className="card-img-top rounded-0" alt="..." id="bodycard" />
                    <div className="card-body" id="bodycard">
                    <a className="text-decoration-none text-dark" href="#"><h6 className="card-title"></h6></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-0" id="bodycard">
                    <img href="#" src="https://i.ibb.co/gyDKrVq/painting-mountain-lake-with-mountain-background.jpg" className="card-img-top rounded-0" alt="..." id="bodycard" />
                    <div className="card-body" id="bodycard">
                    <a className="text-decoration-none text-dark" href="#"><h6 className="card-title"></h6></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card rounded-0" id="bodycard">
                    <img href="#" src="https://i.ibb.co/gyDKrVq/painting-mountain-lake-with-mountain-background.jpg" className="card-img-top rounded-0" alt="..." id="bodycard" />
                    <div className="card-body" id="bodycard">
                    <a className="text-decoration-none text-dark" href="#"><h6 className="card-title"></h6></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 pt-1">
          <h2 className="pt-2"> &nbsp; </h2>
          <Information />
          <Help />
        </div>
      </div>
    </div>
  );
}
