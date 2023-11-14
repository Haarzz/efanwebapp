import { useEffect , useState } from "react";
import { useUser } from "../Contexts/UserContext";
import MainPmRepository from "./MainPmRepository";
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

  // let [socket , setSocket] = useState(null);
  // useEffect(() => {
  //   setSocket(new WebsocketService);
  //   console.log('socket berhasil di inisiasi')
  // } , []);

  // useEffect(() => {
  //   console.log('model id ' , id , socket);
  //   socket?.setModelId(id, refresh);
  // }, [id, refresh, socket]);

  const selectedArduinoName = getData.allArduino.find((arduino) => arduino.nama_arduino === selectedArduino?.nama_arduino);

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
