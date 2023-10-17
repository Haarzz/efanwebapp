import "./style/Dashboard.css";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Information from "./component/Information.jsx";
import Help from "./component/Help.jsx";
import SmartManufacturingCard from "./component/SmartManufacturingCard.jsx";

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
        <div className="col-8 pt-1">
          <h2 className="fw-bolder text-start m-2" id="dashboardmid">
            DASHBOARD
          </h2>
          <div className="card mx-2 rounded-0" style={{width: "auto",height: "auto"}} id="applist">
            <div className="card-header fs-5 rounded-0" id="appbox">
              Applications
            </div>
            <div className="card-body" id="applist">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <SmartManufacturingCard
                  title={'Spare Part Inventory'}
                  imageLink={"https://i.ibb.co/gyDKrVq/painting-mountain-lake-with-mountain-background.jpg"}
                  href={'/sparepart'}/>

                <SmartManufacturingCard
                    title={'Energy Consumption'}
                    imageLink={"https://i.ibb.co/cL2WXX4/Energy-Consumption.jpg"}
                    href={'/energycons'}/>

                <SmartManufacturingCard
                  title={'Production Monitoring'}
                  imageLink={"https://i.ibb.co/qjN6vZV/Production-Monitoring.jpg"}
                  href={'/prodmon'}/>

                <SmartManufacturingCard
                  title={''}
                  imageLink={'https://i.ibb.co/gyDKrVq/painting-mountain-lake-with-mountain-background.jpg'}
                  href={''}/>

                <SmartManufacturingCard
                    title={''}
                    imageLink={'https://i.ibb.co/gyDKrVq/painting-mountain-lake-with-mountain-background.jpg'}
                    href={''}/>

                <SmartManufacturingCard
                    title={''}
                    imageLink={'https://i.ibb.co/gyDKrVq/painting-mountain-lake-with-mountain-background.jpg'}
                    href={''}/>
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
