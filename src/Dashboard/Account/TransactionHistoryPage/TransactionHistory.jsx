import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./style/transaction.css";
import 'primereact/resources/themes/viva-light/theme.css';


export default function TransactionHistory() {
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
      axios
      .get("http://localhost:4000/api/get-all-transaction")
      .then((response) =>{ response.data
       setDatas(response.data)
      })
      .catch((error)=> {
        console.log(error)
      })
  }, []);
  const formatDateTime = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateTimeString).toLocaleString(undefined, options);
  };
  const data = datas.map((item, index) => ({
    no: index + 1,
    line: item.assign_arduino,
    group: item.group_id.group_name,
    model: item.model_id.model_name,
    plan: item.plan,
    actual: item.actual,
    diff: item.plan - item.actual,
    date: formatDateTime(item.created_at),
  }));

  const handleBack = async () => {
    try {
      navigate("/account")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <button className="btn btn-danger ms-3 mt-2" onClick={handleBack}>Back</button>
    <div className="tablee">
      <DataTable value={data} className="p-datatable" columnResizeMode="expand"  showGridlines  paginator rows={5} rowsPerPageOptions={[10, 25, 50]}  >
        <Column field="no"  sortable header="NO" />
        <Column field="line"  sortable header="LINE" />
        <Column field="group"  sortable header="GROUP" />
        <Column field="model"  sortable header="MODEL" />
        <Column field="plan"  sortable header="PROD. PLAN" />
        <Column field="actual"  sortable header="ACTUAL" />
        <Column field="diff"  sortable header="DIFFERENT" />
        <Column field="date"  sortable header="DATE" />
      </DataTable>
      </div>
    </>
  );
}
