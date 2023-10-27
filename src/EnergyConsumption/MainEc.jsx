import { useEffect, useState} from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import EnergyChart from "./component/EnergyChart";

export default function MainEc() {
  // eslint-disable-next-line no-unused-vars
  const [data , setData] = useState([]);
  const EnergyTitle = "Energy Consumptions";
  useEffect(() => {
    const oriTitle = document.title;
    document.title = EnergyTitle;
    return () => {
      document.title = oriTitle;
    };
  } , []);

  return (
      <div className="w-100 pt-2">
          <h2 className="fw-bolder text-start m-2" id="dashboardmid">
              ENERGY CONSUMPTIONS
          </h2>
          <div className="col-4 py-3">
              <button className="btn btn-secondary btn-sm me-2 ms-2 rounded-pill w-25 " type="button">
                  Week
              </button>
              <button className="btn btn-secondary btn-sm me-2 rounded-pill w-25" type="button">
                  Month
              </button>
              <button className="btn btn-secondary btn-sm me-2 rounded-pill w-25" type="button">
                  Year
              </button>
          </div>
          <div className="row">
              <div className="col-7">
                  <EnergyChart />
              </div>
              <div className="col-5">
                  <AreaChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                          top: 10,
                          right: 20,
                          left: 30,
                          bottom: 0,
                      }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
              </div>
          </div>
          <div className="row">
              <div className="col-4">
                  <AreaChart
                      width={400}
                      height={280}
                      data={data}
                      margin={{
                          top: 10,
                          right: 10,
                          left: 0,
                          bottom: 0,
                      }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
              </div>
              <div className="col-4">
                  <AreaChart
                      width={400}
                      height={280}
                      data={data}
                      margin={{
                          top: 10,
                          right: 10,
                          left: 0,
                          bottom: 0,
                      }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
              </div>
              <div className="col-4">
                  <AreaChart
                      width={400}
                      height={280}
                      data={data}
                      margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                      }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
              </div>
          </div>
      </div>
  );
}
