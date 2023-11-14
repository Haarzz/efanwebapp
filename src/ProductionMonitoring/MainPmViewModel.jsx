import { useEffect , useState } from "react";
import { useUser } from "../Contexts/UserContext";
import MainPmRepository from "./MainPmRepository";
import { useWebsocket } from "../Contexts/WebsocketProvider";
export default function useMainPmViewModel() {
  useEffect(() => {
    const prodTitle = "Production Monitoring";
    const oriTitle = document.title;
    document.title = prodTitle;
    return () => {
      document.title = oriTitle;
    };
  }, []);

  // need refresh untuk ngerefresh satu page
  const [needRefresh, setNeedRefresh] = useState(false);
  const refresh = () => {
    setNeedRefresh((needRefresh) => {
      return !needRefresh;
    });
  };

  const [selectedArduino, setSelectedArduino] = useState();
  const websocketService = useWebsocket();
  useEffect(() => {
    console.log("USE EFFECT JALAN " , selectedArduino , websocketService)
    if (selectedArduino != undefined){
        websocketService.on(selectedArduino.nama_arduino , (message) => {
            console.log(`dapat pesan dari arduino ${selectedArduino.nama_arduino} ` , message)
            refresh();
        });
    }
  } , [selectedArduino])

  const [getData, setGetData] = useState({
    allModel: [],
    allGroup: [],
    allArduino: [],
  });
  
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


  const [isControlsEnabled, setIsControlsEnabled] = useState(true);

  const handleStartClick = () => {
    setIsControlsEnabled(false);
  };

  const handleStopClick = () => {
    setIsControlsEnabled(true);
  };

  return {
    refresh,
    handleStartClick,
    handleStopClick,
    isControlsEnabled,
    setSelectedArduino,
    selectedArduino,
    getData,
  };
}
