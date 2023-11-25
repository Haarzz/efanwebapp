import { useEffect, useState} from "react";
import axios from "axios"
import { Chart } from 'primereact/chart';

export default function MainEc() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:4000/api/alldata')
      .then(response => {
          setData(response.data);
      })
      .catch(error => {
          console.error('Error Fetching Data:', error);
      })
  }, [])
  const EnergyTitle = "Energy Consumptions";
  useEffect(() => {
    const oriTitle = document.title;
    document.title = EnergyTitle;
    return () => {
      document.title = oriTitle;
    };
  } , []);
  const voltage = data.map(item => item.voltage)
  const ampere = data.map(item => item.ampere)
  const frequency = data.map(item => item.frequency)    
  const power = data.map(item => item.power)    
  
  console.log("Voltage", voltage)
  console.log("Ampere", ampere)
  console.log("Frequency", frequency)
  console.log("Power", power)
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
              </div>
              <div className="col-5">
                  </div>
      </div>
      </div>
  );
}
