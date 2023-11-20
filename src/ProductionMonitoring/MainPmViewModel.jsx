import { useEffect , useState, useRef } from "react";
import { useUser } from "../Contexts/UserContext";
import MainPmRepository from "./MainPmRepository";
import { useWebsocket } from "../Contexts/WebsocketProvider";
import axios from "axios";
import {confirmDialog } from 'primereact/confirmdialog';
export default function useMainPmViewModel() {
  useEffect(() => {
    const prodTitle = "Production Monitoring";
    const oriTitle = document.title;
    document.title = prodTitle;
    return () => {
      document.title = oriTitle;
    };
  }, []);

  const [selectedArduino, setSelectedArduino] = useState();
  function chooseArduino(newArduino){
   axios.get(`http://localhost:4000/api/get-detail-arduino/${newArduino.nama_arduino}`)
        .then(response => {
            if (response.status == 200){
                setSelectedArduino(response.data);
            }
            else {
                console.log("Response 404, ketika milih arduino : " , response.data);
            }
        })
        .catch(err => console.log("Ada error ketika fetch transaksi," , err))
  }

  const websocketService = useWebsocket();

  const [getData, setGetData] = useState({
    allModel: [],
    allGroup: [],
    allArduino: [],
  });
  const [listTransaction, setListTransaction] = useState([])
  function chooseTransaction(transaction) {
    axios.put("http://localhost:4000/api/update-transaction-id/", {
      nama_arduino: selectedArduino.nama_arduino,
      trans_id: transaction.id
    })
    .then(response => {
      if(response.status == 200) {
        console.log('berhasil update arduino ' , response.data)
        setSelectedArduino(response.data)
      }
    })
    .catch(err => console.log("Ada error ketika fetch arduino," , err))

  }


  useEffect(() => {
    if (selectedArduino != undefined){
        websocketService.on(selectedArduino.nama_arduino , (message) => {
            console.log(`dapat pesan dari arduino ${selectedArduino.nama_arduino} ` , message)
            setSelectedArduino(message.arduino)
        });
    }
    if (selectedArduino != undefined){
      axios.get(`http://localhost:4000/api/get-transaction-by-arduino/${selectedArduino.nama_arduino}`)
        .then(response => {
          setListTransaction(response.data)
        })
        .catch(err => console.log("Ada error ketika fetch arduino," , err))
    }
  } , [selectedArduino])
  
  const { user } = useUser();
  useEffect(() => {
    if (user != undefined && user != null) {
        const repository = new MainPmRepository();
        repository.getProductionMonitoringData(user)
            .then((result) => {
                if (result != null) setGetData(result)
            });
    }
  }, [user]);

// Handle START AND STOP PRODUCTIOn
  const [isControlsEnabled, setIsControlsEnabled] = useState(true);
  const toast = useRef(null);

  const acceptStart = () => {
      toast.current.show({ severity: 'success', summary: 'Start', detail: 'You Started Production', life: 3000 });setIsControlsEnabled(false)
  }
  const acceptStop = () => {
      toast.current.show({ severity: 'error', summary: 'Stop', detail: 'You Stopped Production', life: 3000 });setIsControlsEnabled(true)
  }
  const handleStartClick = () => {
      confirmDialog({
          message: 'Are you sure you want to Start Procution?',
          header: 'Confirmation',
          icon: 'pi pi-check',
          accept: acceptStart,
      });
  };

  const handleStopClick = () => {
      confirmDialog({
          message: 'Are you sure you want to Stop Production?',
          header: 'Delete Confirmation',
          icon: 'pi pi-info-circle',
          acceptClassName: 'p-button-danger',
          accept: acceptStop,
      });
  };
  return {
    confirmDialog,
    handleStartClick,
    handleStopClick,
    isControlsEnabled,
    chooseArduino,
    selectedArduino,
    getData,
    listTransaction,
    chooseTransaction,
    toast,


  };
}
